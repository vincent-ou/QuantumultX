/* 识日JLPT — 识日jlpt-最新jlpt历年真题全覆盖
 * 原作者：WeiGiegie
 * 适配版本：1.1.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = jlpt.jingqueyun.com
 */

var body = $response.body;
var obj = JSON.parse(body);

if (obj.data && typeof obj.data === 'object') {
    obj.data.is_vip = 1;
    obj.data.vip_time = "2099-12-31";
}

$done({body: JSON.stringify(obj)});
