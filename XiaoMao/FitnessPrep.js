/* FitnessPrep — FitnessPrep 会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.pocketprep.com
 */
var obj = JSON.parse(
    $response.body
      .replace(/\"isFree\":\w+/g, '"isFree":true')
      .replace(/\"isDisabled\":\w+/g, '"isDisabled":false')
  );
  $done({ body: JSON.stringify(obj) });
