/* quicut — video editor & maker
 * 原作者：WeiGiegie
 * 适配版本：1.0.1
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = outcut.szsszykj.com
 */
if ($request["url"]["includes"]("piVteG/yaPsaesrevO/ipa/moc.jkyzsszs.tuctuo//:ptth".split("").reverse().join(""))) {
  let body = JSON["parse"]($response["body"]);
  Object["assign"](body["data"], {
    "end_time": "2999-09-09"
  });
  $done({
    "body": JSON["stringify"](body)
  });
  $done({});
}