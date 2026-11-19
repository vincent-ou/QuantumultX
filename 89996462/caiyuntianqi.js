/* 彩云天气 — 解锁订阅
 * 原作者：89996462
 * 适配版本：7.16.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = biz.cyapi.cn
 */

var ojbk = $response.body;
var obj =  JSON.parse(ojbk);

if($request.url.indexOf("/v2/user") != -1) {
  obj.result.is_vip = true;
  obj.result.vip_type = "s";
  obj.result.svip_expired_at = 4070951226;
}

ojbk = JSON.stringify(obj);
$done(ojbk);
