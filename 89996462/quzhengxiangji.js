/* 取证相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * 
[rewrite_local]

^https://ys.qquanyun.top/api/user/my url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/main/89996462/qzxj.js

[mitm] 

hostname = ys.qquanyun.top

*******************************/

var body = $response.body.replace(/free_num":\d+/g,'free_num":999')
.replace(/type":\d/g,'type":2')
.replace(/finish_time":".*?"/g,'finish_time":"9999-01-01到期"')
$done({ body });
