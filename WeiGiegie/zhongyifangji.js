/* 中医方剂 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：2.3
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = medicine-books.meappstore.top
 */
var _0x3917e0=$response["body"];var _0x177529=$request["url"];const _0x1e0101="/api/users/iosUserLogin";var _0x37ea35;try{_0x37ea35=JSON["parse"](_0x3917e0);if(_0x177529["indexOf"](_0x1e0101)!==-0x1){var _0xfcddbd="2|6|4|3|7|1|0|5"["split"]("|"),_0x3ef771=0x0;while(!![]){switch(_0xfcddbd[_0x3ef771++]){case"0":continue;case"1":_0x37ea35["vipStartDateTime"]=0x1;continue;case"2":_0x37ea35["data"]["vipState"]=0x1;continue;case"3":_0x37ea35["data"]["vipEndTime"]="2999-09-09";continue;case"4":_0x37ea35["data"]["vipEndDateTime"]=0x1d8d8f773708;continue;case"5":_0x3917e0=JSON["stringify"](_0x37ea35);continue;case"6":_0x37ea35["data"]["vipEndDateTime"]=0x1d8d8f773708;continue;case"7":_0x37ea35["vipStartTime"]=0x1;continue;}break;}}}catch(_0x2668fb){console["log"]("JSON 解析错误: "+_0x2668fb["message"]);}$done({"body":_0x3917e0});