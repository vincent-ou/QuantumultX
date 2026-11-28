/* 掌上公交 — 微信小程序去除广告
 * 原作者：ddgksf2013
 * 适配版本：0.0.0
 * 清理整理：Muse — 去除作者推广、Telegram 链接与未使用的 cuttlefish 变量，逻辑与原版一致
 * [rewrite_local]
 * https?:\/\/wx\.mygolbs\.com\/WxBusServer\/ApiData\.do url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/zhangshanggongjiao.js
 * [mitm] hostname = wx.mygolbs.com */

var body = $response.body.replace(/Ad":1/g, 'Ad":0').replace(/Ad_ab":1/g, 'Ad_ab":0')
$done({ body });
