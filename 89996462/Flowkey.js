/* Flowkey — Flowkey钢琴
 * 原作者：89996462
 * 适配版本：2.55.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = graphql.flowkey.com.cn
 */

var body = $response.body.replace(/"hasAccess":false/g,'"hasAccess":true')
.replace(/"hasSubscription":false/g,'"hasSubscription":true')
.replace(/"premiumExpiresAt":null/g,'"premiumExpiresAt":"2099-11-11"')
.replace(/"premiumExpiresAt":".*?"/g,'"premiumExpiresAt":"2099-11-11"')
.replace(/"isFree":false/g,'"isFree":true')
.replace(/"activeSalesOffer":null/g,'"activeSalesOffer":true')
$done({ body });
