/* 视氪地图 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = 39 */

const ddm = JSON.parse($response.body);
const url = $request.url;

const commonData = {
  "service_life": "2099-09-09 09:09:09",
  "is_vip": 1,
  "timestamp": 4092599349
};

if (/liteKrnaviDownloadUserData/.test(url)) {
  Object.assign(ddm.data, commonData, {
    "is_member": true,
    "member_type": 1
  });
} else if (/liteKrnaviCheckToken/.test(url)) {
  Object.assign(ddm.data, commonData);
}

$done({ body: JSON.stringify(ddm) });
