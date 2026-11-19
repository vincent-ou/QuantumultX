/* 有道翻译官 无限体验同传翻译体验时间 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：4.3.15
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = dict-ai-subtitle.youdao.com,dict.youdao.com
 */
let _0x4e5179=typeof $response["body"]==="string"?$response["body"]:JSON["stringify"]($response["body"]);const _0x1a203b=$request["url"]||"";if(_0x1a203b["includes"]("/vip/user/extra/status")){try{const _0x4e40b7=JSON["parse"](_0x4e5179);_0x4e40b7["data"]["aipptVip"]=!![];_0x4e40b7["data"]["overseasDocTranVip"]=!![];_0x4e40b7["data"]["fanyiguanVip"]=!![];_0x4e5179=JSON["stringify"](_0x4e40b7);}catch(_0xc4c23e){}}if(_0x1a203b["includes"]("/user/info")){try{const _0xbfda8b=JSON["parse"](_0x4e5179);_0xbfda8b["data"]["svipTime"]=0x9184e729fff;_0xbfda8b["data"]["vip"]=!![];_0xbfda8b["data"]["svip"]=!![];_0xbfda8b["data"]["remainTime"]=0x1b7740;_0xbfda8b["data"]["fullRemainTime"]=0x1b7740;_0xbfda8b["data"]["usedTime"]=0x1770;_0xbfda8b["data"]["strongGuideTime"]=0xbb8;_0xbfda8b["data"]["vipStrongGuideTime"]=0x1770;_0x4e5179=JSON["stringify"](_0xbfda8b);}catch(_0x4d892b){}}$done({"body":_0x4e5179});