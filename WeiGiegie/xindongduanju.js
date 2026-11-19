/* 心动短剧 — 全网热门短剧海量小视频app
 * 原作者：WeiGiegie
 * 适配版本：1.4.17
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = dj.vjread.com
 */
var _0x2d16e8=$response["body"];var _0x1cb3ba=$request["url"];const _0x274085="/m2/user/register";const _0x4ecd49="/m2/video/episodesV2?episodeId";if(typeof _0x2d16e8==="string"){if(_0x1cb3ba["indexOf"](_0x4ecd49)!==-0x1){_0x2d16e8=_0x2d16e8["replace"](/"lock":\d/g,"\"lock\":0");}var _0x3ccce0;try{_0x3ccce0=JSON["parse"](_0x2d16e8);if(_0x1cb3ba["indexOf"](_0x274085)!==-0x1){var _0x5150c7="3|1|2|0|4"["split"]("|"),_0x150f0b=0x0;while(!![]){switch(_0x5150c7[_0x150f0b++]){case"0":continue;case"1":delete _0x3ccce0["data"]["csjAdConfig"];continue;case"2":_0x3ccce0["data"]["ad_draw"]=0x0;continue;case"3":_0x3ccce0["data"]["user_id"]=0xa2c2a;continue;case"4":_0x2d16e8=JSON["stringify"](_0x3ccce0);continue;}break;}}}catch(_0xb1a74e){console["log"]("JSON 解析错误: "+_0xb1a74e["message"]);}}$done({"body":_0x2d16e8});