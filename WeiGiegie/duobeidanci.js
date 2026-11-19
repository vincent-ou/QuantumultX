/* 多背单词 — 多背单词-英语学习-考研英语-英语单词-记单词必备软件
 * 原作者：WeiGiegie
 * 适配版本：3.5.8
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.duobeidanci.com
 */

var body = $response.body;
var obj = JSON.parse(body);

obj.is_vip = 1;
obj.new_is_vip = 1;
obj.vip_time = "2099-12-31";
obj.duobi = 99999;
obj.flag = 100;


if (obj.info && typeof obj.info === 'object') {
  obj.info.is_vip = "1";
  obj.info.duobi = 9999;
}

$done({body: JSON.stringify(obj)});
