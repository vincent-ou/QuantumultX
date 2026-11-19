/* 暗记 — 暗记-ankiapp-记忆神器-flashcards
 * 原作者：WeiGiegie
 * 适配版本：11.2.1
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.ankiapp.com
 */

let obj = JSON.parse($response.body);

obj.has_unlimited = true;


$done({body: JSON.stringify(obj)});
