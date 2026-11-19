/* 快递100收件端 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.kuaidi100.com */

var obj = JSON.parse($response.body);

if(/advertisement/.test($request.url)){
  obj.data = {};
}

if (/getLoginInfo/i.test($request.url)) {
  obj.data = {
   ...obj.data,
    "vipTag": "VIP",
    "vipDeadline": 4092599349000
  };
  obj.vipTag = "VIP";
  obj.vipDeadline = 4092599349000;
}

if (/getMyVip/.test($request.url)) {
  obj.data = {
   ...obj.data,
    "vipTag": "VIP",
    "expired": 0,
    "vipTimeDetail": {
      "VIP": 4092599349000,
      "PAID_WEB": 4092599349000,
      "PAID_APP": 4092599349000
    },
    "vipDeadline": 4092599349000
  };
  if (obj.data.serviceList && Array.isArray(obj.data.serviceList)) {
    obj.data.serviceList.forEach((item) => {
      if ('endTime' in item) {
        item.endTime = 4092599349000;
      }
    });
  }
}

if(/getAllPaidService/.test($request.url)){
  obj.data = {
    "CAINIAOBLUETOOTHPRINTING" : 4092599349000,
    "BATCHADDNEW" : 4092599349000,
    "EXPEXPORT" : 4092599349000,
    "EXCELSPEEDIMPORT" : 4092599349000,
    "HISEXPEXPORT" : 4092599349000,
    "APPEXPORT3MONTH" : 4092599349000,
    "APPLIST3MONTH" : 4092599349000,
    "MULTIELEC" : 4092599349000,
    "DEPUTY" : 4092599349000,
    "MULTISTORE" : 4092599349000,
    "EXCEPTIONNOTICE" : 4092599349000,
    "WORKERLIMIT" : 4092599349000,
    "EXCELSOURCEDOWNLOAD" : 4092599349000
  };
}

$done({body : JSON.stringify(obj)});
