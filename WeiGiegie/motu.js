/* 摩途 — 摩途-摩托车骑行导航路书轨迹地图
 * 原作者：WeiGiegie
 * 适配版本：4.1.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = motu.motumap.com
 */

let obj = JSON.parse($response.body);

if (obj.data) {
    obj.data.isPro = 1;
    
    obj.data.memStartTime = Math.floor(Date.now() / 1000); 
   
    obj.data.memEndTime = 4102415999;
    obj.data.type = 2;
}

$done({body: JSON.stringify(obj)});
