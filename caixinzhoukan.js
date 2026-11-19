/* 财新周刊 — 文章免费标记改写 / 清理整理：Muse — 去除 jsjiami 混淆与防篡改弹窗，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = ipadcms.caixin.com */

var body = $response.body.replace(/"isfree":0/g, '"isfree":1');
$done({ body });
