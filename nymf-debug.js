/* NYMF 调试 — 打印 nymf.com / nymfapp.com 的请求与响应原文（仅调试，不改数据）
清理整理：Muse — 只做 console.log 记录，原样放行；调试脚本，不推库。
原作者：无（自写调试脚本）
适配版本：2.1.2
[rewrite_local]
[mitm] hostname = nymf.com, nymfapp.com */

(function () {
  var url = ($request && $request.url) || "";
  var method = ($request && $request.method) || "";
  var reqBody = ($request && $request.body) || "";
  var resBody = ($response && $response.body) || "";
  console.log("[NYMF-DEBUG] " + method + " " + url);
  if (reqBody) console.log("[NYMF-DEBUG] REQ: " + String(reqBody).slice(0, 5000));
  console.log("[NYMF-DEBUG] RES: " + String(resBody).slice(0, 8000));
  $done({});
})();
