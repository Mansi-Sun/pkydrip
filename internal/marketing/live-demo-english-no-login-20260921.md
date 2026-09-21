# PKYDrip Live Demo 部署说明（2026-09-21）

面向 Google 广告落地页访客：从农场灌溉控制器产品页进入 **Online Demo**，免登录、全英文，展示灌溉计划、运行时长、空气/土壤温湿度与光照。

---

## 1. 访客路径

1. 广告进入  
   https://smart.pky-dripirrigation.com/product/farm-irrigation-controller/?utm_source=google&utm_medium=cpc&utm_campaign=farm-irrigation-controller
2. 点击 **View Online Demo**
3. 打开  
   https://smart.pky-dripirrigation.com/live-demo/  
   不需要用户名、密码或邮箱表单。

不要打开云管理后台 `http://47.238.197.93:8080/`（那是登录后的平台）。不要再用旧页 `http://47.238.197.93/live`（中文平行栈）。

---

## 2. 数据怎么来

```
浏览器 (HTTPS smart.pky-dripirrigation.com)
  → GET /live-api/demo          （同源，避免混合内容）
  → Netlify 反代
  → http://47.238.197.93:8080/api/public/live-demo
  → 云库只读：
       device_programs   灌溉计划 A–D、分区 runtime
       program_runs      执行时长
       device_metrics    air / soil / light
```

接口返回英文 key 与英文 label。设备台账里的中文名会被替换成 `Irrigation controller M16-…`。

**不反代** `http://47.238.197.93/live`，**不反代** `/api/control`。

---

## 3. 本地已提交（待推送 / 待上机）

| 仓库 | 分支 | 提交 | 内容 |
|------|------|------|------|
| `pkydrip`（谷歌站 Hugo） | `master` | `bfae516b` | `/live-demo/` 去表单门槛；英文计划/runtime/传感器；Netlify 反代改为云公开接口 |
| `pkydrip-cloud-cn`（云） | `github-latest` | `91974b8` | `GET /api/public/live-demo` + 静态 `/live-demo.html` |

本机没有 GitHub HTTPS 凭据、也没有香港机 SSH 私钥，所以**远程发布需要在 GitHub Desktop / 有密钥的电脑上完成下面两步**。

---

## 4. 发布步骤

### A. 谷歌站（Netlify）

在 GitHub Desktop 打开仓库 **pkydrip**，确认 Current Branch 是 **master**，点 **Push origin**。

Netlify 会跟 `origin/master` 自动构建。发布后检查：

```bash
curl -sI https://smart.pky-dripirrigation.com/live-demo/
curl -sI https://smart.pky-dripirrigation.com/js/live-demo.js
curl -sI https://smart.pky-dripirrigation.com/live-api/demo
```

期望：`/live-demo/` HTML 200；`/live-api/demo` 在云接口上线后返回 JSON（`ok: true`，`locale: "en"`）。

命令行等价：

```bash
cd /Users/junfeng/GitHub/pkydrip
git push origin master
```

### B. 香港云（公开接口必须先上，否则 Demo 页会报 feed 失败）

在**已配置 SSH 密钥**的电脑上（本机 `~/.ssh` 没有私钥）：

```bash
cd /Users/junfeng/GitHub/pkydrip-cloud-cn
git push origin github-latest:main    # 或 GitHub Desktop 把 github-latest 合并进 main 再 Push

# 上机重建（不要带 --delete 误删 .env / 数据库）
ssh root@47.238.197.93
cd /var/www/pkydrip-cloud-cn
git fetch origin && git checkout main && git pull --ff-only origin main
docker compose up -d --build backend frontend
curl -s http://127.0.0.1:8080/api/public/live-demo | head
```

或本机有密钥时：

```bash
DEPLOY_HOST=root@47.238.197.93 ./scripts/deploy-demo.sh
```

验证：

```bash
curl -s http://47.238.197.93:8080/api/public/live-demo
# 应含 "locale":"en"、controllers[].programs、environment.airTemperature 等英文字段
# 不应出现中文 label
```

---

## 5. 发布后手测

- [ ] 广告落地页 CTA **View Online Demo** 仍指向 `/live-demo/`
- [ ] `/live-demo/` 打开即见数据，无登录、无邮箱门槛
- [ ] 文案与点位为英文（Air temperature、Irrigation plan、Runtime）
- [ ] 有灌溉计划表（Program / Start / Zone runtime）
- [ ] 有 recent runtimes
- [ ] 空气温湿度、土壤温湿度、光照有数或显示 `—`（未接传感器）
- [ ] 页面底部仍可 **Book a Live Demo** / WhatsApp

---

## 6. 回滚

- 谷歌站：`pkydrip` 回退 `master` 到 `31af0aed` 再 Push。
- 云：回退 `main` 到 `bb909c7` 后在香港机 `git pull` + `docker compose up -d --build`。
- Netlify 反代旧栈（不推荐）：`/live-api/pub/*` → `http://47.238.197.93/live/api/pub/:splat`。

---

## 7. 相关文件

**谷歌站 `pkydrip`**

- `layouts/live-demo/list.html`
- `static/js/live-demo.js`
- `netlify.toml`（`/live-api/demo` → `8080/api/public/live-demo`）
- `content/english/live-demo/_index.md`
- `content/english/product/farm-irrigation-controller.md`

**云 `pkydrip-cloud-cn`**

- `backend/src/services/liveDemoService.js`
- `backend/src/server.js` — `GET /api/public/live-demo`
- `nginx/pky-cloud.conf` — `/live-demo` 不进登录 SPA
- `frontend/public/live-demo.html`
