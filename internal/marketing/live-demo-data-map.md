# Online Demo — Live Data Map (investigation)

**Date:** 2026-09-21  
**Branch:** `feat/online-demo-v1-data-presentation`  
**Production probe:** https://smart.pky-dripirrigation.com/live-demo/  
**Pub proxy:** Netlify `/live-api/pub/*` → `http://47.238.197.93/live/api/pub/:splat`  
**Hugo repo note:** Backend implementation for `pky-live` is **not** in this repository.

---

## Public API allowlist (authoritative)

`GET /live-api/pub/` returns:

```json
{
  "ok": false,
  "error": "对外公开区只提供只读数据接口",
  "allowed": ["/api/pub/preview", "/api/pub/snapshot", "/api/pub/health"]
}
```

Any other `/live-api/pub/*` path (including `history`, `edge`, `pkydrip-edge`, `timeseries`, `devices`, `sensors`, …) returns **403** with the same `allowed` list.

`GET /live-api/pub/health` → `{ ok, service: "pky-live", mode: "public-readonly", uptimeSec, live, updatedAt }`

---

## Data item map

| Data Item | Backend source / device | API endpoint | Real-time or historical | Unit | Last-update field | UI section (today) | Status |
|-----------|-------------------------|--------------|-------------------------|------|-------------------|--------------------|--------|
| Irrigation Controller (aggregate) | Desensitised controller cards (no device ID / name in payload) | `/live-api/pub/snapshot` → `cards[]` | Real-time | — | `cards[].ageSec` + top-level `updatedAt` | Full view controller cards (after form unlock) | **AVAILABLE** (anonymous “Controller N”) |
| Irrigation Controller online/offline | `cards[].online` | `/live-api/pub/snapshot` | Real-time | bool | `ageSec` | Full view | **AVAILABLE** |
| Device status / mode | `cards[].workStatus`, `cards[].mode` | `/live-api/pub/snapshot` | Real-time | enum string | `ageSec` | Full view | **AVAILABLE** |
| Active zone | `cards[].runtime.activeZone`, `zoneCount` | `/live-api/pub/snapshot` | Real-time | index | `ageSec` | Full view (partially unused in UI) | **AVAILABLE in API** |
| Valve status | `cards[].runtime.valves[]` (0/1 per zone) | `/live-api/pub/snapshot` | Real-time | 0/1 | `ageSec` | Full view valve grid | **AVAILABLE** |
| Pump status | `cards[].runtime.pump1`, `pump2` | `/live-api/pub/snapshot` | Real-time | numeric | `ageSec` | **NOT SHOWN** in UI today (fields exist) | **AVAILABLE in API** |
| Flow (controller) | `cards[].runtime.flow` | `/live-api/pub/snapshot` | Real-time | inferred m³/h in UI | `ageSec` | Full view | **AVAILABLE** |
| Pressure (controller) | `cards[].runtime.pressure` | `/live-api/pub/snapshot` | Real-time | inferred bar in UI | `ageSec` | Full view | **AVAILABLE** |
| Flow / pressure trend (short) | Aggregated series | `/live-api/pub/preview` → `trend[]` `{t,flow,pressure,valves}` | Recent samples (not env history) | flow / pressure | `t` (string timestamps) | Preview sparkline | **AVAILABLE** (irrigation trend only) |
| Stations / valves summary | `summary.*` | `/live-api/pub/preview` | Real-time aggregate | counts | `updatedAt` | Overview tiles | **AVAILABLE** (UI bug: tiles may read wrong nesting) |
| **pkydrip-edge** | — | — | — | — | — | — | **NOT AVAILABLE** in public API or this Hugo repo |
| Air Temperature | Sensor key `air_th` → `air_temperature` | preview `sensors[]` / snapshot `sensors[].latest.values` | Real-time latest | degC / °C scale | `latest.ts` (snapshot) | Sensor cards | **AVAILABLE** (labels currently Chinese in preview) |
| Air Humidity | `air_th` → `air_humidity` | same | Real-time latest | %RH | `latest.ts` | Sensor cards | **AVAILABLE** |
| Light | `light` → `light_lux` | same | Real-time latest | lux | `latest.ts` | Sensor cards | **AVAILABLE** |
| Soil Temperature | `soil_th` → `soil_temperature` | same | Real-time latest | degC | `latest.ts` | Sensor cards | **AVAILABLE** |
| Soil Moisture | `soil_th` → `soil_humidity` | same | Real-time latest | %RH | `latest.ts` | Sensor cards | **AVAILABLE** |
| Weather / CO₂ | `weather`, `co2` | same | Real-time latest (weather `latest.ts` can be stale) | mixed | `latest.ts` | Sensor cards | **AVAILABLE** |
| Air Temperature **history** series | Timeseries implied by `sampleCount` (e.g. 720) but **no series payload** | No public history endpoint | Historical | degC | — | Environmental History charts | **NOT AVAILABLE** via pub API |
| Air Humidity **history** series | same | No public history endpoint | Historical | %RH | — | Environmental History charts | **NOT AVAILABLE** via pub API |
| Light **history** series | same | No public history endpoint | Historical | lux | — | Environmental History charts | **NOT AVAILABLE** via pub API |
| Control | `control.enabled` | `/live-api/pub/snapshot` | config flag | bool | — | Must remain false / no buttons | **AVAILABLE** (`enabled: false`) |

---

## What was found (summary)

### Irrigation controllers

- Present in `/live-api/pub/snapshot` as `cards[]` (currently 4 online cards when probed).
- Each card includes: `online`, `ageSec`, `mode`, `workStatus`, `runtime.{pump1,pump2,valves[],flow,pressure,ec,ph,activeZone,zoneCount}`.
- **No** `name`, `id`, `serial`, or `pkydrip-edge` field on cards.
- Preview `summary.stationsOnline` matches online controller count conceptually.

### Environmental / sensor latest values

- Present in both preview (`sensors[].readings`) and snapshot (`sensors[].latest.values`).
- Keys: `weather`, `air_th`, `soil_th`, `light`, `co2`.
- Preview user-facing `name` / `label` strings are **Chinese** today (need English mapping in UI only; keep keys).

### Historical environment charts

- Snapshot sensors expose `sampleCount` (often 720 for air/soil/light/co2), implying a timeseries store exists **behind** the service.
- Preview `gated.locked` explicitly lists “历史趋势完整曲线与告警记录” as locked from the public surface.
- **No** public series arrays for air temperature / humidity / light are returned.
- Probed paths `/live-api/pub/history*` → **403** (not in allowlist).

### pkydrip-edge

- String `pkydrip-edge` does **not** appear in preview, snapshot, or health payloads.
- Not present in this Hugo repository.
- Not found by keyword search in nearby GitHub folders (`pkydrip`, `pkydrip-cn`, `pkydrip-grow`, `pkydrip-environment-hmi`).
- Dedicated paths `/live-api/pub/edge` and `/live-api/pub/pkydrip-edge` → **403**.

---

## Backend changes required before UI can complete this task

1. **Whitelist + implement** a read-only historical endpoint, e.g.  
   `GET /api/pub/history?keys=air_temperature,air_humidity,light_lux&range=24h`  
   returning real `{ t, v }[]` (or equivalent) with units — **no** fabricated points.
2. **Expose pkydrip-edge** (if it is a real source on the demo host) in a desensitised pub payload, e.g. extend `snapshot.sensors` / `devices` with `{ id: "pkydrip-edge", online, latest, … }` **or** add `/api/pub/sources` and add it to `allowed`.
3. Optionally attach stable public labels / roles on controller cards (`role: "irrigation-controller"`) without leaking private serials.
4. Keep control endpoints off the public allowlist; retain `control.enabled: false`.

Until (1) and (2) exist, this site **must not** invent history or invent an Edge device in the Hugo frontend.

---

## Investigation decision

**STOP — do not implement Environmental History charts or PKYDrip Edge UI yet.**  
Safe incremental work that *could* proceed later without backend changes: English label map for existing sensor keys + clearer Connected Devices section from `snapshot.cards` / pump fields already present.
