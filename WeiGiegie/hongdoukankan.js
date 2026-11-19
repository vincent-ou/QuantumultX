/* 红豆看看 — 红豆看看-热门抢先看海量资源
 * 原作者：WeiGiegie
 * 适配版本：1.5
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.jingyuanw.top
 */

let obj = JSON.parse($response.body);

if (obj.data) {
  obj.data.vipEndDate = "4102444799000"; 
  obj.data.vip = true;
  
}

$done({body: JSON.stringify(obj)});
