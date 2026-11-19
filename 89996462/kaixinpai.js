/* KaiXinPai — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.6.3
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = face.app.superclear.cn
 */

var body=$response["body"];var obj=JSON["parse"](body);obj={'message':"校验成功",'data':{'isVip':'1','userId':"76e10101-9611-11dd-9d42-33ed0449b63b",'expiresDateMs':"1863333334000"},'code':0xc8};body=JSON["stringify"](obj);$done({'body':body});
