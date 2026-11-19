/* 风云扫描王 — 风云扫描王-文件转pdf、证件扫描、文档管理和ocr文字识别
 * 原作者：WeiGiegie
 * 适配版本：1.4.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xieyi.cfcpe.com.cn
 * 身份还原：外层包装拦截 $done，输出中若含作者推广链接则恢复用户原始昵称/头像
 */
(function () {
  var __orig = null;
  try { __orig = JSON.parse($response.body); } catch (e) {}
  var __ident = {};
  (function __collect(o) {
    if (!o || typeof o !== 'object') return;
    for (var k in o) {
      var v = o[k];
      if ((k === 'nickname' || k === 'username' || k === 'userName' || k === 'nick' || k === 'nickName' || k === 'avatar' || k === 'headImg' || k === 'avatarUrl') && typeof v === 'string' && !(k in __ident)) __ident[k] = v;
      if (v && typeof v === 'object') __collect(v);
    }
  })(__orig);
  function __sanitizedDone(res) {
    try {
      if (res && typeof res.body === 'string' && (res.body.indexOf('t.me/GieGie777') !== -1 || res.body.indexOf('GieGie777') !== -1)) {
        var obj = JSON.parse(res.body);
        (function __walk(o) {
          if (!o || typeof o !== 'object') return;
          for (var k in o) {
            var v = o[k];
            if (typeof v === 'string' && (v.indexOf('t.me/GieGie777') !== -1 || v.indexOf('GieGie777') !== -1)) {
              if (k in __ident) o[k] = __ident[k];
              else delete o[k];
            } else if (v && typeof v === 'object') __walk(v);
          }
        })(obj);
        res.body = JSON.stringify(obj);
      }
    } catch (e) {}
    return $done(res);
  }
  (function ($done) {


if($request["\u0075\u0072\u006c"]["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"]("ofni/tneilc/ipa/nc.moc.epcfc.iyeix//:sptth".split("").reverse().join(""))){$done({"\u0062\u006f\u0064\u0079":$response["\u0062\u006f\u0064\u0079"]["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"vip":\w+/g,"}1:\"sutats\",1809961271:\"lairt_si\",\"61:54:90 32-70-4202\":\"etad_won\",\"90:90:90 90-90-9992\":\"ta_deripxe\",\"\u9605\u8BA2\u5E74\":\"emanpiv\",\"keeWXL_rennacSnuYgneF\":\"di_tcudorp_soi\",1:\"nalp_piv_si\",4:\"epytpiv\",llun:\"emit_trats\",0:\"deripxEsi\",\"0.1809961271\":\"ofni_lairt\",0:\"semit_cnuf\",\"0.0.0.0\":\"pi_tsetal\",\"14:44:90 32-70-4202\":\"ta_devitca\",1-:\"atouq_cnuf\",\"tluafed\":\"enoz\",3791:\"di_nalp\",0:\"reverof\"{:\"piv\"".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"nickname":"[^"]+/g,"777eiGeiG/em.t//:sptth\":\"emankcin\"".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"avatar":"[^"]+/g,"gpj.51420056691138171/41604202/ppa/nc.moc.keewefil.gmidz//:sptth\":\"ratava\"".split("").reverse().join(""))});}{$done({});}
  })(__sanitizedDone);
})();
