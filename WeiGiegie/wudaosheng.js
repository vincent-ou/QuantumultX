/* 舞蹈生 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.3
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = apidance.ctwh77.com
 */
if($request["url"]["includes"]("/api/user4app/myinfo")){let _0x484696=JSON["parse"]($response["body"]);Object["assign"](_0x484696["result"],{"VipType":0x5,"IsVip":0x1,"Money":0xf41c8,"ExpTime":"/Date(32493834549000)/"});$done({"body":JSON["stringify"](_0x484696)});}else if($request["url"]["includes"]("/api/newitem/detail")){let _0x322e68=JSON["parse"]($response["body"]);Object["assign"](_0x322e68["result"],{"Price":0x0});$done({"body":JSON["stringify"](_0x322e68)});}