/* AISheJiShi — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = painting-api.aimusician.cc
 */

var ojbk = JSON.parse($response.body);



  ojbk.data.userVipInfo = {
      "level": 1,
      "title": "匠心大师",
      "expireTime": 8888888888000
    };

$done({body : JSON.stringify(ojbk)});
