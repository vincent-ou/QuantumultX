/* 极简扫描 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = cn.czur.cc */

var resp = JSON.parse($response.body);

resp = {
  "msg" : "Success",
  "body" : {
    "vipStartOn" : null,
    "remainingVip" : 766496,
    "vipEndOn" : "2099-09-09 09:09:09",
    "invitationCount" : 0,
    "svipEndOn" : "2099-09-09 09:09:09",
    "svipStartOn" : null,
    "svip" : true,
    "renewStatus" : false,
    "email" : null,
    "billDate" : null,
    "isInvitate" : false,
    "funcDefId" : 9999,
    "invitationCode" : "PYUJ",
    "remainingCloudocrVip" : 9999,
    "isVip" : true,
    "appleExpireDate" : null,
    "usagesLimit" : 1073741824000000,
    "photoOssKey" : null,
    "payExpireDate" : 4092599349000,
    "userType" : "svip",
    "usages" : 958486,
    "remainingOcr" : -1,
    "totalOcr" : -1,
    "totalPdf" : -1,
    "totalHighCertificate" : 9999,
    "totalHandwriting" : 9999,
    "totalCloudocr" : 9999,
    "totalCertificate" : -1,
    "remainingHandwriting" : 9999,
    "remainingCloudocrNormal" : 9999,
    "remainingHighCertificate" : 9999,
    "remainingHandwritingNormal" : 9999,
    "remainingCertificate" : -1,
    "remainingPdf" : -1
  },
  "code" : 1000
};

$done({body : JSON.stringify(resp)});
