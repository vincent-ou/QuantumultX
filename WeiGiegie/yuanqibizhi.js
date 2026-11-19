/* 元气壁纸 — 海量超清壁纸下载
 * 原作者：WeiGiegie
 * 适配版本：1.1.9
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = wallpaper.soutushenqi.com
 */
// 检查响应体是否存在
if ($response && $response.body) {
  try {
    // 1. 解析原始响应体
    let obj = JSON.parse($response.body);

    // 2. 在原始 data 对象上修改或添加 VIP 字段
    // 确保 obj 和 obj.data 都存在
    if (obj && obj.data) {
      obj.data.vipLabel = "永久会员";
      obj.data.vipType = 256;
    }

    // 3. 将修改后的对象转回字符串，并结束请求
    $done({
      body: JSON.stringify(obj)
    });
  } catch (e) {
    $done({
      body: $response.body
    });
  }
} else {
  // 如果响应体不存在，直接结束，不做任何修改
  $done({});
}