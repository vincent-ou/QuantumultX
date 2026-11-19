/* 稿好作文 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.4.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.gaohaozuowen.com
 */

var ojbk = JSON.parse($response.body);

ojbk.data.is_vip = 1;
ojbk.data.cur_page_num = 999;
ojbk.data.other_remain_day = 999;
ojbk.data.remain_day = 999;
ojbk.data.other_is_vip = 1;

$done({body : JSON.stringify(ojbk)});
