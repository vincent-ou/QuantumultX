/* 精点相机 — 精点相机
 * 原作者：WeiGiegie
 * 适配版本：1.6.6
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = counting.movingshop.cn
 */

let obj = JSON.parse($response.body);

if (obj.user) {
  obj.user.isValid = 1;                  // 标记为有效会员
  obj.user.validCount = 9999;            // 设置有效会员次数或天数
  obj.user.expiredAt = 4102444799000;   // 修改到期时间为2099年（JavaScript时间戳，单位毫秒）
  obj.user.cnName = "年卡";             // 设置会员类型名称
}

$done({body: JSON.stringify(obj)});
