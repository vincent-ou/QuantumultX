/* 薯条漫画 — 热门耽美bl漫画
 * 原作者：WeiGiegie
 * 适配版本：1.3.2
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.shutiaoapp.com
 */
if ($request.url.includes("/api//getSysUserInfo")) {
  let body = JSON.parse($response.body);
  Object.assign(body.data, {
    expireDays: "2999-09-09",
    vipDays: 3600,
    coins: 9999
  });
  $done({
    body: JSON.stringify(body)
  });
}