/* Cubox — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = cubox.* */


var body = $response.body;
var url = $request.url;
var resp = JSON.parse(body);
const vip = '/userInfo';

if (url.indexOf(vip) != -1) {
    resp.data.level = 1;
    resp.data.expireTime = "2099-09-09T09:09:09+09:09";
    resp.data.isExpire = false;
    resp.data.active = true;
    resp.data.isThirdUser = true;
    resp.data.payTime = 1660006006;
    body = JSON.stringify(resp);
}

$done({body});
