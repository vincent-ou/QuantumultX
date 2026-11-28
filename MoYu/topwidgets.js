/* TopWidgets — 解锁订阅（subscribe 改写）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广，混淆单行原样保留（已解码验证为正常改写），逻辑与原版一致
 * [rewrite_local]
 * [mitm] hostname = （待补：源文件无规则，解码串中无 hostname） */
/* 解码说明：原文件为 550B 混淆单行，已在 Node 沙箱中执行验证，
 * 解码后为：$done({body:$response.body.replace(/subscribe":false/g, 'subscribe":true')})，
 * 属正常响应改写，故原样迁移，未改逻辑。 */

['so.js']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"36e100y111c110j101u40j123z98K111b100Z121S58u36z114N101L115x112A111d110b115K101f46A98p111R100A121R46P114w101x112e108u97w99F101Q40f47I115u117B98X115V99R114U105D98A101d34r58Z102c97R108W115X101X47y103a44T32g39t115Y117z98k115C99V114d105G98V101a34c58y116j114l117h101J39U41H125J41"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('');
