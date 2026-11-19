/* DJ串烧集 — dj串烧集-大型dj串烧歌曲
 * 原作者：WeiGiegie
 * 适配版本：2.3.8
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = csj.yy-5.com
 */

let obj = JSON.parse($response.body);

if (obj.result) {
  obj.result.isvip = true;
  obj.result.viptype = 1;

  
  obj.result.expiretime = 4102444799; 

  obj.result.nickname = "VIP";

  
}

$done({body: JSON.stringify(obj)});
