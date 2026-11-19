/* PhotoSlip — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www2.tigeroom.com */


var resp = JSON.parse($response.body);

resp = {
  "message" : "",
  "data" : {
    "phone" : null,
    "viptime" : "2099-09-09",
    "stafftype" : "02",
    "isperfect" : 0,
    "username" : null,
    "staffid" : "1601256577462566913",
    "photo" : "https://fff-kangxizidian.oss-cn-hangzhou.aliyuncs.com/image/photo/default/default-photo.png",
    "email" : null,
    "isvip" : 1,
    "appleid" : null
  },
  "code" : 200
};


$done({body : JSON.stringify(resp)});
