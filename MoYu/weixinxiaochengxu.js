/* 微信小程序 — 小程序去广告
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.blibee.com, ucmp.sf-express.com, www.bbkj.work, wx.wxqqurl.cn, wp3.lobdol.cn, awg.enmonster.com, mp.weixin.qq.com, wx.mygolbs.com, jabi.coding.net, api.bspapp.com, 3dd0be8a-54fe-43ff-a0e7-f670c4f20432.bspapp.com, *.tslt.xyz, g.syshhc.top, c.jxjt888.top, www.laoguikeji.cn, qj.bpojie.com, b.tslt.xyz, m.xgjyouhui.com, www.freeheikeji.cn, xcx.xianbaow.com, *.smkj33.top, *.ddly666.top, hkj178.com, a.jxjt888.top, lysl2020.com, www.i3zh.com, iosoi.cn, jt.jxjt888.top, gjsx.vip, d.syshhc.top, gz.gongzijx.com, tvapp.guilaile.cn, www.benbenfx.xyz, 4thdimension.top, tan.ipnas.ltd */

re('"excitationAd":"\\d"@Ad":"\d"@ad":true@AdId":"[^"]*"@adid":"[^"]*"@fr_videp_if":"1@adunit[^"]*"','"excitationAd":"0"@Ad":"0"@ad":false@AdId":""@adid":""@fr_videp_if":"0@"')

function re(){var e=$response.body;if(arguments[0].includes("@")){var r=arguments[0].split("@"),l=arguments[1].split("@");for(i=0;i<r.length;i++){var a=RegExp(r[i],"g");e=e.replace(a,l[i])}}else{var a=RegExp(arguments[0],"g");e=e.replace(a,arguments[1])}$done(e)}
