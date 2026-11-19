/* 电音阁dj — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.0.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.dianyinge.com
 */

var objc = JSON.parse($response.body);

    objc = 
{
  "result" : {
    "share_num" : 0,
    "login_imei" : null,
    "birthday" : "",
    "invite_code" : 40910,
    "like_path" : "",
    "all_dance_dividend_money" : "999999",
    "sex" : 1,
    "vip_level" : "vip5",
    "share_coin" : "99999",
    "intro" : null,
    "vip_status" : 1,
    "path" : "http://dyg.dianyinge.com/dianyinge/uploads/upload_face/user_path.png",
    "day_dividend_money" : 0,
    "sign_num" : 0,
    "fans_num" : 0,
    "vip_end" : "2999-11-11 00:00:00",
    "invite_num" : 0,
    "uid" : 40910,
    "coin" : "0.00",
    "phone" : "1888888888",
    "dance_dividend_money" : "99999",
    "follow_num" : 0,
    "message_num" : 1,
    "sign_status" : 2,
    "down_path" : "",
    "play_path" : "",
    "sign_coin" : 999,
    "cash_money" : "99999",
    "order_num" : 0
  },
  "msg" : "ok",
  "code" : "200"
}


$done({body : JSON.stringify(objc)});
