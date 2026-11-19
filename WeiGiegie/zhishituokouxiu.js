/* 知识脱口秀 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.5.2
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = talkshow.wfkids.net
 */
var _0x3d5dd2=$response["body"];var _0x4c12df=$request["url"];const _0x296917="/wfcm-api/vip/queryVipInfo";const _0x304829="/wfcm-api/";const _0x3bdd45="/wfcm-api/talkshow/chapter/info";if(typeof _0x3d5dd2==="string"){if(_0x4c12df["indexOf"](_0x304829)!==-0x1){_0x3d5dd2=_0x3d5dd2["replace"](/belongFlag":\d/g,"belongFlag\":1")["replace"](/"access":-\d/g,"\"access\":1");}var _0xc010b2;try{_0xc010b2=JSON["parse"](_0x3d5dd2);if(_0x4c12df["indexOf"](_0x296917)!==-0x1){var _0xad3619="1|3|4|0|2"["split"]("|"),_0x35bfed=0x0;while(!![]){switch(_0xad3619[_0x35bfed++]){case"0":continue;case"1":_0xc010b2["memberEntity"]["vipType"]=0x1,_0xc010b2["memberEntity"]["vipEndTime"]="2999-09-09 23:59:59";continue;case"2":_0x3d5dd2=JSON["stringify"](_0xc010b2);continue;case"3":_0xc010b2["vipStatusRemark"]="2999-09-09 23:59:59";continue;case"4":continue;}break;}}if(_0x4c12df["indexOf"](_0x3bdd45)!==-0x1){_0xc010b2["data"]["access"]=0x1,_0x3d5dd2=JSON["stringify"](_0xc010b2);}}catch(_0xe681a7){console["log"]("JSON 解析错误: "+_0xe681a7["message"]);}}$done({"body":_0x3d5dd2});