/* 小麦在线 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.xiaomaigongkao.com */

var resp = JSON.parse($response.body);
const vip = /AppApi\/vip\/index/; //会员信息
const user = /AppApi\/vip\/userInfo/; //用户会员
const ad = /AppApi\/(StartPage\/welcome|Member\/indexHangingWindow)/; //开屏/浮窗
const kc = /AppApi\/(Course\/(curriculum|details)|vip\/ebook)/; //解锁课程

if(vip.test($request.url)){
  resp.data.vip_user = {
    ...resp.data.vip_user,
    "status": "1",
    "end_valid_time": "4092599349"
  };
  searchAndModify(resp, 'is_vip_user', true, 'is_free', 1);
}

if(user.test($request.url)){
  resp.data = {
    ...resp.data,
    "status" : "1",
    "end_valid_time" : "4092599349"
  };
}

if(ad.test($request.url)){
  resp.data = null;
}

if(kc.test($request.url)){
  searchAndModify(resp, 'is_free', 2, 'is_buy', 1, 'is_vip_user', true);
}

$done({ body: JSON.stringify(resp) });

function searchAndModify(obj, ...args) {for (let i = 0; i < args.length; i += 2) {const key = args[i];const value = args[i + 1];for (var prop in obj) {if (obj.hasOwnProperty(prop)) {if (typeof obj[prop] === 'object') {searchAndModify(obj[prop], ...args);} else if (prop === key) {obj[prop] = value;}}}}};
