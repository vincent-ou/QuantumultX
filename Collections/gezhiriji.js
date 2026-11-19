/* 格志日记 — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = diary-id.sumi.io */

var obj = JSON.parse($response.body);

  obj.data["inserted_at"] = "2023-08-01T05:53:45.839474";
  obj.data["expires_at"] = "2099-09-09T09:09:09.000000";
  obj.data["has_stripe_account"] = true;
  obj.data["membership_status"] = "premium";
  obj.data["db_version"] = 1;
  obj.data["active_device_ids"] = ["io.sumi.GridDiary.pro.annually"];

$done({body : JSON.stringify(obj)});
