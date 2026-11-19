/* 小星星Ai陪练 — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xiaoxingxing.xinghuanufang.cn
 */

var body = $response.body.replace(/vipType":\d+/g,'vipType":4')
.replace(/vipDateTo":".?"/g,'vipDateTo":"9999-10-31"')
.replace(/vipStatus":\d/g,'vipStatus":0')
.replace(/vipDate":".*?"/g,'vipDate":"8888-08-08"')
.replace(/isVip":\w+/g,'isVip":true')
.replace(/vipStatus":false/g,'vipStatus":true')
.replace(/vipDateFrom":null/g,'vipDateFrom":"2022-10-28 22:36:54"')
.replace(/hasPayLifeCard":null/g,'hasPayLifeCard":false')
.replace(/nickname":null/g,'nickname":"苹果福利社"')
.replace(/leftVipDesc":".*?"/g,'leftVipDesc":"9999年10月31日到期"')
.replace(/vipType":-1/g,'vipType":4')
.replace(/isRenew":\w+/g,'isRenew":true')
.replace(/popWindow":\d/g,'popWindow":1')
.replace(/iconUrl":null/g,'iconUrl":"https://xiaoxingxingai.oss-cn-hangzhou.aliyuncs.com/2021/5/25/dc119d4dbd5a4b0a88811f8b0b1b6772.png"')
.replace(/rightVipDesc":".*?"/g,'rightVipDesc":"已永久"')
.replace(/isMember":\w+/g,'isMember":false')
.replace(/"shortName":".*?"/g,'"shortName":"苹果福利社"')
.replace(/"vipStatus":\d/g,'"vipStatus":1')
.replace(/"vipEnd":null/g,'"vipEnd":"8888-08-08"')
.replace(/"isNonMember":\w+/g,'"isNonMember":false')
.replace(/"nickname":".*?"/g,'"nickname":"苹果福利社"')
.replace(/"leftVipDescNew":".*?"/g,'"leftVipDescNew":"永久使用"')
.replace(/"leftVipDetailUrl":".*?"/g,'"leftVipDetailUrl":"8888-08-08"')
.replace(/"leftVipDetail":".*?"/g,'"leftVipDetail":"8888-08-08"')
.replace(/"vipType":null/g,'"vipType":4')
.replace(/"vipDesc":".*?"/g,'"vipDesc":"永久使用"')
$done({ body });
