# PKYDrip Internal Linking Rules

版本：1.1  
更新：2026-07-03

本文档定义 PKYDrip 官网 **SEO 内链（Internal Linking）** 强制执行规则。

- 公开页面语言：**英文**
- 本文档语言：**中文**（内部执行）
- 适用范围：`content/english/` 下 System、Solution、Product、Case Study、Resource、Landing 页面

**Case Study 定义：** 当前对应 `Applications` 栏目下的项目/案例页（`/applications/.../`）。V2 合并进 Solutions 后，规则不变，仅 URL 前缀可能调整。

---

## GLOBAL RULE

**No page should be isolated — orphan pages are forbidden.**

每条规则含义：

| 术语 | 定义 |
| ---- | ---- |
| **Orphan page** | 全站无任何其他已发布页面链入（`Landing` 广告入口页除外） |
| **MUST** | 发布前硬性要求；缺一则视为页面未完成 |
| **CTA** | WhatsApp 或 RFQ / Contact 转化入口 |

---

## SYSTEM PAGE RULES

Each **SYSTEM** page **MUST**:

| # | 要求 | 说明 |
| - | ---- | ---- |
| 1 | Link to **≥ 2 Solution** pages | 不同应用场景，非重复主题 |
| 2 | Link to **≥ 2 Product** pages | 系统内真实模块，非全站产品目录 |
| 3 | Link to **≥ 1 Case Study** | `/applications/.../` |
| 4 | Include links to **related SYSTEM** pages | 如 Fertigation ↔ Irrigation Control |
| 5 | Contain **5–8 SEO keywords** naturally | 融入标题、摘要、正文、锚文本；禁止堆砌 |
| 6 | Include **WhatsApp / RFQ CTA** | 页内显式转化入口 |

**关键词示例（按系统主题选用）：** irrigation control, fertigation, LoRa wireless, valve automation, pump control, EC/pH, greenhouse, drip irrigation, solar pump irrigation

**Canonical System URLs：**

- `/system-architecture/irrigation-control-system/`
- `/system-architecture/fertigation-system/`
- `/system-architecture/wireless-irrigation-system/`
- `/system-architecture/solar-pump-irrigation/`

---

## SOLUTION PAGE RULES

Each **SOLUTION** page **MUST**:

| # | 要求 | 说明 |
| - | ---- | ---- |
| 1 | Link back to its **parent SYSTEM** | 明确所属系统架构页 |
| 2 | Link to **≥ 1 Case Study** | 同场景项目案例 |
| 3 | Link to **1–3 Products** | 按场景推荐，非产品墙 |
| 4 | Include **WhatsApp / RFQ CTA** | 必填 |

**禁止：** 大段复制 System 页架构内容；用 1–2 句 + 内链代替。

---

## CASE STUDY RULES

Each **CASE STUDY** page **MUST**:

| # | 要求 | 说明 |
| - | ---- | ---- |
| 1 | Link to **SYSTEM** | 案例使用的系统架构 |
| 2 | Link to **SOLUTION** | 案例所属应用场景 |
| 3 | **Mention Products used** | 正文写明型号/模块，并链到 Product 页 |
| 4 | Include **CTA at bottom** | WhatsApp / RFQ |

**现有 Case Study 示例：**

- `/applications/orchard-irrigation/`
- `/applications/tomato-drip-irrigation/`
- `/applications/open-field-wireless-valve-control/`
- `/applications/greenhouse-lora-irrigation-expansion/`

---

## PRODUCT PAGE RULES

Each **PRODUCT** page **MUST**:

| # | 要求 | 说明 |
| - | ---- | ---- |
| 1 | **Show which SYSTEM it belongs to** | 正文或 hero 区说明系统角色 |
| 2 | Link to **≥ 1 SYSTEM** page | 所属主系统 |
| 3 | Link to **≥ 1 SOLUTION** page | 典型应用场景 |
| 4 | Include **RFQ contact CTA** | WhatsApp 或 Contact |

**可选：** 相关配套 Product（≤ 1）、Downloads / Datasheet（≤ 1）

---

## RESOURCE PAGE RULES（Docs / Tools / Downloads）

Resource 页不替代上述四类，但 **MUST**:

| # | 要求 |
| - | ---- |
| 1 | Link to **≥ 1 SYSTEM** |
| 2 | Link to **≥ 1 SOLUTION** 或 **Product** |
| 3 | Link to **≥ 1** 相关 Resource |
| 4 | Include **CTA** 或 Tools 下一步 |

---

## LANDING PAGE RULES

Each **LANDING** page **MUST**:

| # | 要求 |
| - | ---- |
| 1 | Link to **1 primary SYSTEM** |
| 2 | Link to **1 primary SOLUTION** 或 **Product** |
| 3 | Include **WhatsApp / RFQ CTA** |

Landing 可不追求自然入链；靠广告与外部分发。

---

## 链接层级（V2）

```text
Customer Problem → Solution → System → Product → Case Study → Inquiry
```

| 层级 | 栏目 | 角色 |
| ---- | ---- | ---- |
| L1 | Systems | 架构中枢 |
| L2 | Solutions | 场景入口 |
| L3 | Products | 系统模块 |
| — | Case Studies (`/applications/`) | 项目证明 |
| L4 | Resources | 教育支撑 |

**禁止把 Product 当作站内导航中心。**

---

## 锚文本（Anchor Text）

### 推荐

```markdown
✅ [fertigation system architecture](/system-architecture/fertigation-system/)
✅ [orchard irrigation application](/applications/orchard-irrigation/)
✅ [hydroponic and soilless cultivation control](/solution/hydroponic-irrigation/)
```

### 禁止

```markdown
❌ click here / read more / learn more
❌ 锚文本与目标页主题不符
❌ 同一段落对同一 URL 重复链接
```

---

## URL 规范

| 规则 | 说明 |
| ---- | ---- |
| 根相对路径 | `/solution/greenhouse-irrigation/` |
| 尾部斜杠 | 与 Hugo canonical 一致 |
| 不链 legacy 重复页 | 优先 V2 canonical（见 System URLs 表） |
| 不链 noindex 页 | `/site-map/`、`/internal/...` |
| WhatsApp | 完整 `wa.me` URL，带项目上下文 prefill |

---

## Related Links 区块

工程页（`engineering-page` layout）使用 `related_links`：

```yaml
related_links:
  title: "Related"
  links:
    - label: "Fertigation system architecture"
      url: "/system-architecture/fertigation-system/"
    - label: "Hydroponic irrigation solution"
      url: "/solution/hydroponic-irrigation/"
    - label: "Orchard irrigation case study"
      url: "/applications/orchard-irrigation/"
```

Markdown 页文末：

```markdown
## Related

- [System title](/system-architecture/.../)
- [Solution title](/solution/.../)
- [Case study title](/applications/.../)
```

---

## 发布前检查清单

### System

- [ ] ≥ 2 Solution 链接
- [ ] ≥ 2 Product 链接
- [ ] ≥ 1 Case Study 链接
- [ ] ≥ 1 相关 System 链接
- [ ] 5–8 个 SEO 关键词自然出现
- [ ] CTA 可用
- [ ] ≥ 1 站内入链（非孤儿）

### Solution

- [ ] 链回 parent System
- [ ] ≥ 1 Case Study
- [ ] 1–3 Products
- [ ] WhatsApp / RFQ CTA
- [ ] ≥ 1 站内入链

### Case Study

- [ ] 链向 System + Solution
- [ ] 提及并链接所用 Products
- [ ] 底部 CTA
- [ ] ≥ 1 站内入链

### Product

- [ ] 标明所属 System
- [ ] ≥ 1 System + ≥ 1 Solution 链接
- [ ] RFQ CTA
- [ ] ≥ 1 站内入链

---

## 禁止做法

1. 孤儿页（GLOBAL RULE）
2. 零出链公开页（Thank-you 页除外）
3. System ↔ Solution 大段重复内容
4. Product 链接墙
5. 链到构建产物（`public/`）或本地路径
6. `draft: true` 页面被已发布页链接

---

## Legacy → Canonical 速查

| 主题 | Canonical URL |
| ---- | ------------- |
| 灌溉控制 | `/system-architecture/irrigation-control-system/` |
| 水肥 | `/system-architecture/fertigation-system/` |
| 无线 | `/system-architecture/wireless-irrigation-system/` |
| 太阳能水泵 | `/system-architecture/solar-pump-irrigation/` |
| 温室 | `/solution/greenhouse-irrigation/` |
| 果园 | `/solution/orchard-irrigation/` |
| 大田 | `/solution/open-field-irrigation/` |
| 无土栽培 | `/solution/hydroponic-irrigation/` |

---

## 快速参考

```text
GLOBAL:  No orphan pages

SYSTEM:    ≥2 Solution + ≥2 Product + ≥1 Case Study + related Systems + 5–8 keywords + CTA
SOLUTION:  parent System + ≥1 Case Study + 1–3 Products + CTA
CASE:      System + Solution + Products mentioned + bottom CTA
PRODUCT:   show System + ≥1 System + ≥1 Solution + RFQ CTA
```

---

## 相关文档

| 文档 | 用途 |
| ---- | ---- |
| `docs/internal/website-framework-v2.md` | V2 页面模板 |
| `docs/internal/engineering-agent-rules.md` | Agent 强制规则 |
| `content/english/docs/pkydrip-page-system.md` | 公开页面结构 |
| `docs/internal/content-consolidation-plan.md` | Legacy URL 映射 |
| `docs/internal/internal-link-analysis.md` | 链接审计数据 |
