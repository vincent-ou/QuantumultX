/* 片羽集照片日记软件 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.6.31
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = lentoapp.com:8091
 */
let obj = {
  "meta": {
    "message": "获取作者信息成功",
    "code": 200
  },
  "data": {
    "paytype": 1,
    "expiretime": "null"
  }
};
$done({
  body: JSON.stringify(obj),
  status: 200
});