/* JinRiShuiYinXiangJi2 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.0.35
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 47.112.75.234,today.xhey.top
 */

var objc = JSON.parse($response.body);

    objc = 
{"result":"bncdzrxa+Dq49i7NxArtSeZtLpZ7cxsOynuCD5Co47mgXj5V8wuwHKrBZk6XMBm14RbGudMdnG9/bN5HYEawsXsCvH1uPZ0Jc36U0ZeSQ7s="}


$done({body : JSON.stringify(objc)});
