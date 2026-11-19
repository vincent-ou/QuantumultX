/* 声音魔法师 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.1.6
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = amgaic.soundkey.net
 */
if ($request.url.includes("https://amgaic.soundkey.net/iosvoicemagic/urZXO8RY/ifZXO8RY")) {
  let body = JSON.parse($response.body);
  Object.assign(body, {
    data: "1d2d9a7130008854e8f673ad7287edb6554fdb3324041b4590ac92c7a5def4e65c0aff9ebfa85817f360fc17a17cb8b2a9891305a2c6f09922d0635cb49bda0b83e236e54a5ac5866e8b17ba2286d51900f0f8b615106b95a4dbcca7987681e775fa85b5c803eda8b00f8ab98dce41ccfe069fce27f36e2b0e8315880fc4a782c4812b78c5546c68fb046e9b5b53509565e395bc28389e4e"
  });
  $done({
    body: JSON.stringify(body)
  });
}