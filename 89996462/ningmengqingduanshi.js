/* 柠檬轻断食 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.7.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = fast.lmfasting.cn
 */

var objc = JSON.parse($response.body);

    objc = {
  "code" : 200,
  "data" : {
    "sport_id" : 8,
    "weight" : 60,
    "birthday" : "1998",
    "frame" : "http://d.lmfasting.cn/fast/images/3a056afc68997127ad1973178589186c.png",
    "openid" : "8888888888",
    "create_time" : "2023-07-27 15:47:17",
    "target_weight" : 53.899999999999999,
    "speed" : 0.80000000000000004,
    "vip_expire" : "2099-12-31 18:10:32",
    "cause" : "成功",
    "flag" : "permanent",
    "begin_weight" : 60,
    "day" : 53,
    "id" : 89996462,
    "gender" : "女生",
    "wechat_name" : "·龙跃·",
    "head" : "http://d.lmfasting.cn/fast/images/3a0579c089154fcd870913043f38035c.png",
    "height" : 160,
    "gold" : 0,
    "recommend_plan_id" : 15,
    "is_attempt" : "我是新手"
  },
  "msg" : "ok",
  "t" : "2024-04-03 12:21:23"
}

$done({body : JSON.stringify(objc)});
