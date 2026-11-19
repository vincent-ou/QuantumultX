/* 为你读诗pro — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.5.6
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.thepoemforyou.com
 */
var _0x56f1f9=$response["body"];var _0x246f07=$request["url"];const _0x5ef41b="/api/v1/getProgramList";const _0x105b53="/api/v1/getUserInfo";if(typeof _0x56f1f9==="string"){if(_0x246f07["indexOf"](_0x5ef41b)!==-0x1){_0x56f1f9=_0x56f1f9["replace"](/free_type":\d/g,"free_type\":1");}var _0x295325;try{_0x295325=JSON["parse"](_0x56f1f9);if(_0x246f07["indexOf"](_0x105b53)!==-0x1){var _0x2c2042="1|4|5|2|6|3|0"["split"]("|"),_0x3bc384=0x0;while(!![]){switch(_0x2c2042[_0x3bc384++]){case"0":_0x56f1f9=JSON["stringify"](_0x295325);continue;case"1":_0x295325["data"]["vip"]=0x1;continue;case"2":_0x295325["data"]["vip_enddata"]="2999-09-09";continue;case"3":_0x295325["data"]["is_vip"]=0x1;continue;case"4":_0x295325["data"]["vipOld"]=0x1;continue;case"5":_0x295325["data"]["vip_endtimd"]=0x790c89135;continue;case"6":continue;}break;}}}catch(_0x40d0d3){console["log"]("JSON 解析错误: "+_0x40d0d3["message"]);}}$done({"body":_0x56f1f9});