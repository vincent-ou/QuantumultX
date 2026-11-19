/* 问真排版八字 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.2.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.iwzbz.com
 */

const targetAPI = /https:\/\/.+\.iwzbz\.com\/api\/v1\.1\/user\/getvipinfo/;

if ($request && targetAPI.test($request.url)) {
  let body = JSON.parse($response.body);
  if (body.data) {
    body.isSuccess = true;
    body.code = 1;
    body.data.vipLevel = 3;
    body.data.expires = "9999-09-09";
  }
  
  $done({ body: JSON.stringify(body) });
} else {
  $done({});
}
