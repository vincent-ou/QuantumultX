/* 新语听书 — VIP 解锁
 * 原作者：WeiGiegie
 * 适配版本：4.2.36
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.xinyulib.com,i.xinyulib.com.cn
 */
var _0x4164ad=$response["body"];var _0x324152=$request["url"];const _0x178f75="/api/querytoken?versionName";const _0x2d39af="/api/getBooDetail?";if(typeof _0x4164ad==="string"){if(_0x324152["indexOf"](_0x2d39af)!==-0x1){_0x4164ad=_0x4164ad["replace"](/"openChapterCount":\w/g,"\"openChapterCount\" :999999");}var _0x492953;try{_0x492953=JSON["parse"](_0x4164ad);if(_0x324152["indexOf"](_0x178f75)!==-0x1){var _0x4c8d25="4|2|0|3|1"["split"]("|"),_0x27137e=0x0;while(!![]){switch(_0x4c8d25[_0x27137e++]){case"0":_0x492953["data"]["vipstartTime"]="2024-09-09 09:09:09";continue;case"1":_0x4164ad=JSON["stringify"](_0x492953);continue;case"2":continue;case"3":_0x492953["data"]["vipendtime"]="2999-09-09 09:09:09";continue;case"4":continue;}break;}}}catch(_0x3e9c23){console["log"]("JSON 解析错误: "+_0x3e9c23["message"]);}}$done({"body":_0x4164ad});