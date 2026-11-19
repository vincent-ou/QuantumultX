/* JinRiShuiYinXiangJi — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.0.35
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 47.112.75.234,today.xhey.top
 */

var objc = JSON.parse($response.body);

    objc = 
{
  "result": "bncdzrxa+Dq49i7NxArtSeZtLpZ7cxsOynuCD5Co47mgXj5V8wuwHKrBZk6XMBm14RbGudMdnG9/bN5HYEawsYzr4IJtgtQeWEXeLX+5qSlN9uDunZC4Il0PpaxdeEaYm4TemFHyNAcFl6A+0LgQv/jmaZGldDdypZEYBC8Xm45u8HSvDEPsIoPk8CXEWpXBLJvSfsZ+3ryV87nwgLjZGjR301rTrcvAmuC8gr3p3tU2KOawe5xnH9sNYfeg2Vk1wwtltF6LObXU+CNxqqDTj4EKvbOxGrqB4R/ZZ8wNs/94joVG1o3cf5hydFNgulEN"
}


$done({body : JSON.stringify(objc)});
