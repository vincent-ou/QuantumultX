/* 万年历 — 会员解锁 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.jiemengjia.com */

var obj = JSON.parse($response.body);
const member = /member_info/;
const pay = /pay_verify_new/;
const order = /create_order/;
const ad = /dialogue\/adspace/;

if(member.test($request.url)){
  obj.data = {
    ...obj.data,
    "vip_state" : "1",
    "start_time" : "2024-01-01 00:00:00",
    "end_time" : "2099-09-09 09:09:09",
    "member_type" : "1"
  };
}

if(pay.test($request.url)){
  obj.data.is_pay = "1";
}

if(order.test($request.url)){
  obj.data.order_code = "VIP-1704300495021WYN4G";
}

if(ad.test($request.url)){
  obj.data.member_banner = {};
  obj.data.my_banner = {};
}

$done({body : JSON.stringify(obj)});
