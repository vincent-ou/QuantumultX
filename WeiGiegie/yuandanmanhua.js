/* 原耽漫画 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.6.2
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *
 */
if($request["url"]["includes"]("/web/member/memberInfo/getEntity")){let _0x162a70=JSON["parse"]($response["body"]);Object["assign"](_0x162a70["data"],{"integralSum":0xf41c8,"vipBegin":!![],"isVip":0xf,"vipDays":0x1e});$done({"body":JSON["stringify"](_0x162a70)});}else if($request["url"]["includes"]("/web/cartoon/cartoonChapter/needVip")){let _0x544854=JSON["parse"]($response["body"]);Object["assign"](_0x544854["data"],{"isVip":0x0});$done({"body":JSON["stringify"](_0x544854)});}