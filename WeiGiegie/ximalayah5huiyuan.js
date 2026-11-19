/* 喜马拉雅H5会员 — himalaya vip
 * 原作者：WeiGiegie
 * 适配版本：h5
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.himalaya.com,apisg.himalaya.com,183.232.157.73:13037,cdn.himalaya.com:443,*.himalaya.*,api.himalaya.com
 */

const body = $response.body;
let hm = body;

// 无效
hm = hm.replace(/"p97":"[^"]*"/g, '"p97":""')
       .replace(/"p98":"[^"]*"/g, '"p98":""')
       .replace(/"p99":"[^"]*"/g, '"p99":""');
// 底栏
const cssInjection = `
<style>
  div[class*="index_m_downloadWrapper__"] { display: none !important; }
</style>
`;
hm = hm.replace('</head>', `${cssInjection}</head>`);

$done({body: hm});
