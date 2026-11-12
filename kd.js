/*************************************
项目名称：快对作业 — 会员解锁 + 图片/PDF 捕获
清理整理：Muse — 去掉 Env 跨平台 boilerplate (只留 QX)，
           到期时间由原版已过期的 2024-10-15 改为 2099-09-09，
           其它逻辑与原版一致。
           注意：原版有一处全局 false->true 的替换，保留原样。

规则文件：KuaiDui.js (与本文件同传仓库)

[rewrite_local]
http:\/\/kd02-1253445850\.file\.myqcloud\.com\/scanimg url script-request-header https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js
https:\/\/apm\.zuoyebang\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js
https:\/\/www\.kuaiduizuoye\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js
https:\/\/apivip\.kuaiduizuoye\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js

[mitm]
hostname = kd02-1253445850.file.myqcloud.com, apivip.kuaiduizuoye.com, apm.zuoyebang.com, www.kuaiduizuoye.com
*************************************/

var requestUrl = $request.url;

// 图片捕获 (script-request-header)：通知图片链接
if (/^http:\/\/kd02-1253445850\.file\.myqcloud\.com\/scanimg/.test(requestUrl)) {
  $notify("捕获到当前图片链接❗️", "", "点击跳转浏览器查看❗️", requestUrl);
  $done(JSON.stringify($request));
} else {
  // 会员解锁 (script-response-body)
  var obj = JSON.parse(
    $response.body
      .replace(/"status":0/g, '"status":1')
      .replace(/"vipStatus":0/g, '"vipStatus":1')
      .replace(/"usedCount":0/g, '"usedCount":1')
      .replace(/"restCount":0/g, '"restCount":1')
      .replace(/"totalCount":0/g, '"totalCount":1')
      .replace(/"isVip":0/g, '"isVip":1')
      .replace(/"isShow":0/g, '"isShow":1')
      .replace(/"startTime":0/g, '"startTime":1697376016000')
      .replace(/"stopTime":0/g, '"stopTime":4092599349000') // 2099-09-09，原版 2024-10-15 已过期
      .replace(/"endTime":0/g, '"endTime":4092599349000')   // 2099-09-09，原版 2024-10-15 已过期
      .replace(/false/g, "true")
  );

  if (/^https:\/\/www\.kuaiduizuoye\.com\/codesearch\/sale\/viptabmain/.test(requestUrl)) {
    if (obj.data && obj.data.vipInfo) {
      obj.data.vipInfo.status = 1;
      obj.data.vipInfo.planId = 1;
      obj.data.vipInfo.openButtonText = "VIP";
    }
  } else if (/^https:\/\/www\.kuaiduizuoye\.com\/codesearch\/popup\/userinfovip/.test(requestUrl)) {
    if (obj.data) obj.data.isVip = 1;
  } else if (/^https:\/\/apivip\.kuaiduizuoye\.com\/vipols\/app\/salepackagev1/.test(requestUrl)) {
    if (obj.data && obj.data.vipInfo) {
      obj.data.vipInfo.status = 1;
      obj.data.vipInfo.monthlyPayment = 12;
      obj.data.vipInfo.monthlyPaymentNum = 12;
      obj.data.vipInfo.startTime = 1697376016000;
      obj.data.vipInfo.stopTime = 4092599349000; // 2099-09-09，原版 2024-10-15 已过期
      obj.data.vipInfo.experience = 10000;
      obj.data.kdABviphuaxian = 1;
      obj.data.kdABVipLabel = 1;
      obj.data.kdABVipVideoMask = 1;
    }
  } else if (/^https:\/\/www\.kuaiduizuoye\.com\/codesearch\/newexam\/detail/.test(requestUrl)) {
    // PDF 捕获：通知 PDF 链接
    if (obj.data && obj.data.info && obj.data.info.pdfUrl) {
      $notify("捕获到当前PDF链接❗️", obj.data.info.title, "点击跳转浏览器查看❗️", obj.data.info.pdfUrl);
    }
  }

  $done({ body: JSON.stringify(obj) });
}
