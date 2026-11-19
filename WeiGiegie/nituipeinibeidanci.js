/* 你推陪你背单词 — 你推陪你背单词练口语
 * 原作者：WeiGiegie
 * 适配版本：2.2.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.mimuapp.com
 */

let obj = JSON.parse($response.body);

if (obj.data && obj.data.vipInfo) {
  obj.data.vipInfo.status = 1;
  obj.data.vipInfo.autoRenewal = true;
  obj.data.vipInfo.rightList = [
    "pro_role",
    "study_data",
    "ai_remember",
    "long_term_vip"
  ];
  obj.data.vipInfo.canPlay = true;
  obj.data.vipInfo.title = "永久至尊会员";

  let expireDate = new Date("2038-01-01T00:00:00Z");
  let expireUnix = expireDate.getTime();

  obj.data.vipInfo.expireTime = 20380101;
  obj.data.vipInfo.expireUnixTime = expireUnix;
  obj.data.vipInfo.desc = null;  // 去掉描述文本

  obj.data.coinNum = 9999;  // 金币数修改为9999
}

$done({body: JSON.stringify(obj)});
