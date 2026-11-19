/* 疯狂背单词 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.32
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.fengkuangapp.com
 */

var body = JSON.parse($response.body);

body.data.vip_info = {
      "auto_buy": 1,
      "status": 1,
      "finish_date": "9999-10-18 16:56:11",
      "finish_date_ios": "2023.10.18",
      "pre_date": "2023-10-15 16:56:12",
      "buy_status": 1,
      "vip_type": 2,
      "last_buy_date": "2023-10-15 16:56:12",
      "pre_status": 0,
      "days": 999999
    }
$done({ body: JSON.stringify(body) });
