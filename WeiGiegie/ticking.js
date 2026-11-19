/* ticking — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.18.27
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = todo.i99yun.com
 */
let obj = JSON.parse($response.body);
if (obj.data) {
  obj.data.vipType = 1;
  obj.data.expiredTime = 4102444799000;
  obj.data.userType = 1;
  obj.data.payTime = Date.now();
}
$done({
  body: JSON.stringify(obj)
});