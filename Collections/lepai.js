/* 乐拍 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = lepai-api.faceqianyan.com */

var resp = JSON.parse($response.body);
const vip = /(apple\/product|account\/profile)/;
const shuiyin = /(toolCollection|faceFusion)/;

if (vip.test($request.url)) {
  searchAndModify(resp, 'pro', 1, 'load_subscribe_page', 0);
}

if (shuiyin.test($request.url)) {
  if (resp.data && resp.data.fusion_url) {
    resp.data.fusion_url = resp.data.fusion_url.replace("/image_watermark_lepai", "");
  }
  if (resp.data && resp.data.info && resp.data.info.works_url) {
    resp.data.info.works_url = resp.data.info.works_url.replace("/filter_watermark_lepai", "");
  }
}

$done({ body: JSON.stringify(resp) });

function searchAndModify(obj, ...args) { for (let i = 0; i < args.length; i += 2) { const key = args[i]; const value = args[i + 1]; for (var prop in obj) { if (obj.hasOwnProperty(prop)) { if (typeof obj[prop] === 'object' && obj[prop] !== null) { searchAndModify(obj[prop], ...args);} else if (prop === key) { obj[prop] = value; }}}}};
