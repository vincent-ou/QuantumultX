/* WPS — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.wps.cn */

var obj = JSON.parse($response.body);
const vip1 = '/list_purchase_info';
const vip2 = '/overview';
const flkj = '/spaces';

if ($request.url.indexOf(vip1) != -1){
obj.data["merchandises"] = [
      {
        "sku_key" : "12",
        "expire_time" : 4092599349,
        "effect_time" : 4092599349,
        "name" : "稻壳会员",
        "type" : "vip"
      },
      {
        "sku_key" : "20",
        "expire_time" : 4092599349,
        "effect_time" : 4092599349,
        "name" : "WPS会员",
        "type" : "vip"
      },
      {
        "sku_key" : "40",
        "expire_time" : 4092599349,
        "effect_time" : 4092599349,
        "name" : "超级会员",
        "type" : "vip"
      },
      {
        "sku_key" : "vip_pro_plus",
        "expire_time" : 4092599349,
        "effect_time" : 4092599349,
        "name" : "WPS超级会员Pro套餐",
        "type" : "vip"
      }
  ];
}

if ($request.url.indexOf(vip2) != -1){
  obj["privilege"] = [
    {
      "times" : 541826,
      "spid" : "data_recover",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "ocr",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf2doc",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf_merge",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf_sign",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf_split",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "speech_record",
      "expire_time" : 4092599349
    }
  ];
  obj["level"] = 3,
  obj["vip"] = {
    "memberid" : 40,
    "expire_time" : 4092599349,
    "name" : "超级会员",
    "has_ad" : 0,
    "enabled" : [
      {
        "name" : "超级会员",
        "memberid" : 40,
        "expire_time" : 4092599349
      },
      {
        "name" : "WPS会员",
        "memberid" : 20,
        "expire_time" : 4092599349
      },
      {
        "name" : "稻壳会员",
        "memberid" : 12,
        "expire_time" : 4092599349
      }
    ]
  };
}

if ($request.url.indexOf(flkj) != -1){
  obj["total"] = 1100585369600;
}

$done({body : JSON.stringify(obj)});
