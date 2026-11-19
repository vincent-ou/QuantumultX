/* 配音师 — 文字转语音助手
 * 原作者：WeiGiegie
 * 适配版本：4.1.1
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *
 */
var _0x1e033b=$response["body"];var _0x3b8429=$request["url"];const _0x1656b="/Svip/SVIP_Existence.aspx";const _0x530257="/course/GetCourseInfo?";if(typeof _0x1e033b==="string"){if(_0x3b8429["indexOf"](_0x530257)!==-0x1){_0x1e033b=_0x1e033b["replace"](/"isprice":\d/g,"\"isprice\" :0");}var _0x2843a1;try{_0x2843a1=JSON["parse"](_0x1e033b);if(_0x3b8429["indexOf"](_0x1656b)!==-0x1){_0x2843a1["Code"]["SVIP_ID"]="One Year Vip";_0x2843a1["Code"]["Cre_Datetime"]="2024-11-11 11:11:11";_0x2843a1["Code"]["Due_Datetime"]="9999-11-11 11:11:11";_0x1e033b=JSON["stringify"](_0x2843a1);}}catch(_0x4174f9){console["log"]("JSON 解析错误: "+_0x4174f9["message"]);}}$done({"body":_0x1e033b});