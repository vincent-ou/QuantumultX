/* 绅士 — 摄影者的天堂
 * 原作者：WeiGiegie
 * 适配版本：3.2
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gentlemanapp
 */
if($request["url"]["includes"]("my_detail")){let _0x47b839=JSON["parse"]($response["body"]);Object["assign"](_0x47b839["my_detail"],{"is_jiahao":"1","is_vip":"1","vip_time":"永久LSP会员"});$done({"body":JSON["stringify"](_0x47b839)});}else if($request["url"]["includes"]("portrait/goods_detail")){let _0x310b51=JSON["parse"]($response["body"]);Object["assign"](_0x310b51["goods_detail"],{"is_read":"1","is_down":"1","is_all_down":"1"});$done({"body":JSON["stringify"](_0x310b51)});}else if($request["url"]["includes"]("publish/yuepai_detail")){let _0x257c22=JSON["parse"]($response["body"]);Object["assign"](_0x257c22["goods_detail"],{"is_yue":"1","is_read":"1","is_pinglun":"1"});$done({"body":JSON["stringify"](_0x257c22)});}