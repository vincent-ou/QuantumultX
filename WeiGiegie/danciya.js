/* 单词鸭 — 单词鸭-消消乐背单词-导入单词自建词库-场景主题英语词根词缀
 * 原作者：WeiGiegie
 * 适配版本：3.8.2
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = zhcn.api.wordln.com
 */

let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {
  // 设置所有常见的VIP相关字段
  let vipData = {
    vipActive: true,
    vipFlag: 1,
    vipEndTime: 4102415999000,
    vipExpireTime: "2099-12-31",
    needVip: false,
    gold: 9999,
    physical: 9999,
    nickName: "VIP用户",
    appleId: "com.wordln.app.super_1"
  };
  
  // 批量设置字段
  for (let key in vipData) {
    if (obj.data.hasOwnProperty(key)) {
      obj.data[key] = vipData[key];
    }
  }
  
  // 批量修改词库单元权限
  if (obj.data.childTypes) {
    obj.data.childTypes.forEach(unit => {
      if (unit.needVip !== undefined) unit.needVip = false;
      if (unit.vipFlag !== undefined) unit.vipFlag = 0;
    });
  }
}

$done({body: JSON.stringify(obj)});
