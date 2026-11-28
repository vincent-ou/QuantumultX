/* QX DNS 清理 — 每天 21:00 清除 QX 的 DNS 缓存
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除原版链接，逻辑与原版一致
 * [task_local]
 * 0 21 * * * https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/qingchudnshuancun.js, tag=QX DNS 清理 */

const message = {
    action: "dns_clear_cache"
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.ret) {
        console.log("dnsCache Cleared!");
    } else {
        console.log(resolve.error);
    }
    $done();
}, reject => {
    $done();
});
