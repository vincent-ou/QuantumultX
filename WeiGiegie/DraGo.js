/* DraGo — DraGo
 * 原作者：WeiGiegie
 * 适配版本：1.1.4
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.xtv.media
 */

let obj = JSON.parse($response.body);
let url = $request.url;

if (/\/api\/Videocenter\/getVideoDrama/.test(url)) {
  obj.list?.forEach(i => {
    i.isvip = 0;
  });
}

if (/\/api\/Videocenter\/getFreeVideoDrama/.test(url)) {
  obj.data?.forEach(v => {
    v.is_purchased = 1;
    v.pay_status = 0;
    v.status = 1;
  });
}

if (/\/api\/Videocenter\/Charging/.test(url)) {
  if (obj.data) {
    obj.data.status = 0;
  }
}

$done({ body: JSON.stringify(obj) });
