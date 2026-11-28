/* 京喜 — 京喜 App 开屏/活动时间改写
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 补注释头，逻辑与原版一致
 * [rewrite_local]
 * ^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/jingxi.js
 * [mitm] hostname = api.m.jd.com */

let obj=JSON.parse($response.body);
/*京喜APP*/
if (/^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show/.test($request.url)) { 
    obj.data.materialList.startTime=3667476800000;
    obj.data.materialList.endTime  =3667908800000;
}
$done({body:JSON.stringify(obj)});
