/* 识日 — 背日语-查日语单词-大家的日语
 * 原作者：WeiGiegie
 * 适配版本：2.1.5
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = shiri.jingqueyun.com
 */
var body = $response.body;
var obj = JSON.parse(body);
obj.is_vip = 1;
obj.isVip = 1;
obj.new_is_vip = 1;
obj.vip_time = "2099-12-31";
obj.duobi = 99999;
obj.flag = 100;
if (obj.info && typeof obj.info === "object") {
  obj.info.is_vip = "1";
  obj.info.duobi = 9999;
}
$done({
  body: JSON.stringify(obj)
});