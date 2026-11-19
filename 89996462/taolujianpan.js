/* 套路键盘 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.2.5
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.taolujianpan.com
 */

var body = JSON.parse($response.body);

body.data.vipInfo = {
      "deadLine": "9999-08-30",
      "imgLogo": "http://taolu.zuogetu.com/tlimg/ban_leitai_20190722.png",
      "name": "VIP尊贵会员",
      "remainDays": "99999",
      "status": "1",
      "type": "vip",
      "vipUrl": "https://support.qq.com/product/67639"
    };

$done({ body: JSON.stringify(body) });
