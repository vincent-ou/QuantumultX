# afengye RevenueCat 解锁合集

原作者：afengye（源文件 `crack.js`，afengye/QX）。本文件夹为单抽独立版：每个 App 一对文件（逻辑 .js + 规则 .snippet），共 118 对。

- 解锁方式：RevenueCat（MITM `api.revenuecat.com, api.rc-backup.com`），伪造订阅到期 **2999-01-01**，不分年付/终身。
- 每个 .snippet 里有两条规则：`script-response-body`（注入订阅）+ `script-request-header`（删 etag 头，强制刷新），两条都要启用。
- 5 个 App 没有 bundle_id（Loopsie、1Blocker、HabitMinder、OneBox、DHWaterMarkManager），按 User-Agent 里的 App 名匹配。
- 已有真实有效订阅时不覆盖（subChk 守则）。未在真机验证。

| # | App | Bundle ID | 产品 ID | 权益 | 适配版本 | 文件 |
|---|---|---|---|---|---|---|
| 1 | Days | `net.mattdavenport.daysuntil` | `net.mattdavenport.daysuntil.dayspremiumlifetime` | premium、pro | 3.15 | `Days.js` + `Days.snippet` |
| 2 | Diarly | `com.pureformstudio.diaryOSX` | `com.pureformstudio.diary.yearly_2022_promo` | PRO | 3.18 | `Diarly.js` + `Diarly.snippet` |
| 3 | Loopsie | `（无，按 UA 匹配）` | `com.gamelounge.loopsie.ios.one_time` | premium | 8.17.1 | `Loopsie.js` + `Loopsie.snippet` |
| 4 | 1Blocker | `（无，按 UA 匹配）` | `blocker.ios.iap.lifetime` | premium | 5.8 | `1Blocker.js` + `1Blocker.snippet` |
| 5 | VidCap | `io.fadel.VidCap` | `subs.vcp_59.99_365_3` | io.fadel.vidcap.pro | 1.0.197 | `VidCap.js` + `VidCap.snippet` |
| 6 | SuperPlanner | `com.gabrielguarino.SuperPlanner` | `superplanner_pro_lifetime` | pro_lifetime | 2.1.2406 | `SuperPlanner.js` + `SuperPlanner.snippet` |
| 7 | Ereasy | `background.remover.bg.eraser` | `app.ereasy.ereasy.na.bold.one_year` | premium、Full_access_app | 2.0.0 | `Ereasy.js` + `Ereasy.snippet` |
| 8 | stepapp | `com.gunthermarktl.stepapp` | `app.steps.stepsapp.premium.year` | stepapppro | 8.0.1 | `Stepapp.js` + `Stepapp.snippet` |
| 9 | WorldClock | `com.overdesigned.WorldClock` | `com.overdesigned.worldclock.removeads1` | lifetime-unlock | 1.21.2 | `WorldClock.js` + `WorldClock.snippet` |
| 10 | 解忧娃娃 | `id.com.WorryDolls` | `magicmode` | magicmode | 2.0 | `jieyouwawa.js` + `JieYouWaWa.snippet` |
| 11 | opusvpn | `com.biel.opus.vpn` | `opusvpn.v2.yearly` | PRO | 1.8.6 | `OpusVPN.js` + `OpusVPN.snippet` |
| 12 | Fleeky | `net.cacaomobile.customizescreen` | `fleeky_week_cny48_3d` | Unlimited | 3.15.0 | `Fleeky.js` + `Fleeky.snippet` |
| 13 | Zen7 VPN | `com.efe.zen7vpn` | `yearly` | Premium | 2.0 | `Zen7VPN.js` + `Zen7VPN.snippet` |
| 14 | HappyScale | `com.frontpocketsoftware.happyscale` | `com.frontpocketsoftware.happyscale.premium.perpetual` | premium | 2024.15 | `HappyScale.js` + `HappyScale.snippet` |
| 15 | 酷拍 | `com.wallpapershub.anime` | `com.wallpapershub.anime.premiumCategories` | Premium | 3.7 | `kupai.js` + `KuPai.snippet` |
| 16 | ZoomEarth | `com.neave.zoomearth` | `ze_pro_annual_v1` | pro | 3.1 | `ZoomEarth.js` + `ZoomEarth.snippet` |
| 17 | FitnessView | `com.funnmedia.fitnessview` | `fitnessview.premiumOnetime` | fitnessview-premium | 2.5.7 | `FitnessView.js` + `FitnessView.snippet` |
| 18 | Video Up! | `video.up.editor.maker` | `app.videoup.videoup.na.base.one_year` | Full_access_app | 1.23.1 | `VideoUp.js` + `VideoUp.snippet` |
| 19 | ElementNote | `com.soysaucelab.element.note` | `com.soysaucelab.element.note.lifetime` | pro | 2.5.0 | `ElementNote.js` + `ElementNote.snippet` |
| 20 | Bend2 | `com.bowery-digital.bend` | `subs_29.99_365_0` | all_access | 6.1.3 | `Bend2.js` + `Bend2.snippet` |
| 21 | Carbon | `rr.carbon` | `carbon.subscription.yearly.1.freetrial` | pro | 14.2 | `Carbon.js` + `Carbon.snippet` |
| 22 | Assembly | `com.pixite.assembly` | `com.pixite.assembly.1yearP` | premium_access | 2.4.7 | `Assembly.js` + `Assembly.snippet` |
| 23 | UTC | `tech.miidii.UTC` | `tech.miidii.UTC.unlock.pro` | Entitlement.Pro | 3.11 | `UTC.js` + `UTC.snippet` |
| 24 | Ramble | `com.bowery-digital.ramble` | `subs.rmbl_19.99_365_0` | all_access | 1.1.1 | `Ramble.js` + `Ramble.snippet` |
| 25 | PDFScanner | `pdf.scanner.reader.online.pro` | `weekly_f3_699_scanner` | full_access | 2.7.76 | `PDFScanner.js` + `PDFScanner.snippet` |
| 26 | GeniusScan | `com.geniussoftware.GeniusScan` | `com.thegrizzlylabs.geniusscan.geniuscloud.subscription.year.1` | ultra | 7.22 | `GeniusScan.js` + `GeniusScan.snippet` |
| 27 | Gymnotize | `com.gymnotize` | `com.gymnotize.upgrade.pro.subscription.annual` | rc.gymnotize.pro.subscription | 9.2.62 | `Gymnotize.js` + `Gymnotize.snippet` |
| 28 | XS VPN | `com.xsvpn.free.turbofast` | `xs_ios_yearly_sub_1` | Premium | 2.6 | `XSVPN.js` + `XSVPN.snippet` |
| 29 | Goru | `com.ahmetserdarkaradeniz.Goru` | `com.ahmetserdarkaradeniz.goruyearlyalternative` | goru_pro | 1.6.1 | `Goru.js` + `Goru.snippet` |
| 30 | Pedometer | `com.crossforward.pedometer` | `pedometer_annual_20` | premium | 6.1 | `Pedometer.js` + `Pedometer.snippet` |
| 31 | 天气 | `maxime.maheo.simple-weather` | `maxime.maheo.simpleweather.yearly` | premium | 3.5.4 | `tianqi.js` + `TianQi.snippet` |
| 32 | ChatGPT | `com.prod.gpt` | `com.prod.gpt.1y40` | premium | 1.2.6 | `ChatGPT.js` + `ChatGPT.snippet` |
| 33 | Foodvisor | `com.foodvisor.Foodvisor` | `com.foodvisor.Foodvisor.lifetime` | coaching、daily_assessment、diet_article、full_access、journal、nutritional_facts、premium、recipe | 7.5.1 | `Foodvisor.js` + `Foodvisor.snippet` |
| 34 | Flow | `design.yugen.Flow` | `design.yugen.Flow.Lifetime` | pro | 3.8.2 | `Flow.js` + `Flow.snippet` |
| 35 | YouCanFocus2 | `com.Bundulas.Vilius.youCanFocus.ios.project.YouCanFocus2` | `yc_1299_all` | Pro | 2.3.0 | `YouCanFocus2.js` + `YouCanFocus2.snippet` |
| 36 | quitnow | `com.eaginsoftware.QuitNow` | `24q4_year` | pro_features | 10.2.0 | `Quitnow.js` + `Quitnow.snippet` |
| 37 | WeatherFit | `com.antonchuiko.wthrd` | `com.antonchuiko.wthrd.premium_onetime` | Pro | 6.12.3 | `WeatherFit.js` + `WeatherFit.snippet` |
| 38 | Focuskeeper | `com.limepresso.pomodorofree` | `com.limepresso.pomodorofree.subscription.year` | premium | 2.8.4 | `Focuskeeper.js` + `Focuskeeper.snippet` |
| 39 | ClevCalc | `com.dencreak.dlcalculator` | `com.dencreak.dlcalculator.iap.dlc_sub_premium.1y` | Premium | 1.3.7 | `ClevCalc.js` + `ClevCalc.snippet` |
| 40 | Shift Days | `com.limepresso.shiftworkcalendar` | `PRO1` | premium | 1.90.14 | `ShiftDays.js` + `ShiftDays.snippet` |
| 41 | My Diary | `com.simpleinnovation.diary` | `com.simpleinnovation.diary.premium.forever.base` | Pro | 1.10.4 | `MyDiary.js` + `MyDiary.snippet` |
| 42 | StrongVPN | `com.solutioncat.proxy.vpn` | `com.solutioncat.proxy.vpn.master.oneYearNew` | isPremium | 1.5.4 | `StrongVPN.js` + `StrongVPN.snippet` |
| 43 | Accountit | `DesignTech-SIA.Spendit` | `DesignTech.SIA.Spendit.Plus.Lifetime` | spenditPlus | 2.4.4 | `Accountit.js` + `Accountit.snippet` |
| 44 | Giftr | `com.Yooshr.Giftr` | `com.Yooshr.Giftr.everythingForever` | com.Yooshr.Giftr.subscriptionPremium | 2.2 | `Giftr.js` + `Giftr.snippet` |
| 45 | FastConnectLite | `com.freefastconnect.vpn.lite` | `com.freefastconnect.vpn.lite.monthly` | pro | 1.0.4 | `FastConnectLite.js` + `FastConnectLite.snippet` |
| 46 | CheckCalendar | `com.checkcalendar` | `checkcalendar.610.lifetime` | premium | 12.29.0 | `CheckCalendar.js` + `CheckCalendar.snippet` |
| 47 | HeartRateTracker | `com.mosin.heartrate` | `com.mosin.heartrate.premiumNonConsumable` | heart_premium | 2.0.20 | `HeartRateTracker.js` + `HeartRateTracker.snippet` |
| 48 | CapCap | `in.capcap.app` | `in.capcap.subscription.pro.weekly.non.trial` | Pro | 1.5.5 | `CapCap.js` + `CapCap.snippet` |
| 49 | Teleprompter | `matekovacs.Teleprompter` | `com.teleprompter.pro.annual` | Teleprompter Pro | 7.0.1 | `Teleprompter.js` + `Teleprompter.snippet` |
| 50 | BRUSH | `com.DariaPletnova.BRUSH` | `brs_3999_1y` | pro | 2.1 | `Brush.js` + `Brush.snippet` |
| 51 | Period Calendar | `com.lbrc.PeriodCalendar` | `com.lbrc.PeriodCalendar.premium.forever` | Pro | 10.7.4 | `PeriodCalendar.js` + `PeriodCalendar.snippet` |
| 52 | 体重指数计算器 | `net.smayer.bodydata` | `RemoveAds` | ad_free | 1.9.3 | `tizhongzhishujisuanqi.js` + `TiZhongZhiShuJiSuanQi.snippet` |
| 53 | TapeKit | `com.widget-kid` | `com.widgetkid.trialannual` | com.widgetkid.unlimited | 2.10.0 | `TapeKit.js` + `TapeKit.snippet` |
| 54 | YPlayer | `net.duoziwei.yplayer` | `net.duoziwei.yplayer.premium` | Premium | 8.3 | `YPlayer.js` + `YPlayer.snippet` |
| 55 | Overdue | `moshou.Overdue` | `1` | Pro | 5.5.1 | `Overdue.js` + `Overdue.snippet` |
| 56 | Tally | `com.rainbow.PlusOne` | `tally.remove_ad` | pro | 3.9.0 | `Tally.js` + `Tally.snippet` |
| 57 | timetrack | `io.timetrack.ios` | `io.timetrack.auto_renew.1` | atimelogger-premium-month | 1.6.128 | `Timetrack.js` + `Timetrack.snippet` |
| 58 | Monefy | `com.monefyapp.monefy` | `com.monefyapp.subscription.yearly.v2` | monefy_premium | 1.5.1 | `Monefy.js` + `Monefy.snippet` |
| 59 | HabitMinder | `（无，按 UA 匹配）` | `habitminder.subscription.yearly.v2` | habitminder_premium | 2.9.0 | `HabitMinder.js` + `HabitMinder.snippet` |
| 60 | pixel_me_tokyo | `sato.tokyo.pixel-me` | `pm_usd499_0d0` | pro | 4.7.1 | `PixelMeTokyo.js` + `PixelMeTokyo.snippet` |
| 61 | Calflow | `kike.Calflow` | `kike.calflow.pro.lifetime` | pro | 1.7.6 | `Calflow.js` + `Calflow.snippet` |
| 62 | HealthView | `com.funnmedia.HealthMinder` | `com.funnmedia.HealthMinder.subscription.yearly.v2` | healthview_premium | 3.9.0 | `HealthView.js` + `HealthView.snippet` |
| 63 | Strides | `com.puresignal.strides` | `LifetimePlan` | plus | 17.3 | `Strides.js` + `Strides.snippet` |
| 64 | TimerPlus | `com.minimasoftware.TimerPlus` | `tp_pro_lifetime` | pro | 2.29.1 | `TimerPlus.js` + `TimerPlus.snippet` |
| 65 | Cheatsheet | `com.overdesigned.Cheatsheet` | `pro_lifetime` | pro | 5.0.2 | `Cheatsheet.js` + `Cheatsheet.snippet` |
| 66 | fastdiet | `com.happy.fastdiet` | `com.happy.fastdiet.forever` | premium | 1.3.7 | `Fastdiet.js` + `Fastdiet.snippet` |
| 67 | 秩序目标 | `com.metaorder.OKRTomato` | `com.metaorder.OKRTomato.vip.supremacy` | pro | 3.4.5 | `zhixumubiao.js` + `ZhiXuMuBiao.snippet` |
| 68 | js_code_pad | `com.markodevcic.js-code-pad` | `js_code_pad_developer_upgrade` | developer | 1.8.5 | `JsCodePad.js` + `JsCodePad.snippet` |
| 69 | Quitzilla | `com.despdevs.quitzilla` | `com.despdevs.quitzilla.sub1y` | premium | 1.2 | `Quitzilla.js` + `Quitzilla.snippet` |
| 70 | money_manager | `com.happy.moneyManager` | `com.happy.money.forever` | premium | 1.2.9 | `MoneyManager.js` + `MoneyManager.snippet` |
| 71 | G E I S T | `com.memorado.app` | `com.memorado.subscription.yearly.v1` | memorado_premium | 7.7.0 | `GEIST.js` + `GEIST.snippet` |
| 72 | IntervalTimer | `com.simpleinnovation.timer.interval` | `com.simpleinnovation.timer.interval.pro.forever.discount25` | pro | 1.7.1 | `IntervalTimer.js` + `IntervalTimer.snippet` |
| 73 | YetiVpn | `com.yetivpn.mastersecure.bestvpnproxy` | `yetipro.yearly` | Yeti Pro Subscription | 1.0.34 | `YetiVpn.js` + `YetiVpn.snippet` |
| 74 | Penbook02 | `camp.user.penbook` | `penbook.lifetime.2024.12.C` | proLoyalty | 6.8.3 | `Penbook02.js` + `Penbook02.snippet` |
| 75 | 极简时钟 | `com.mad.FlipClock` | `com.mad.zenflipclock.iap.buymeacoffee` | pro | 4.6.4 | `jijianshizhong.js` + `JiJianShiZhong.snippet` |
| 76 | PDF Converter Swift | `com.pdf.converter.editor.jpgtopdf.maker` | `pdf.converter.pro.lifetime` | pdf.converter.pro.lifetime | 1.0.54 | `PDFConverterSwift.js` + `PDFConverterSwift.snippet` |
| 77 | Tidur Timers | `net.voidstern.multitimer` | `net.voidstern.multitimer.yearly` | Pro | 5.5.5 | `TidurTimers.js` + `TidurTimers.snippet` |
| 78 | Thiro | `io.github.ctlvie.atelerix` | `atelerix_pro_lifetime` | pro | 1.3.12 | `Thiro.js` + `Thiro.snippet` |
| 79 | PROVPN | `com.adpsafe.provpnwebshield` | `com.provpn.year` | pro | 2.0.1 | `ProVPN.js` + `ProVPN.snippet` |
| 80 | RunKit | `com.qeezon.RunKit` | `runkit_19.99_1y` | Premium | 1.24 | `RunKit.js` + `RunKit.snippet` |
| 81 | Fiery Feeds | `net.voidstern.fiery-feeds` | `net.voidstern.fieryfeeds.yearly.trial` | com.fieryfeeds.pro | 2.12.5 | `FieryFeeds.js` + `FieryFeeds.snippet` |
| 82 | Focused iOS | `net.voidstern.focused` | `net.voidstern.focused.yearly.trial` | Pro | 1.9.2 | `FocusediOS.js` + `FocusediOS.snippet` |
| 83 | Any IPTV Player | `com.anyiptvplayer.cihan` | `lifetimepremium` | premium | 6.9.7 | `AnyIPTVPlayer.js` + `AnyIPTVPlayer.snippet` |
| 84 | WordBoard | `net.bytesize.wordboard` | `net.bytesize.wordboard.iap.pro` | pro | 6.5.1 | `WordBoard.js` + `WordBoard.snippet` |
| 85 | HabitDone | `com.dison.HabitDone` | `Lifetime` | pro | 3.1.2 | `HabitDone.js` + `HabitDone.snippet` |
| 86 | Hydro Coach | `com.codium.hydrocoach` | `hc_pro_lifetime` | pro | 1.0.10 | `HydroCoach.js` + `HydroCoach.snippet` |
| 87 | Planny | `com.kevinreutter.Artemis` | `com.kevinreutter.Artemis.PremiumLifetime` | Premium | 10.0.17 | `Planny.js` + `Planny.snippet` |
| 88 | 言外笔记 | `io.innerpeace.yiye` | `io.innerpeace.yiye.lifetime.forYearly` | Lifetime、Premium | 2.18.7 | `yanwaibiji.js` + `YanWaiBiJi.snippet` |
| 89 | Persona | `com.tickettothemoon.video.persona` | `com.tickettothemoon.video.persona.vip.inab3.one.time.195` | unlimited | 1.11.22 | `Persona.js` + `Persona.snippet` |
| 90 | Foca | `com.foca-2020.foca` | `lifetime_purchase_macOS_1.0` | Pro | 1.3.0 | `Foca.js` + `Foca.snippet` |
| 91 | AIChat | `com.talgat.AIChat` | `com.talgat.AIChat.year` | FullAccess | 1.92 | `AIChat.js` + `AIChat.snippet` |
| 92 | vpn | `us.ultrasurf.vpn` | `ultrasurf_yearly` | pro | 2.2 | `Vpn.js` + `Vpn.snippet` |
| 93 | AMood | `HengYi.AMood` | `1001` | pro | 2.9.8 | `AMood.js` + `AMood.snippet` |
| 94 | Kylin | `lan.kylin` | `pro_life` | pro | 1.27.5 | `Kylin.js` + `Kylin.snippet` |
| 95 | OneBox | `（无，按 UA 匹配）` | `com.ziheng.pandora.lifetime` | all | 2.2.1 | `OneBox.js` + `OneBox.snippet` |
| 96 | Echo | `com.LEMO.LemoFM` | `com.LEMO.LemoFm.plus.lifetime.11` | Lifetime、PLUS | 1.11.1 | `Echo.js` + `Echo.snippet` |
| 97 | Aphrodite | `com.ziheng.aphrodite` | `com.ziheng.aphrodite.lifetime` | all | 2.0.7 | `Aphrodite.js` + `Aphrodite.snippet` |
| 98 | ArchiveList | `com.jy.ArchiveBox` | `com.jy.ArchiveBox.pro_1` | pro_life | 2.6.1 | `ArchiveList.js` + `ArchiveList.snippet` |
| 99 | 人生清单 | `com.metaorder.LifeList` | `com.metaorder.lifelist.premium` | premium、pro | 2.2.3 | `renshengqingdan.js` + `RenShengQingDan.snippet` |
| 100 | XCam | `com.miiiao.XCam` | `com.miiiao.xcam.lifetime` | pro | 1.40 | `XCam.js` + `XCam.snippet` |
| 101 | CountDuck | `co.countduck.app` | `Lifetime` | premium | 3.0.1 | `CountDuck.js` + `CountDuck.snippet` |
| 102 | MySticker | `com.miiiao.MySticker` | `com.miiiao.MySticker.lifetime` | mysticker premium | 3.4 | `MySticker.js` + `MySticker.snippet` |
| 103 | 画历 | `com.bapaws.calendar` | `com.bapaws.calendar.lifetime` | pro | 1.7.8 | `huali.js` + `HuaLi.snippet` |
| 104 | iHabit | `com.gostraight.iHabit` | `ihabit_forever_payment_vip` | ihabit_lTime_subscription、ihabit_subscription_pro | 1.0.25 | `iHabit.js` + `iHabit.snippet` |
| 105 | 溪流 | `com.donewin.brainwaves` | `rive_premium_lifetime` | rive_premium | 2.0.1 | `xiliu.js` + `XiLiu.snippet` |
| 106 | 记一杯 | `me.xgmm.markacup` | `202403180021` | premiun | 1.5.4 | `jiyibei.js` + `JiYiBei.snippet` |
| 107 | Inread | `Swipe-and-tap.inRead` | `inRead.premium.monthly` | premium_access | 1.4 | `Inread.js` + `Inread.snippet` |
| 108 | Yosum | `terrykuo.co.yosum` | `terrykuo.co.yosum.premiummembership` | Premium | 2.5.5 | `Yosum.js` + `Yosum.snippet` |
| 109 | DHWaterMarkManager | `（无，按 UA 匹配）` | `lifetimeVIP_001` | vip | 1.2.2 | `DHWaterMarkManager.js` + `DHWaterMarkManager.snippet` |
| 110 | ZenTime | `com.c2.applock.cloak` | `com.c2.applock.cloak.lifetime` | Pro | 1.1.5 | `ZenTime.js` + `ZenTime.snippet` |
| 111 | 快制图表 | `com.yong.quickChart` | `qgnjs_lifetime` | unlock all | 3.35.0 | `kuaizhitubiao.js` + `KuaiZhiTuBiao.snippet` |
| 112 | 语音合成助手 | `social.steet.TextToSpeech` | `tts_1m` | premium | 3.9.1 | `yuyinhechengzhushou.js` + `YuYinHeChengZhuShou.snippet` |
| 113 | Record2Text | `skylar.app.Record2Text` | `afi.recnote.pro` | afi.recnote.pro | 8.5 | `Record2Text.js` + `Record2Text.snippet` |
| 114 | pokenote | `com.migao.pokenote` | `pokenote_pro` | pro | 2.0.2 | `Pokenote.js` + `Pokenote.snippet` |
| 115 | Watchly | `com.appexosolutions.watchface` | `watchface.lifetime` | lifetime | 2.3.5 | `Watchly.js` + `Watchly.snippet` |
| 116 | 滴答时钟 | `com.do.flipclock` | `lifetime_1` | lifetime_1 | 2.0.9 | `didashizhong.js` + `DiDaShiZhong.snippet` |
| 117 | 时间记录 | `com.bapaws.Hours` | `com.bapaws.Hours.lifetime` | pro | 1.8.6 | `shijianjilu.js` + `ShiJianJiLu.snippet` |
| 118 | EventLine | `xyz.jiaolong.app.EventLine` | `xyz.jiaolong.eventline.pro.lifetime` | pro | 1.15.0 | `EventLine.js` + `EventLine.snippet` |

合计：118 个 App，236 个文件。
