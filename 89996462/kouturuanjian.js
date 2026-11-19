/* 抠图软件 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.0.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = kt.jiaofei8.cn
 */

var body = $response.body.replace(/finish_time":".*?"/g,'finish_time":"9999-01-01 08:00:00到期"')
.replace(/free_num":\d+/g,'free_num":8888')
.replace(/score":\d/g,'score":1')
.replace(/type":\d/g,'type":2')

$done({ body });
