/* 和讯财经 — 和讯财经 Plus 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = wapi.hexun.com,nwapi.hexun.com
 */
$done({
  body: $response.body
    .replace(/\"isLimitFree\":\w+/g, '"isLimitFree":true')
    .replace(/\"hasRight\":\w+/g, '"hasRight":true')
    .replace(/false/g, "true"),
});
