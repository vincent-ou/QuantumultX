# 全库 App 总索引

生成时间：2026-11-19。共 **2042 行**（一个 App 一行；同一 App 在多个文件夹出现时各占一行）。

## 各文件夹行数

| 文件夹 | 行数 | 说明 |
| --- | --- | --- |
| root | 21 | 根目录 standalone 脚本（21 个） |
| Reheji | 508 | Reheji/（RevenueCat 合集，508 对） |
| Collections | 232 | Collections/（chxm1023 单个 App 合集，232 行；227 个 .js，12 条共享脚本） |
| XiaoMao | 431 | XiaoMao/（小帽 boxJS，431 行；434 对减 3 个已删除） |
| WeiGiegie | 268 | WeiGiegie/（WeiGiegie 666，268 行；274 对减 5 个已删除、1 个已移至根目录） |
| 89996462 | 464 | 89996462/（89996462 ycdz/gx，464 对） |
| Afengye | 118 | Afengye/（afengye crack.js，118 对） |

## 怎么查

- 在页面里搜索 App 名（中文名或英文名都能搜）；搜到就说明有对应脚本，位置列就是文件路径。
- 同一 App 可能在多个文件夹出现，各占一行（比如 ArchiveList 在 Reheji/ 和 Afengye/ 都有，言外笔记、易截图 2 也是），可以都看一下，挑适配版本较新的那个。
- “适配版本”是原脚本注明的版本，很多是 2022–2024 年的老版本，不代表当前 App Store 版本；新版 App 可能改了接口或加了 SSL pinning，脚本未必还生效。
- 解锁类型：RevenueCat（订阅平台伪造）、iTunes 收据（苹果收据伪造）、App 专属（该 App 自己的接口改写）、其他（Adapty / Apphud / Qonversion 等订阅平台）。

## 说明

- 已删除的 8 对不在本表里：XiaoMao/ 的 SCV、解炮、美日新闻图片；WeiGiegie/ 的魅.舞直播、嘿嘿漫画、姬漫社、漫画大全、绅士（2026-11-19 用户确认删除）。
- APTV 不在本表里：它在 Reheji 清单里有名字，但是禁用 App，没有生成脚本。
- 谜底时钟有两行：`Reheji/midishizhong.js`（按 bundle ID 匹配）和 `Reheji/midishizhong2.js`（按 URL 编码 UA 匹配），同一 App 两个脚本。
- 本表只列有脚本的 App；批量提取的脚本只做了 Node 模拟测试，没有逐个真机验证过。

## 全表（按 App 名拼音 / 字母排序）

| App | 原作者 | 适配版本 | 位置 | 解锁类型 |
| --- | --- | --- | --- | --- |
| 13个APP解锁全家桶 | chxm1023 | 未注明 | `Collections/13geappjiesuoquanjiatong.js` | App 专属 |
| 17个APP合集 | chxm1023 | 未注明 | `Collections/17geappheji.js` | App 专属 |
| 1Blocker | afengye | 5.8 | `Afengye/1Blocker.js` | RevenueCat |
| 1Blocker | chxm1023 | 未注明 | `Reheji/1Blocker.js` | RevenueCat（终身） |
| 1blocker | 89996462 | 5.2.5 | `89996462/1Blocker.js` | RevenueCat |
| 1LemonKeepAccounts | ddgksf2013 | 未注明 | `Reheji/1LemonKeepAccounts.js` | RevenueCat（年付） |
| 223网校 | 89996462 | 3.7.1 | `89996462/223wangxiao.js` | App 专属 |
| 360相机 | chxm1023 | 未注明 | `Collections/360xiangji.js` | App 专属 |
| 3DMeditation | 小帽 | 未注明 | `XiaoMao/3DMeditation.js` | RevenueCat |
| 666书友会 | WeiGiegie | 3.4.0 | `WeiGiegie/666shuyouhui.js` | App 专属 |
| 6open | 89996462 | 2.4 | `89996462/6Open.js` | App 专属 |
| 7动 | 89996462 | 4.7.8 | `89996462/7dong.js` | App 专属 |
| 7分钟HIT运动 | 89996462 | 9.17.6 | `89996462/seven.js` | App 专属 |
| 7MinuteWorkout | 小帽 | 未注明 | `XiaoMao/7MinuteWorkout.js` | RevenueCat |
| AAnybox | 89996462 | 1.11.1 | `89996462/AAnybox.js` | RevenueCat |
| AAVOD | 89996462 | 1.4.6 | `89996462/AAVOD.js` | iTunes 收据 |
| 阿布睡前故事 | 89996462 | 1.2.9 | `89996462/abushuiqiangushi.js` | App 专属 |
| Accountit | afengye | 2.4.4 | `Afengye/Accountit.js` | RevenueCat |
| Accountit | chxm1023 | 未注明 | `Reheji/Accountit.js` | RevenueCat（终身） |
| AccuFind | chxm1023 | 未注明 | `Reheji/AccuFind.js` | RevenueCat（终身） |
| Acfun | WeiGiegie | 未注明 | `WeiGiegie/Acfun.js` | App 专属 |
| Adapt Standard | 小帽 | 未注明 | `XiaoMao/Adapt.js` | RevenueCat |
| AdBlockPro | 小帽 | 未注明 | `XiaoMao/AdBlockPro.js` | RevenueCat |
| adbTools | chxm1023 | 未注明 | `Reheji/AdbTools.js` | RevenueCat（终身） |
| AdGuard-Safari浏览器扩展 | chxm1023 | 未注明 | `Collections/AdGuard.js` | App 专属 |
| Aesthetics | 小帽 | 未注明 | `XiaoMao/Aesthetics.js` | RevenueCat |
| Agenda-当笔记遇见日历 | chxm1023 | 未注明 | `Collections/Agenda.js` | App 专属 |
| AI Art Generator | ddgksf2013 | 未注明 | `Reheji/AIArtGenerator.js` | RevenueCat（年付） |
| AiBot | 小帽 | 未注明 | `XiaoMao/AiBot.js` | RevenueCat |
| AIChat | afengye | 1.92 | `Afengye/AIChat.js` | RevenueCat |
| AIChat | chxm1023 | 未注明 | `Reheji/AIChat.js` | RevenueCat（年付） |
| AIChat | chxm1023 | 未注明 | `Reheji/AIChat2.js` | RevenueCat（年付） |
| AiFitnessCoach | 小帽 | 未注明 | `XiaoMao/AiFitnessCoach.js` | RevenueCat |
| AI Grammar | chxm1023 | 未注明 | `Reheji/AIGrammar.js` | RevenueCat（终身） |
| AI换脸秀 | 89996462 | 1.1.1 | `89996462/aihuanlianxiu.js` | App 专属 |
| AI绘画 | 89996462 | 1.42 | `89996462/aihuihua.js` | App 专属 |
| 爱剪辑 | 89996462 | 2.8.0 | `89996462/aijianji.js` | App 专属 |
| 爱剪辑 | chxm1023 | 未注明 | `Collections/aijianji.js` | App 专属 |
| AIKeyboard键盘 | chxm1023 | 未注明 | `Reheji/aikeyboardjianpan.js` | RevenueCat（年付） |
| Aimly | 小帽 | 未注明 | `XiaoMao/Aimly.js` | RevenueCat |
| Airdroid Cast-无线投屏助手 | chxm1023 | 未注明 | `Collections/AirdroidCast.js` | App 专属 |
| AirEarbuds | 小帽 | 未注明 | `XiaoMao/AirEarbuds.js` | RevenueCat |
| Airmail | chxm1023 | 未注明 | `Reheji/Airmail.js` | RevenueCat（年付） |
| AI设计师 | 89996462 | 1.0.1 | `89996462/aishejishi.js` | App 专属 |
| AiSpeech | 小帽 | 未注明 | `XiaoMao/AiSpeech.js` | RevenueCat |
| AiStampIdentifier | 小帽 | 未注明 | `XiaoMao/AiStampIdentifier.js` | RevenueCat |
| Aisten | chxm1023 | 未注明 | `Reheji/Aisten.js` | RevenueCat（终身） |
| 爱题词 | 89996462 | 1.2.1 | `89996462/aitici.js` | App 专属 |
| 爱听收音机 | WeiGiegie | 2.3 | `WeiGiegie/aitingshouyinji.js` | App 专属 |
| AI头像馆 | 89996462 | 1.0.2 | `89996462/aitouxiangguan.js` | iTunes 收据 |
| AITranslator | chxm1023 | 未注明 | `Reheji/AITranslator.js` | RevenueCat（年付） |
| AItText | chxm1023 | 未注明 | `Reheji/AItText.js` | RevenueCat（终身） |
| 爱涂绘画 | chxm1023 | 未注明 | `Collections/aituhuihua.js` | App 专属 |
| 爱证件 | 89996462 | 1.2.9 | `89996462/aizhengjian.js` | App 专属 |
| 爱主题 | 89996462 | 1.6.9 | `89996462/aizhuti.js` | App 专属 |
| Alarmy | 小帽 | 未注明 | `XiaoMao/Alarmy.js` | App 专属 |
| alcohol.tracker | ddgksf2013 | 未注明 | `Reheji/AlcoholTracker.js` | RevenueCat（终身） |
| AlfredCamera | 小帽 | 未注明 | `XiaoMao/AlfredCamera.js` | RevenueCat |
| alistTools | chxm1023 | 未注明 | `Reheji/AlistTools.js` | RevenueCat（终身） |
| 阿里云盘 | 小帽 | 未注明 | `XiaoMao/aliyunpan.js` | App 专属 |
| 阿里云盘签到 | 小帽 | 未注明 | `XiaoMao/aliyunpanqiandao.js` | App 专属 |
| AllAreaMeasurement | 小帽 | 未注明 | `XiaoMao/AllAreaMeasurement.js` | RevenueCat |
| Alpenglow | chxm1023 | 未注明 | `Reheji/Alpenglow.js` | RevenueCat（其他） |
| Amemei 游戏列表 | 小帽 | 未注明 | `XiaoMao/AmemeiGame.js` | App 专属 |
| AmiiboGuide | 小帽 | 未注明 | `XiaoMao/AmiiboGuide.js` | RevenueCat |
| AMood | afengye | 2.9.8 | `Afengye/AMood.js` | RevenueCat |
| AnimeCalendar | 小帽 | 未注明 | `XiaoMao/AnimeCalendar.js` | RevenueCat |
| Anime Waifu | chxm1023 | 未注明 | `Reheji/AnimeWaifu.js` | RevenueCat（终身） |
| 暗记 | WeiGiegie | 11.2.1 | `WeiGiegie/anji.js` | App 专属 |
| AnkiPro | chxm1023 | 未注明 | `Reheji/AnkiPro.js` | RevenueCat（终身） |
| 安心记加班 | 89996462 | 5.1.00 | `89996462/anxinjijiaban.js` | App 专属 |
| 安心天气 | 89996462 | 1.1.1 | `89996462/anxintianqi.js` | App 专属 |
| Anybox | chxm1023 | 未注明 | `Reheji/Anybox.js` | RevenueCat（年付） |
| Any IPTV Player | afengye | 6.9.7 | `Afengye/AnyIPTVPlayer.js` | RevenueCat |
| 傲软抠图 | 89996462 | 1.6.0 | `89996462/aoruankoutu.js` | App 专属 |
| 傲软抠图 | chxm1023 | 未注明 | `Collections/aoruankoutu.js` | App 专属 |
| 傲软PDF编辑 | 89996462 | 1.2.5 | `89996462/aoruanpdfbianji.js` | App 专属 |
| 傲软PDF编辑 | chxm1023 | 未注明 | `Collections/aoruanpdfbianji.js` | App 专属 |
| 傲软PDF转换 | chxm1023 | 未注明 | `Collections/aoruanpdfzhuanhuan.js` | App 专属 |
| 傲软扫描 | chxm1023 | 未注明 | `Collections/aoruansaomiao.js` | App 专属 |
| 傲软投屏 | chxm1023 | 未注明 | `Collections/aoruantouping.js` | App 专属 |
| Aphrodite | afengye | 2.0.7 | `Afengye/Aphrodite.js` | RevenueCat |
| Aphrodite | chxm1023 | 未注明 | `Reheji/Aphrodite.js` | RevenueCat（终身） |
| Apollo | chxm1023 | 未注明 | `Reheji/Apollo.js` | RevenueCat（终身） |
| AppBlocker | 小帽 | 未注明 | `XiaoMao/AppBlocker.js` | RevenueCat |
| Apple Developer | 小帽 | 未注明 | `XiaoMao/AppleDeveloper.js` | App 专属 |
| Apple 更新验证 | 小帽 | 未注明 | `XiaoMao/AppleUpdateVerification.js` | App 专属 |
| AppRaven | XiaoMao | 未注明 | `AppRaven.js` | App 专属 |
| Appspree | chxm1023 | 未注明 | `Reheji/Appspree.js` | RevenueCat（终身） |
| ArchiveList | afengye | 2.6.1 | `Afengye/ArchiveList.js` | RevenueCat |
| ArchiveList | chxm1023 | 未注明 | `Reheji/ArchiveList.js` | RevenueCat（终身） |
| Arte | 89996462 | 13.3 | `89996462/Arte.js` | RevenueCat |
| ARTGO 个性水印 | chxm1023 | 未注明 | `Collections/ARTGO.js` | App 专属 |
| Artist.AI | chxm1023 | 未注明 | `Reheji/ArtistAI.js` | RevenueCat（终身） |
| ArtStage | chxm1023 | 未注明 | `Reheji/ArtStage.js` | RevenueCat（年付） |
| Art Widget | chxm1023 | 未注明 | `Collections/ArtWidget.js` | App 专属 |
| ArtWidgets | 89996462 | 1.2.8 | `89996462/artwidgets.js` | App 专属 |
| ASKAI | chxm1023 | 未注明 | `Reheji/ASKAI.js` | RevenueCat（终身） |
| Assembly | afengye | 2.4.7 | `Afengye/Assembly.js` | RevenueCat |
| Assembly | chxm1023 | 未注明 | `Reheji/Assembly.js` | RevenueCat（年付） |
| aTimeloggerPro | chxm1023 | 未注明 | `Reheji/ATimeloggerPro.js` | RevenueCat（终身） |
| Atomic | chxm1023 | 未注明 | `Reheji/Atomic.js` | RevenueCat（终身） |
| AudioConverter | 小帽 | 未注明 | `XiaoMao/AudioConverter.js` | RevenueCat |
| AudioExtractor | 小帽 | 未注明 | `XiaoMao/AudioExtractor.js` | RevenueCat |
| AudioMack | chxm1023 | 未注明 | `Reheji/AudioMack.js` | RevenueCat（年付） |
| AudioPlayer | ddgksf2013 | 未注明 | `Reheji/AudioPlayer.js` | RevenueCat（年付） |
| Auditman | 小帽 | 未注明 | `XiaoMao/Auditman.js` | RevenueCat |
| Aula | ddgksf2013 | 未注明 | `Reheji/Aula.js` | RevenueCat（年付） |
| AuroraForecast | 小帽 | 未注明 | `XiaoMao/AuroraForecast.js` | RevenueCat |
| Authenticator | chxm1023 | 未注明 | `Reheji/Authenticator.js` | RevenueCat（年付） |
| Awake | chxm1023 | 未注明 | `Reheji/Awake.js` | RevenueCat（终身） |
| Awesome Habits | ddgksf2013 | 未注明 | `Reheji/AwesomeHabits.js` | RevenueCat（年付） |
| B612咔叽 | WeiGiegie | 13.2.5 | `WeiGiegie/b612kaji.js` | App 专属 |
| B612咔叽 | 小帽 | 未注明 | `XiaoMao/B612KaJi.js` | App 专属 |
| B612相机 | chxm1023 | 未注明 | `Collections/B612xiangji.js` | App 专属 |
| 百度贴吧 | 小帽 | 未注明 | `XiaoMao/baidutieba.js` | App 专属 |
| 百度网盘 | chxm1023 | 未注明 | `Collections/baiduwangpan.js` | App 专属 |
| 百度网盘 | WeiGiegie | 13.10.5 | `WeiGiegie/baiduwangpan.js` | App 专属 |
| 百度文库☆ | 89996462 | 8.1.01 | `89996462/baiduwenku.js` | App 专属 |
| 白马剧场 | 89996462 | 1.0.1 | `89996462/baimajuchang.js` | App 专属 |
| 白马剧场 | WeiGiegie | 1.0.2 | `WeiGiegie/baimajuchang.js` | App 专属 |
| 白猫扫描 | 89996462 | 1.5.8 | `89996462/baimaosaomiao.js` | RevenueCat |
| 白描 | chxm1023 | 未注明 | `Collections/baimiao.js` | App 专属 |
| 白描 | chxm1023 | 未注明 | `baimiao.js` | App 专属 |
| 白云天气 | chxm1023 | 未注明 | `Reheji/baiyuntianqi.js` | RevenueCat（年付） |
| 百转格 | 89996462 | 2.1.2 | `89996462/baizhuange.js` | App 专属 |
| 百转格 | 89996462 | 2.1.2 | `89996462/baizhuange2.js` | App 专属 |
| 巴黎奥运会 | 小帽 | 未注明 | `XiaoMao/baliaoyunhui.js` | App 专属 |
| 斑马海报 | 89996462 | 1.2.0 | `89996462/banmahaibao.js` | App 专属 |
| 伴学课堂 | WeiGiegie | 1.4.4 | `WeiGiegie/banxueketang.js` | App 专属 |
| 宝宝早教社 | WeiGiegie | 2.0.4 | `WeiGiegie/baobaozaojiaoshe.js` | App 专属 |
| 薄荷壁纸 | 89996462 | 1.17.11 | `89996462/BoHeBiZhi.js` | App 专属 |
| 薄荷壁纸 | chxm1023 | 未注明 | `Collections/bohebizhi.js` | App 专属 |
| 薄荷健康 | chxm1023 | 未注明 | `Collections/bohejiankang.js` | App 专属 |
| 宝维助手 | 89996462 | 1.0.3 | `89996462/baoweizhushou.js` | App 专属 |
| 暴走P图 | chxm1023 | 未注明 | `Collections/baozouptu.js` | App 专属 |
| Barometer | 小帽 | 未注明 | `XiaoMao/Barometer.js` | RevenueCat |
| 八字排版助手 | 89996462 | 1.2.7 | `89996462/bazipaibanzhushou.js` | App 专属 |
| Beast | 小帽 | 未注明 | `XiaoMao/Beast.js` | RevenueCat |
| BeatPulse | 89996462 | 1.0.1 | `89996462/BeatPulse.js` | iTunes 收据 |
| 贝乐虎全家桶 | 89996462 | 5.2.9 | `89996462/beilehuquanjiatong.js` | App 专属 |
| Bend | ddgksf2013 | 未注明 | `Reheji/Bend.js` | RevenueCat（年付） |
| Bend2 | afengye | 6.1.3 | `Afengye/Bend2.js` | RevenueCat |
| Bg Remover+ | chxm1023 | 未注明 | `Reheji/BgRemover.js` | RevenueCat（年付） |
| BH Pro | 小帽 | 未注明 | `XiaoMao/BHPro.js` | App 专属 |
| 边框水印大师 | 89996462 | 1.6.7 | `89996462/biankuangshuiyindashi.js` | App 专属 |
| 变美相机 | 89996462 | 1.0.2 | `89996462/bianmeixiangji.js` | App 专属 |
| 变声器 | WeiGiegie | 1.1.2 | `WeiGiegie/bianshengqi.js` | App 专属 |
| 变声器 | WeiGiegie | 1.1.7 | `WeiGiegie/bianshengqi2.js` | App 专属 |
| 表现日记 | 小帽 | 未注明 | `XiaoMao/biaoxianriji.js` | RevenueCat |
| 标志照片Pro | 小帽 | 未注明 | `XiaoMao/biaozhiphoto.js` | RevenueCat |
| 哔哩哔哩 | 89996462 | 7.41.0 | `89996462/bilibili.js` | App 专属 |
| 哔哩哔哩大会员 | WeiGiegie | 8.22.0 | `WeiGiegie/bilibilidahuiyuan.js` | App 专属 |
| BillShare | 小帽 | 未注明 | `XiaoMao/BillShare.js` | RevenueCat |
| BillsToBudget | 小帽 | 未注明 | `XiaoMao/BillsToBudget.js` | RevenueCat |
| 必美相机 | 89996462 | 2.2 | `89996462/bimeixiangji.js` | App 专属 |
| Binsoo | chxm1023 | 未注明 | `Reheji/Binsoo.js` | RevenueCat（年付） |
| Binsoo | chxm1023 | 未注明 | `Reheji/Binsoo2.js` | RevenueCat（年付） |
| 笔趣阁 | 89996462 | 1.0.3 | `89996462/biquge.js` | App 专属 |
| Birthdays | 小帽 | 未注明 | `XiaoMao/Birthdays.js` | RevenueCat |
| 壁纸引擎 | 89996462 | 1.0.2 | `89996462/bizhiyinqing.js` | iTunes 收据 |
| BlackBox | ddgksf2013 | 未注明 | `Reheji/BlackBox.js` | RevenueCat（终身） |
| Blackout | ddgksf2013 | 未注明 | `Reheji/Blackout.js` | RevenueCat（年付） |
| Blank | 小帽 | 未注明 | `XiaoMao/Blank.js` | RevenueCat |
| BloodPressure | 小帽 | 未注明 | `XiaoMao/BloodPressure.js` | 其他（Adapty） |
| bluredit | chxm1023 | 未注明 | `Reheji/Bluredit.js` | RevenueCat（年付） |
| Blurer | ddgksf2013 | 未注明 | `Reheji/Blurer.js` | RevenueCat（年付） |
| 波点音乐 | chxm1023 | 未注明 | `Collections/bodianyinyue.js` | App 专属 |
| 波点音乐 | WeiGiegie | 5.2.5 | `WeiGiegie/bodianyinyue.js` | App 专属 |
| BodyFilter | chxm1023 | 未注明 | `Reheji/BodyFilter.js` | RevenueCat（终身） |
| Boom | chxm1023 | 未注明 | `Collections/Boom.js` | App 专属 |
| BORD | chxm1023 | 未注明 | `Reheji/BORD.js` | RevenueCat（终身） |
| 博商小麦 | 89996462 | 1.4.1 | `89996462/boshangxiaomai.js` | App 专属 |
| 博树 Busuu | 89996462 | 27.36.0 | `89996462/Busuu.js` | App 专属 |
| BossAI | 小帽 | 未注明 | `XiaoMao/BossAI.js` | RevenueCat |
| Bowlingmate | 小帽 | 未注明 | `XiaoMao/Bowlingmate.js` | RevenueCat |
| BoxingTimer | 小帽 | 未注明 | `XiaoMao/BoxingTimer.js` | RevenueCat |
| BoyMath | 小帽 | 未注明 | `XiaoMao/BoyMath.js` | RevenueCat |
| Brass | chxm1023 | 未注明 | `Reheji/Brass.js` | RevenueCat（年付） |
| BrideKit | 小帽 | 未注明 | `XiaoMao/BrideKit.js` | RevenueCat |
| Brink | 小帽 | 未注明 | `XiaoMao/Brink.js` | RevenueCat |
| BroomCleaner | 小帽 | 未注明 | `XiaoMao/BroomCleaner.js` | RevenueCat |
| Brovacy | chxm1023 | 未注明 | `Reheji/Brovacy.js` | RevenueCat（终身） |
| BRUSH | afengye | 2.1 | `Afengye/Brush.js` | RevenueCat |
| Budget Flow | ddgksf2013 | 未注明 | `Reheji/BudgetFlow.js` | RevenueCat（年付） |
| Budgetify | ddgksf2013 | 未注明 | `Reheji/Budgetify.js` | RevenueCat（年付） |
| 布丁锁屏 | 89996462 | 2.5.9 | `89996462/budingsuoping.js` | App 专属 |
| 布丁锁屏 | chxm1023 | 未注明 | `Collections/budingsuoping.js` | App 专属 |
| 不挂科 | 510004015 | 未注明 | `buguake.js` | App 专属 |
| 不咕剪辑 | 89996462 | 2.1.401 | `89996462/bugujianji.js` | iTunes 收据 |
| 布咕阅读 | WeiGiegie | 2.6.6 | `WeiGiegie/buguyuedu.js` | App 专属 |
| Buoywatch | 小帽 | 未注明 | `XiaoMao/Buoywatch.js` | RevenueCat |
| 不折叠输入法 | 89996462 | 2.5.5 | `89996462/buzhedieshurufa.js` | App 专属 |
| ByePhotos | chxm1023 | 未注明 | `Reheji/ByePhotos.js` | RevenueCat（其他） |
| ByePhotos | 小帽 | 未注明 | `XiaoMao/ByePhotos.js` | RevenueCat |
| CAD快速看图 | 89996462 | 3.0 | `89996462/cadkuaisukantu.js` | App 专属 |
| 彩豆视频水印宝 | WeiGiegie | 1.1.1 | `WeiGiegie/caidoushipinshuiyinbao.js` | App 专属 |
| 菜谱大全 | chxm1023 | 未注明 | `Collections/caipudaquan.js` | App 专属 |
| 才士题库 | 89996462 | 3.0.100 | `89996462/caishitiku.js` | App 专属 |
| 财新周刊 | ddgksf2013 | 未注明 | `caixinzhoukan.js` | App 专属 |
| 彩云天气 | 89996462 | 7.16.1 | `89996462/caiyuntianqi.js` | App 专属 |
| 彩云天气 | wf021325 | 7.22.0 | `caiyun.js` | App 专属 |
| 彩云天气-广告净化 | chxm1023 | 未注明 | `Collections/caiyuntianqi.js` | App 专属 |
| 彩云天气-SVIP地图-48小时预报 | chxm1023 | 未注明 | `Collections/caiyuntianqi.js` | App 专属 |
| 彩云天气-VIP信息 | chxm1023 | 未注明 | `Collections/caiyuntianqi.js` | App 专属 |
| Cake | WeiGiegie | 未注明 | `WeiGiegie/Cake.js` | App 专属 |
| Calendars 日历 | chxm1023 | 未注明 | `Collections/Calendars.js` | App 专属 |
| Calflow | afengye | 1.7.6 | `Afengye/Calflow.js` | RevenueCat |
| Calflow | chxm1023 | 未注明 | `Reheji/Calflow.js` | RevenueCat（终身） |
| CallAnnie | chxm1023 | 未注明 | `Reheji/CallAnnie.js` | RevenueCat（年付） |
| CalmBabySleep | 小帽 | 未注明 | `XiaoMao/CalmBabySleep.js` | RevenueCat |
| Calorimeter | 小帽 | 未注明 | `XiaoMao/Calorimeter.js` | RevenueCat |
| !Camera相机 | chxm1023 | 未注明 | `Reheji/cameraxiangji.js` | RevenueCat（年付） |
| 草莓短剧 | 89996462 | 1.0 | `89996462/caomeiduanju.js` | App 专属 |
| CapCap | afengye | 1.5.5 | `Afengye/CapCap.js` | RevenueCat |
| CapWords | chxm1023 | 未注明 | `Reheji/CapWords.js` | RevenueCat（年付） |
| CapyMood | 小帽 | 1.1.1.2 | `XiaoMao/CapyMood.js` | iTunes 收据 |
| CapyMood轻松水豚 | 89996462 | 1.1.2 | `89996462/CapyMood.js` | iTunes 收据 |
| CarAI | 小帽 | 未注明 | `XiaoMao/CarAI.js` | RevenueCat |
| CarbCounter | 小帽 | 未注明 | `XiaoMao/CarbCounter.js` | RevenueCat |
| Carbon | afengye | 14.2 | `Afengye/Carbon.js` | RevenueCat |
| Carbon | chxm1023 | 未注明 | `Reheji/Carbon.js` | RevenueCat（终身） |
| CarDashboard | 小帽 | 1 | `XiaoMao/CarDashboard.js` | iTunes 收据 |
| CareServer | chxm1023 | 未注明 | `Reheji/CareServer.js` | RevenueCat（年付） |
| CARROT Weather | 89996462 | 5.8.2 | `89996462/CARROTWeather.js` | App 专属 |
| CatVPN节点提取 | WeiGiegie | 1.4 | `WeiGiegie/catvpnjiediantiqu.js` | App 专属 |
| 测量计数扫描宝 | WeiGiegie | 1.0.7 | `WeiGiegie/celiangjishusaomiaobao.js` | App 专属 |
| CEO周课 | 89996462 | 1.7.2 | `89996462/ceozhouke.js` | App 专属 |
| 测速管家 | chxm1023 | 未注明 | `Collections/cesuguanjia.js` | App 专属 |
| 畅玩空间 | chxm1023 | 未注明 | `Collections/changwankongjian.js` | App 专属 |
| 超级简历 | 89996462 | 3.3.6 | `89996462/chaojijianli.js` | App 专属 |
| 朝暮 | 89996462 | 1.1.2 | `89996462/chaomu.js` | RevenueCat |
| 朝暮计划 | 89996462 | 1.7.7 | `89996462/chaomujihua.js` | App 专属 |
| 潮自拍 | WeiGiegie | 4.1.45 | `WeiGiegie/chaozipai.js` | App 专属 |
| ChatAI | chxm1023 | 未注明 | `Reheji/ChatAI.js` | RevenueCat（年付） |
| ChatBot | chxm1023 | 未注明 | `Reheji/ChatBot.js` | RevenueCat（年付） |
| ChatGPT | afengye | 1.2.6 | `Afengye/ChatGPT.js` | RevenueCat |
| Chat练口语 | chxm1023 | 未注明 | `Reheji/chatliankouyu.js` | RevenueCat（终身） |
| ChatMe | chxm1023 | 未注明 | `Reheji/ChatMe.js` | RevenueCat（年付） |
| ChatPDF | chxm1023 | 未注明 | `Reheji/ChatPDF.js` | RevenueCat（终身） |
| ChatPub | chxm1023 | 未注明 | `Reheji/ChatPub.js` | RevenueCat（年付） |
| Chatty.AI | chxm1023 | 未注明 | `Reheji/ChattyAI.js` | RevenueCat（年付） |
| 查妆妆 | 89996462 | 1.4.0 | `89996462/chazhuangzhuang.js` | RevenueCat |
| 查妆妆 | ddgksf2013 | 未注明 | `Reheji/chazhuangzhuang.js` | RevenueCat（年付） |
| Cheatsheet | afengye | 5.0.2 | `Afengye/Cheatsheet.js` | RevenueCat |
| CheckCalendar | afengye | 12.29.0 | `Afengye/CheckCalendar.js` | RevenueCat |
| CheckList | 小帽 | 未注明 | `XiaoMao/CheckList.js` | RevenueCat |
| Chengyu Calendar | chxm1023 | 未注明 | `Reheji/ChengyuCalendar.js` | RevenueCat（年付） |
| 沉浸式打码 | 小帽 | 44 | `XiaoMao/chenjinshidama.js` | iTunes 收据 |
| 车牌影片搜索 | 小帽 | 未注明 | `XiaoMao/chepaiyingpian.js` | App 专属 |
| 车票票 | chxm1023 | 未注明 | `Reheji/chepiaopiao.js` | RevenueCat（终身） |
| Chic | 89996462 | 1.4.00 | `89996462/Chic.js` | App 专属 |
| 虫虫吉他 | 89996462 | 2.3.2 | `89996462/chongchongjita.js` | App 专属 |
| 充电助手 | chxm1023 | 未注明 | `Collections/chongdianzhushou.js` | App 专属 |
| Chronicling | ddgksf2013 | 未注明 | `Reheji/Chronicling.js` | RevenueCat（年付） |
| CircleTime | chxm1023 | 未注明 | `Reheji/CircleTime.js` | RevenueCat（其他） |
| CleanCut | 小帽 | 未注明 | `XiaoMao/CleanCut.js` | RevenueCat |
| Cleanly | 小帽 | 未注明 | `XiaoMao/Cleanly.js` | RevenueCat |
| ClevCalc | afengye | 1.3.7 | `Afengye/ClevCalc.js` | RevenueCat |
| Clipboard | chxm1023 | 未注明 | `Reheji/Clipboard.js` | RevenueCat（年付） |
| ClockIn | 小帽 | 未注明 | `XiaoMao/ClockIn.js` | RevenueCat |
| CloneCam | chxm1023 | 未注明 | `Reheji/CloneCam.js` | RevenueCat（其他） |
| Cobweb | 小帽 | 未注明 | `XiaoMao/Cobweb.js` | RevenueCat |
| Cocam | chxm1023 | 未注明 | `Reheji/Cocam.js` | RevenueCat（终身） |
| CodeScanner | chxm1023 | 未注明 | `Reheji/CodeScanner.js` | RevenueCat（终身） |
| codye | 89996462 | 1.1.4 | `89996462/Codye.js` | RevenueCat |
| CollageMaker+ 拼图软件 | chxm1023 | 未注明 | `Reheji/collagemakerpinturuanjian.js` | RevenueCat（年付） |
| Collect收集 | chxm1023 | 未注明 | `Reheji/collectshouji.js` | RevenueCat（年付） |
| col.or | chxm1023 | 未注明 | `Reheji/Color.js` | RevenueCat（终身） |
| ColorIdentifier | 小帽 | 未注明 | `XiaoMao/ColorIdentifier.js` | RevenueCat |
| Coloroid | 小帽 | 未注明 | `XiaoMao/ChromePhoto.js` | RevenueCat |
| Color Widgets小组件 | chxm1023 | 未注明 | `Reheji/colorwidgetsxiaozujian.js` | RevenueCat（年付） |
| Consumable | 小帽 | 未注明 | `XiaoMao/Consumable.js` | RevenueCat |
| Contact | 小帽 | 未注明 | `XiaoMao/Contact.js` | RevenueCat |
| Context | chxm1023 | 未注明 | `Collections/Context.js` | App 专属 |
| Context | chxm1023 | 未注明 | `Reheji/Context.js` | RevenueCat（年付） |
| Context | chxm1023 | 未注明 | `Reheji/Context2.js` | RevenueCat（其他） |
| Convertly | chxm1023 | 未注明 | `Reheji/Convertly.js` | RevenueCat（其他） |
| CookAI | 小帽 | 未注明 | `XiaoMao/CookAI.js` | RevenueCat |
| Cookie | chxm1023 | 未注明 | `Reheji/Cookie.js` | RevenueCat（终身） |
| Coolz | 小帽 | 未注明 | `XiaoMao/Coolz.js` | RevenueCat |
| Copied | 小帽 | 未注明 | `XiaoMao/Copied.js` | RevenueCat |
| CountDownWigdet | 小帽 | 未注明 | `XiaoMao/CountDownWigdet.js` | RevenueCat |
| CountdowTimer | 小帽 | 未注明 | `XiaoMao/CountdowTimer.js` | RevenueCat |
| CountDuck | afengye | 3.0.1 | `Afengye/CountDuck.js` | RevenueCat |
| Counter | chxm1023 | 未注明 | `Reheji/Counter.js` | RevenueCat（终身） |
| CountryBeen | 小帽 | 未注明 | `XiaoMao/CountryBeen.js` | RevenueCat |
| Craft-文件笔记编辑器 | chxm1023 | 未注明 | `Collections/Craft.js` | App 专属 |
| Creativit | 小帽 | 未注明 | `XiaoMao/Creativit.js` | RevenueCat |
| CryptoPro | 小帽 | 未注明 | `XiaoMao/CryptoPro.js` | RevenueCat |
| CTRL | 小帽 | 未注明 | `XiaoMao/CTRL.js` | 其他（Adapty） |
| Cubox-收藏阅读 | chxm1023 | 未注明 | `Collections/Cubox.js` | App 专属 |
| Currency | chxm1023 | 未注明 | `Reheji/Currency.js` | RevenueCat（年付） |
| DailyArt | chxm1023 | 未注明 | `Collections/DailyArt.js` | App 专属 |
| Dailyart | chxm1023 | 未注明 | `Reheji/Dailyart.js` | RevenueCat（其他） |
| DailyToDoList | 小帽 | 未注明 | `XiaoMao/DailyToDoList.js` | RevenueCat |
| DailyWallpaper | 小帽 | 未注明 | `XiaoMao/DailyWallpaper.js` | RevenueCat |
| 呆萌熊番茄钟 | WeiGiegie | 2.2.1 | `WeiGiegie/daimengxiongfanqiezhong.js` | App 专属 |
| DaisyFaceYoga | 小帽 | 未注明 | `XiaoMao/DaisyFaceYoga.js` | 其他（Adapty） |
| 蛋啵 | 89996462 | 1.1.800 | `89996462/danbo.js` | App 专属 |
| 弹窗AD | chxm1023 | 未注明 | `Collections/caiyuntianqi.js` | App 专属 |
| 单词鸭 | WeiGiegie | 3.8.2 | `WeiGiegie/danciya.js` | App 专属 |
| 当然 | 89996462 | v2.30.1 | `89996462/dangran.js` | App 专属 |
| 倒班助手 | 无（基于用户抓包自写） | 4.4.13 | `daobanzhushou.js` | App 专属 |
| 倒放挑战 | chxm1023 | 未注明 | `Reheji/daofangtiaozhan.js` | RevenueCat（终身） |
| 倒计时小工具 | chxm1023 | 未注明 | `Reheji/daojishixiaogongju.js` | RevenueCat（终身） |
| 倒数纪念日 | chxm1023 | 未注明 | `Collections/daoshujinianri.js` | App 专属 |
| 倒数鸭 | chxm1023 | 未注明 | `Reheji/daoshuya.js` | RevenueCat（终身） |
| 岛屿阅读 | chxm1023 | 未注明 | `Reheji/daoyuyuedu.js` | RevenueCat（其他） |
| DarkLooker 护眼蓝光/Safari扩展工具 | chxm1023 | 未注明 | `Reheji/darklookerhuyanlanguangsafarikuozhangongju.js` | RevenueCat（终身） |
| Darkroom | chxm1023 | 未注明 | `Reheji/Darkroom.js` | RevenueCat（终身） |
| 大神P图 | chxm1023 | 未注明 | `Collections/dashenptu.js` | App 专属 |
| 大神水印 | 89996462 | 2.7.4 | `89996462/dashenshuiyin.js` | App 专属 |
| 大师笔记 | chxm1023 | 未注明 | `Collections/dashibiji.js` | App 专属 |
| DataCalc | chxm1023 | 未注明 | `Reheji/DataCalc.js` | RevenueCat（年付） |
| DayFul | 小帽 | 未注明 | `XiaoMao/DayFul.js` | RevenueCat |
| Daylog | 小帽 | 未注明 | `XiaoMao/Daylog.js` | RevenueCat |
| DayMore-时尚日记本 | chxm1023 | 未注明 | `Collections/DayMore.js` | App 专属 |
| Day One 日记 | 89996462 | 7.18.2 | `89996462/DayOne.js` | App 专属 |
| Days | afengye | 3.15 | `Afengye/Days.js` | RevenueCat |
| DaysSince | 小帽 | 未注明 | `XiaoMao/DaysSince.js` | RevenueCat |
| 大鱼短剧 | 89996462 | 未注明 | `89996462/dayuduanju.js` | App 专属 |
| DecibelMeter | ddgksf2013 | 未注明 | `Reheji/DecibelMeter.js` | RevenueCat（年付） |
| Dedupe | ddgksf2013 | 未注明 | `Reheji/Dedupe.js` | RevenueCat（终身） |
| DeepFaker换脸 | 89996462 | 1.1.8 | `89996462/deepfakerhuanlian.js` | App 专属 |
| 得间小说 | chxm1023 | 未注明 | `Collections/dejianxiaoshuo.js` | App 专属 |
| DeviceKit | chxm1023 | 未注明 | `Reheji/DeviceKit.js` | RevenueCat（其他） |
| DHWaterMarkManager | afengye | 1.2.2 | `Afengye/DHWaterMarkManager.js` | RevenueCat |
| 点点穿书 | 89996462 | 3.3.15 | `89996462/diandianchuanshu.js` | App 专属 |
| 电工计算器 | 89996462 | 6.1.0 | `89996462/diangongjisuanqi.js` | RevenueCat |
| 电视家 | 89996462 | 2.2.3 | `89996462/dianshijia.js` | App 专属 |
| 电音阁dj | 89996462 | 2.0.3 | `89996462/dianyingedj.js` | App 专属 |
| 电子合同易签约 | 89996462 | 1.1 | `89996462/dianzihetongyiqianyue.js` | App 专属 |
| 电子合同易签约 | chxm1023 | 未注明 | `Collections/dianzihetongyiqianyue.js` | App 专属 |
| 电子请柬 | WeiGiegie | 未注明 | `WeiGiegie/dianziqingjian.js` | App 专属 |
| 电子请柬制作 | 89996462 | v2.3.5 | `89996462/dianziqingjianzhizuo.js` | App 专属 |
| Diarly | afengye | 3.18 | `Afengye/Diarly.js` | RevenueCat |
| Diarly日历 | chxm1023 | 未注明 | `Reheji/diarlyrili.js` | RevenueCat（年付） |
| 滴答清单 | 89996462 | 6.3.80 | `89996462/didaqingdan.js` | App 专属 |
| 滴答时钟 | afengye | 2.0.9 | `Afengye/didashizhong.js` | RevenueCat |
| DietPal | 小帽 | 未注明 | `XiaoMao/DietPal.js` | RevenueCat |
| 盯盯水印相机 | WeiGiegie | 未注明 | `WeiGiegie/dingdingshuiyinxiangji.js` | App 专属 |
| 丁香医考 | 89996462 | 6.31.5 | `89996462/dingxiangyikao.js` | App 专属 |
| 订阅酱 | 89996462 | 2.0.1 | `89996462/dingyuejiang.js` | RevenueCat |
| 订阅日期 | 小帽 | 未注明 | `XiaoMao/dingyuedate.js` | RevenueCat |
| 地区辐射查询 | 小帽 | 未注明 | `XiaoMao/diqufushe.js` | App 专属 |
| 地震预警 | 89996462 | 1.1.5 | `89996462/dizhenyujing.js` | App 专属 |
| 地震预警 | 89996462 | 2024.3.2 | `89996462/dizhenyujing2.js` | App 专属 |
| 地震预警 | chxm1023 | 未注明 | `Collections/dizhenyujing.js` | App 专属 |
| DJ串烧集 | WeiGiegie | 2.3.8 | `WeiGiegie/djchuanshaoji.js` | App 专属 |
| DJ串烧库 | 89996462 | v2.0 | `89996462/djchuanshaoku.js` | App 专属 |
| DJ串烧库 | 89996462 | v2.0 | `89996462/djchuanshaoku2.js` | App 专属 |
| DJ音乐库 | WeiGiegie | 2.6.7 | `WeiGiegie/djyinyueku.js` | App 专属 |
| Documa | 小帽 | 未注明 | `XiaoMao/Documa.js` | RevenueCat |
| Dofm | 89996462 | 2.5.0 | `89996462/dofm.js` | App 专属 |
| 咚咚心率 | 89996462 | 1.1.7 | `89996462/dongdongxinlv.js` | iTunes 收据 |
| 懂法猫 | WeiGiegie | 5.7 | `WeiGiegie/dongfamao.js` | App 专属 |
| 动漫相机 | WeiGiegie | 1.0.4 | `WeiGiegie/dongmanxiangji.js` | App 专属 |
| 动态壁纸 | chxm1023 | 未注明 | `Reheji/dongtaibizhi.js` | RevenueCat（终身） |
| DopeWallpapers | 小帽 | 未注明 | `XiaoMao/DopeWallpapers.js` | RevenueCat |
| DoseWise | chxm1023 | 未注明 | `Reheji/DoseWise.js` | RevenueCat（终身） |
| 豆瓣电影排行 | 小帽 | 未注明 | `XiaoMao/doubandianying.js` | App 专属 |
| 逗逗表情包 | chxm1023 | 未注明 | `Collections/doudoubiaoqingbao.js` | App 专属 |
| 抖抖去水印 | WeiGiegie | 1.4 | `WeiGiegie/doudouqushuiyin.js` | App 专属 |
| 豆花阅读 | WeiGiegie | 10.11.1 | `WeiGiegie/douhuayuedu.js` | App 专属 |
| 抖看到小短剧 | 89996462 | 2.6.0 | `89996462/doukandaoxiaoduanju.js` | App 专属 |
| 抖看小剧场 | WeiGiegie | 2.1.0 | `WeiGiegie/doukanxiaojuchang.js` | App 专属 |
| 抖看小说 | WeiGiegie | 1.8.3 | `WeiGiegie/doukanxiaoshuo.js` | App 专属 |
| 斗鱼 | 89996462 | 未注明 | `89996462/douyu.js` | App 专属 |
| DPBOX | chxm1023 | 未注明 | `Reheji/DPBOX.js` | RevenueCat（年付） |
| Drafts | chxm1023 | 未注明 | `Collections/Drafts.js` | App 专属 |
| DraGo | WeiGiegie | 1.1.4 | `WeiGiegie/DraGo.js` | App 专属 |
| Drainn | 小帽 | 未注明 | `XiaoMao/Drainn.js` | RevenueCat |
| Dressika | 小帽 | 未注明 | `XiaoMao/Dressika.js` | RevenueCat |
| Drinkally | 小帽 | 未注明 | `XiaoMao/Drinkally.js` | RevenueCat |
| Drops外语 | chxm1023 | 未注明 | `Reheji/dropswaiyu.js` | RevenueCat（终身） |
| Dtd Sounds | chxm1023 | 未注明 | `Reheji/DtdSounds.js` | RevenueCat（终身） |
| DualCapture | chxm1023 | 未注明 | `Reheji/DualCapture.js` | RevenueCat（其他） |
| 短视频剪辑 | WeiGiegie | 1.0.5 | `WeiGiegie/duanshipinjianji.js` | App 专属 |
| 短信喵 | chxm1023 | 未注明 | `Reheji/duanxinmiao.js` | RevenueCat（终身） |
| 读不舍手 | chxm1023 | 未注明 | `Reheji/dubusheshou.js` | RevenueCat（终身） |
| 读否 | 89996462 | 1.3.1 | `89996462/dufou.js` | RevenueCat |
| 读否 | chxm1023 | 未注明 | `Reheji/dufou.js` | RevenueCat（年付） |
| 读否 | chxm1023 | 未注明 | `dufou.js` | RevenueCat |
| 堆糖 | chxm1023 | 未注明 | `Collections/duitang.js` | App 专属 |
| DumbPhone(°) | chxm1023 | 未注明 | `Reheji/DumbPhone.js` | RevenueCat（终身） |
| 多背单词 | WeiGiegie | 3.5.8 | `WeiGiegie/duobeidanci.js` | App 专属 |
| 多彩壁纸 | 89996462 | 1.5.8 | `89996462/duocaibizhi.js` | iTunes 收据 |
| 多彩相册 | 89996462 | 1.1.0 | `89996462/duocaixiangce.js` | App 专属 |
| 多功能视频剪辑 | chxm1023 | 未注明 | `Collections/duogongnengshipinjianji.js` | App 专属 |
| 多漫 | 89996462 | 2.4 | `89996462/duoman.js` | App 专属 |
| 哆咪星球 | 89996462 | 未注明 | `89996462/duomixingqiu.js` | App 专属 |
| 多人待办 | WeiGiegie | 1.4.18 | `WeiGiegie/duorendaiban.js` | App 专属 |
| Duplete | ddgksf2013 | 未注明 | `Reheji/Duplete.js` | RevenueCat（年付） |
| 读手表 | WeiGiegie | 2.1.9 | `WeiGiegie/dushoubiao.js` | App 专属 |
| DVD相机 | 89996462 | 1.10 | `89996462/dvdxiangji.js` | iTunes 收据 |
| EasyFast | 小帽 | 未注明 | `XiaoMao/EasyFast.js` | RevenueCat |
| Echo | afengye | 1.11.1 | `Afengye/Echo.js` | RevenueCat |
| EFEKT美易一视频特效 | 89996462 | 5.3 | `89996462/EFEKT.js` | App 专属 |
| EF Hello | 小帽 | 未注明 | `XiaoMao/EFHello.js` | App 专属 |
| Ego Reader | 89996462 | 4.3.9 | `89996462/EgoReader.js` | App 专属 |
| ElementNote | afengye | 2.5.0 | `Afengye/ElementNote.js` | RevenueCat |
| ElementNote | chxm1023 | 未注明 | `Reheji/ElementNote.js` | RevenueCat（终身） |
| ElonAI | chxm1023 | 未注明 | `Reheji/ElonAI.js` | RevenueCat（年付） |
| Email Me | chxm1023 | 未注明 | `Reheji/EmailMe.js` | RevenueCat（终身） |
| Emby | chxm1023 | 未注明 | `Collections/Emby.js` | App 专属 |
| EmojiGenerator | 小帽 | 未注明 | `XiaoMao/EmojiGenerator.js` | RevenueCat |
| Emote | chxm1023 | 未注明 | `Reheji/Emote.js` | RevenueCat（年付） |
| Emphasis | ddgksf2013 | 未注明 | `Reheji/Emphasis.js` | RevenueCat（年付） |
| Encryptor | 小帽 | 未注明 | `XiaoMao/Encryptor.js` | RevenueCat |
| Endel | chxm1023 | 未注明 | `Collections/Endel.js` | App 专属 |
| Endel | chxm1023 | 未注明 | `Reheji/Endel.js` | RevenueCat（终身） |
| EnglishChecker | 小帽 | 未注明 | `XiaoMao/EnglishChecker.js` | RevenueCat |
| Envelopes | 小帽 | 未注明 | `XiaoMao/Envelopes.js` | RevenueCat |
| Epic | 小帽 | 未注明 | `XiaoMao/Epic.js` | RevenueCat |
| Erasee | chxm1023 | 未注明 | `Reheji/Erasee.js` | RevenueCat（其他） |
| Erase Objects | chxm1023 | 未注明 | `Reheji/EraseObjects.js` | RevenueCat（年付） |
| Ereasy | afengye | 2.0.0 | `Afengye/Ereasy.js` | RevenueCat |
| 儿歌点点 | 89996462 | 3.47.0 | `89996462/ergediandian.js` | App 专属 |
| EstimateInvocie | 小帽 | 未注明 | `XiaoMao/EstimateInvocie.js` | RevenueCat |
| EventLine | afengye | 1.15.0 | `Afengye/EventLine.js` | RevenueCat |
| Everlog | ddgksf2013 | 未注明 | `Reheji/Everlog.js` | RevenueCat（年付） |
| Everyday-习惯养成 | chxm1023 | 未注明 | `Collections/Everyday.js` | App 专属 |
| ExifIPTC | 小帽 | 未注明 | `XiaoMao/ExifIPTC.js` | RevenueCat |
| ExpenseReport | 小帽 | 未注明 | `XiaoMao/ExpenseReport.js` | RevenueCat |
| Expenses | 小帽 | 未注明 | `XiaoMao/Expenses.js` | RevenueCat |
| ExpensesManager | 小帽 | 未注明 | `XiaoMao/ExpensesManager.js` | RevenueCat |
| EziCode | 小帽 | 未注明 | `XiaoMao/EziCode.js` | RevenueCat |
| Fabulous每日动力泉源 | 89996462 | 1.42.7 | `89996462/Fabulous.js` | App 专属 |
| FaceLab-换脸 | chxm1023 | 未注明 | `Collections/FaceLab.js` | App 专属 |
| FaceMa | ddgksf2013 | 未注明 | `Reheji/FaceMa.js` | RevenueCat（年付） |
| FacePause | 小帽 | 未注明 | `XiaoMao/FacePause.js` | RevenueCat |
| FaceSwapper-AI换脸 | chxm1023 | 未注明 | `Collections/FaceSwapper.js` | App 专属 |
| Falendar日历 | chxm1023 | 未注明 | `Reheji/falendarrili.js` | RevenueCat（终身） |
| FamilyLocator | 小帽 | 未注明 | `XiaoMao/FamilyLocator.js` | RevenueCat |
| 方弗相机 | chxm1023 | 未注明 | `Reheji/fangfuxiangji.js` | RevenueCat（终身） |
| 番茄短剧 | WeiGiegie | 1.2.0.1 | `WeiGiegie/fanqieduanju.js` | App 专属 |
| 番茄短剧 | WeiGiegie | 3.0.4 | `WeiGiegie/fanqieduanju2.js` | App 专属 |
| 饭卡 | chxm1023 | 未注明 | `Reheji/fanka.js` | RevenueCat（终身） |
| 帆书 | WeiGiegie | 6.7.1 | `WeiGiegie/fanshu.js` | App 专属 |
| 帆书请求体 | WeiGiegie | 6.7.1 | `WeiGiegie/fanshuqingqiuti.js` | App 专属 |
| 番薯小说 | chxm1023 | 未注明 | `Collections/fanshuxiaoshuo.js` | App 专属 |
| 番薯小说 | WeiGiegie | 2.5.76 | `WeiGiegie/fanshuxiaoshuo.js` | App 专属 |
| 番薯小说阅读器 | 89996462 | 2.5.71 | `89996462/fanshuxiaoshuoyueduqi.js` | App 专属 |
| 翻页时钟 | chxm1023 | 未注明 | `Reheji/fanyeshizhong.js` | RevenueCat（终身） |
| 凡音钢琴 | chxm1023 | 未注明 | `Collections/fanyingangqin.js` | App 专属 |
| 翻译全能王 | 89996462 | 9.0.1 | `89996462/fanyiquannengwang.js` | App 专属 |
| 翻译软件 | WeiGiegie | 2.1.2 | `WeiGiegie/fanyiruanjian.js` | App 专属 |
| FastConnectLite | afengye | 1.0.4 | `Afengye/FastConnectLite.js` | RevenueCat |
| fastdiet | afengye | 1.3.7 | `Afengye/Fastdiet.js` | RevenueCat |
| FastingTrackerForWomen | 小帽 | 未注明 | `XiaoMao/FastingTrackerForWomen.js` | RevenueCat |
| FeedBack | 小帽 | 未注明 | `XiaoMao/FeedBack.js` | RevenueCat |
| 飞鱼计划 | 89996462 | 3.0.44 | `89996462/feiyujihua.js` | App 专属 |
| Felo实时翻译 | chxm1023 | 未注明 | `Collections/Felo.js` | App 专属 |
| 分贝仪 | 89996462 | 5.0.9 | `89996462/fenbeiyi.js` | RevenueCat |
| 疯狂背单词 | 89996462 | 1.32 | `89996462/fengkuangbeidanci.js` | App 专属 |
| 疯狂背单词 | WeiGiegie | 2.5 | `WeiGiegie/fengkuangbeidanci.js` | App 专属 |
| 烽翎 | chxm1023 | 未注明 | `Reheji/fengling.js` | RevenueCat（终身） |
| 风行视频 | WeiGiegie | 4.3.6.9 | `WeiGiegie/fengxingshipin.js` | App 专属 |
| 风行视频请求头 | WeiGiegie | 4.3.6.9 | `WeiGiegie/fengxingshipinqingqiutou.js` | App 专属 |
| 风云扫描王 | WeiGiegie | 1.4.0 | `WeiGiegie/fengyunsaomiaowang.js` | App 专属 |
| 芬空间 | WeiGiegie | 3.1.2 | `WeiGiegie/fenkongjian.js` | App 专属 |
| Fiery | ddgksf2013 | 未注明 | `Reheji/Fiery.js` | RevenueCat（年付） |
| Fiery Feeds | afengye | 2.12.5 | `Afengye/FieryFeeds.js` | RevenueCat |
| FilePiP | 小帽 | 未注明 | `XiaoMao/FilePiP.js` | RevenueCat |
| Filmix-影视库重命名工具 | chxm1023 | 未注明 | `Collections/Filmix.js` | App 专属 |
| Fimo | chxm1023 | 未注明 | `Fimo.js` | App 专属 |
| Fimo_复古胶片相机 | chxm1023 | 未注明 | `Collections/Fimo.js` | App 专属 |
| FinancialNote | ddgksf2013 | 未注明 | `Reheji/FinancialNote.js` | RevenueCat（年付） |
| FindBLE | 小帽 | 未注明 | `XiaoMao/FindBLE.js` | RevenueCat |
| FindMyCar | 小帽 | 未注明 | `XiaoMao/FindMyCar.js` | RevenueCat |
| FindPhoneByClap | 小帽 | 未注明 | `XiaoMao/FindPhoneByClap.js` | RevenueCat |
| Fine修图 | chxm1023 | 未注明 | `Fine.js` | RevenueCat |
| Fine修图 | chxm1023 | 未注明 | `Reheji/Fine.js` | RevenueCat（年付） |
| FishIdentifier | 小帽 | 未注明 | `XiaoMao/FishIdentifier.js` | RevenueCat |
| Fitenium | 小帽 | 未注明 | `XiaoMao/Fitenium.js` | RevenueCat |
| FitnessPrep | 小帽 | 未注明 | `XiaoMao/FitnessPrep.js` | App 专属 |
| FitnessStats | 小帽 | 未注明 | `XiaoMao/FitnessStats.js` | RevenueCat |
| FitnessView | 89996462 | 2.1.4 | `89996462/FitnessView.js` | iTunes 收据 |
| FitnessView | afengye | 2.5.7 | `Afengye/FitnessView.js` | RevenueCat |
| FitWoody | 小帽 | 未注明 | `XiaoMao/FitWoody.js` | RevenueCat |
| Fleeky | afengye | 3.15.0 | `Afengye/Fleeky.js` | RevenueCat |
| FlightTracker | 小帽 | 未注明 | `XiaoMao/FlightTracker.js` | RevenueCat |
| Flipo | 小帽 | 未注明 | `XiaoMao/Flipo.js` | RevenueCat |
| Flo | WeiGiegie | 9.59.0 | `WeiGiegie/Flo.js` | App 专属 |
| flomo | chxm1023 | 未注明 | `Collections/Flomo.js` | App 专属 |
| Flow | afengye | 3.8.2 | `Afengye/Flow.js` | RevenueCat |
| Flow | chxm1023 | 未注明 | `Reheji/Flow.js` | RevenueCat（年付） |
| FlowerIdentifier | 小帽 | 未注明 | `XiaoMao/FlowerIdentifier.js` | RevenueCat |
| Flowkey钢琴 | 89996462 | 2.55.0 | `89996462/Flowkey.js` | App 专属 |
| Foca | afengye | 1.3.0 | `Afengye/Foca.js` | RevenueCat |
| Focused iOS | afengye | 1.9.2 | `Afengye/FocusediOS.js` | RevenueCat |
| Focused Work | ddgksf2013 | 未注明 | `Reheji/FocusedWork.js` | RevenueCat（年付） |
| FocusFour | chxm1023 | 未注明 | `Reheji/FocusFour.js` | RevenueCat（终身） |
| Focuskeeper | afengye | 2.8.4 | `Afengye/Focuskeeper.js` | RevenueCat |
| Focus Video | 89996462 | 3.0.1 | `89996462/FocusVideo.js` | iTunes 收据 |
| Focus专注 | chxm1023 | 未注明 | `Reheji/focuszhuanzhu.js` | RevenueCat（年付） |
| Fokus | 小帽 | 未注明 | `XiaoMao/Fokus.js` | RevenueCat |
| fomz相机 | chxm1023 | 未注明 | `Collections/fomzxiangji.js` | App 专属 |
| Fonts | chxm1023 | 未注明 | `Reheji/Fonts.js` | RevenueCat（终身） |
| Fontsify | chxm1023 | 未注明 | `Reheji/Fontsify.js` | RevenueCat（终身） |
| Foodie | chxm1023 | 未注明 | `Collections/Foodie.js` | App 专属 |
| Foodie 美食相机 | 89996462 | 5.2.11 | `89996462/foodie.js` | App 专属 |
| Foodvisor | afengye | 7.5.1 | `Afengye/Foodvisor.js` | RevenueCat |
| FormScanner | ddgksf2013 | 未注明 | `Reheji/FormScanner.js` | RevenueCat（终身） |
| Fretonomy | chxm1023 | 未注明 | `Reheji/Fretonomy.js` | RevenueCat（年付） |
| FRMD相机 | chxm1023 | 未注明 | `Reheji/frmdxiangji.js` | RevenueCat（终身） |
| FruitMinder | chxm1023 | 未注明 | `Reheji/FruitMinder.js` | RevenueCat（终身） |
| FT中文网 | chxm1023 | 未注明 | `Collections/ftzhongwenwang.js` | App 专属 |
| FUJISTYLE | chxm1023 | 未注明 | `Reheji/FUJISTYLE.js` | RevenueCat（年付） |
| Fun Widgets小组件 | 89996462 | 2.25.1 | `89996462/funwidgetsxiaozujian.js` | App 专属 |
| FutureBaby | 小帽 | 未注明 | `XiaoMao/FutureBaby.js` | RevenueCat |
| Fuze | 小帽 | 1 | `XiaoMao/Fuze.js` | iTunes 收据 |
| 高定素材大师 | 89996462 | 1.1.1 | `89996462/gaodingsucaidashi.js` | App 专属 |
| 高定素材大师 | chxm1023 | 未注明 | `Collections/gaodingsucaidashi.js` | App 专属 |
| 稿好语文 | WeiGiegie | 2.10.3 | `WeiGiegie/gaohaoyuwen.js` | App 专属 |
| 稿好作文 | 89996462 | 2.4.0 | `89996462/gaohaozuowen.js` | App 专属 |
| 高考必备 | chxm1023 | 未注明 | `Collections/gaokaobibei.js` | App 专属 |
| GBA | ddgksf2013 | 未注明 | `Reheji/GBA.js` | RevenueCat（年付） |
| Gear浏览器 | chxm1023 | 未注明 | `Reheji/gearliulanqi.js` | RevenueCat（年付） |
| 歌歌AI写歌 | chxm1023 | 未注明 | `Collections/gegeAIxiege.js` | App 专属 |
| G E I S T | afengye | 7.7.0 | `Afengye/GEIST.js` | RevenueCat |
| G E I S T | ddgksf2013 | 未注明 | `Reheji/GEIST.js` | RevenueCat（年付） |
| GemstoneIdentifier | 小帽 | 未注明 | `XiaoMao/GemstoneIdentifier.js` | RevenueCat |
| GeniusScan | afengye | 7.22 | `Afengye/GeniusScan.js` | RevenueCat |
| Genk | 小帽 | 未注明 | `XiaoMao/Genk.js` | RevenueCat |
| Gentler Streak | chxm1023 | 未注明 | `Reheji/GentlerStreak.js` | RevenueCat（终身） |
| 格式转换 | chxm1023 | 未注明 | `Collections/geshizhuanhuan.js` | App 专属 |
| 格式转换工具 | WeiGiegie | 1.1.7 | `WeiGiegie/geshizhuanhuangongju.js` | App 专属 |
| Get笔记 | WeiGiegie | 2.3.4 | `WeiGiegie/getbiji.js` | App 专属 |
| GetFace | ddgksf2013 | 未注明 | `Reheji/GetFace.js` | RevenueCat（年付） |
| 格志日记 | 89996462 | 3.2.1 | `89996462/gezhiriji.js` | App 专属 |
| 格志日记 | chxm1023 | 未注明 | `Collections/gezhiriji.js` | App 专属 |
| GIF 表情包动图制作 | 小帽 | 4 | `XiaoMao/GIFMaker.js` | iTunes 收据 |
| GIFMaker,GIFEditor | chxm1023 | 未注明 | `Reheji/GIFMakerGIFEditor.js` | RevenueCat（终身） |
| Giftr | afengye | 2.2 | `Afengye/Giftr.js` | RevenueCat |
| Glucolo | 小帽 | 未注明 | `XiaoMao/Glucolog.js` | RevenueCat |
| GoalTracker | 小帽 | 未注明 | `XiaoMao/GoalTracker.js` | RevenueCat |
| Gobble | 小帽 | 未注明 | `XiaoMao/Gobble.js` | RevenueCat |
| 工地记工 | 89996462 | 4.9.8 | `89996462/gongdijigong.js` | App 专属 |
| 公考雷达 | 小帽 | 未注明 | `XiaoMao/gongkaoleida.js` | App 专属 |
| GoodThing | ddgksf2013 | 未注明 | `Reheji/GoodThing.js` | RevenueCat（年付） |
| Goru | afengye | 1.6.1 | `Afengye/Goru.js` | RevenueCat |
| GoToSleep | ddgksf2013 | 未注明 | `Reheji/GoToSleep.js` | RevenueCat（年付） |
| 狗狗橡皮擦 | chxm1023 | 未注明 | `Reheji/gougouxiangpica.js` | RevenueCat（其他） |
| 购物清单 | chxm1023 | 未注明 | `Reheji/gouwuqingdan.js` | RevenueCat（其他） |
| GPS工具箱 | WeiGiegie | 2.7.38 | `WeiGiegie/gpsgongjuxiang.js` | App 专属 |
| GPTalk | 小帽 | 未注明 | `XiaoMao/GPTalk.js` | RevenueCat |
| GradientMusic音乐 | chxm1023 | 未注明 | `Reheji/gradientmusicyinle.js` | RevenueCat（终身） |
| Grain | ddgksf2013 | 未注明 | `Reheji/Grain.js` | RevenueCat（终身） |
| Grammarly-移动输入法 | David_Hex01 | 未注明 | `Collections/Grammarly.js` | App 专属 |
| GreenNoise | 小帽 | 未注明 | `XiaoMao/GreenNoise.js` | RevenueCat |
| 瓜瓜龙启蒙 | 89996462 | 7.9.0 | `89996462/guagualongqimeng.js` | App 专属 |
| 光卷 | 89996462 | 未注明 | `89996462/guangjuan.js` | App 专属 |
| 光影边框 | chxm1023 | 未注明 | `Collections/guangyingbiankuang.js` | App 专属 |
| 广州地铁 | 小帽 | 未注明 | `XiaoMao/guangzhouditie.js` | App 专属 |
| GUGA一超级白板 | 89996462 | 1.0.9 | `89996462/GUGA.js` | App 专属 |
| GuitarTuner吉他调音 | 89996462 | 2.1 | `89996462/GuitarTuner.js` | iTunes 收据 |
| 国际金价 | 小帽 | 未注明 | `XiaoMao/guojijinjia.js` | App 专属 |
| 过期啦 | 89996462 | 2.9.8 | `89996462/guoqila.js` | App 专属 |
| 古诗词大全 | 89996462 | 2.4 | `89996462/gushicidaquan.js` | App 专属 |
| 故事飞船 | 89996462 | 3.1.8 | `89996462/gushifeichuan.js` | App 专属 |
| 古文岛 | chxm1023 | 未注明 | `Collections/guwendao.js` | App 专属 |
| Gymnotize | afengye | 9.2.62 | `Afengye/Gymnotize.js` | RevenueCat |
| HabitBot | 小帽 | 未注明 | `XiaoMao/HabitBot.js` | RevenueCat |
| HabitBreaker | 小帽 | 未注明 | `XiaoMao/HabitBreaker.js` | RevenueCat |
| HabitDone | afengye | 3.1.2 | `Afengye/HabitDone.js` | RevenueCat |
| HabitDone | 小帽 | 未注明 | `XiaoMao/HabitDone.js` | RevenueCat |
| HabitGenius | 小帽 | 未注明 | `XiaoMao/HabitGenius.js` | RevenueCat |
| HabitKit/WinDiary | chxm1023 | 未注明 | `Reheji/HabitKitWinDiary.js` | RevenueCat（终身） |
| HabitMinder | afengye | 2.9.0 | `Afengye/HabitMinder.js` | RevenueCat |
| Habitor | chxm1023 | 未注明 | `Reheji/Habitor.js` | RevenueCat（终身） |
| HabitRadar | 小帽 | 未注明 | `XiaoMao/HabitRadar.js` | RevenueCat |
| HabitRewards | 小帽 | 未注明 | `XiaoMao/HabitRewards.js` | RevenueCat |
| HabitTracker | 小帽 | 未注明 | `XiaoMao/HabitTracker.js` | RevenueCat |
| 海报工厂 | 89996462 | 5.2.40 | `89996462/haibaogongchang.js` | App 专属 |
| 海报制作大师 | 89996462 | 3.3.0 | `89996462/haibaozhizuodashi.js` | App 专属 |
| 海豚🐬儿童英语 | 89996462 | 3.9.9 | `89996462/haitunertongyingyu.js` | App 专属 |
| 海豚记账本 | 89996462 | 3.5.1 | `89996462/haitunjizhangben.js` | App 专属 |
| 海豚记账本 | 小帽 | 未注明 | `XiaoMao/haitunjizhangben.js` | App 专属 |
| 哈梨冥想 | WeiGiegie | 1.3.9 | `WeiGiegie/halimingxiang.js` | App 专属 |
| 汉堡儿童故事 | 89996462 | 2.1.3 | `89996462/hanbaoertonggushi.js` | App 专属 |
| HandsUpReborn | 小帽 | 未注明 | `XiaoMao/HandsUpReborn.js` | RevenueCat |
| 航旅追踪 | 89996462 | 4.4.12 | `89996462/hanglvzhuizong.js` | App 专属 |
| 好芳法课堂 | WeiGiegie | 2.5.1 | `WeiGiegie/haofangfaketang.js` | App 专属 |
| 好事发生 | 89996462 | 2.0 | `89996462/haoshifasheng.js` | App 专属 |
| Happy | chxm1023 | 未注明 | `Reheji/Happy.js` | RevenueCat（终身） |
| HappyScale | afengye | 2024.15 | `Afengye/HappyScale.js` | RevenueCat |
| Haps | 小帽 | 16 | `XiaoMao/Haps.js` | RevenueCat |
| HashtagAi | 小帽 | 未注明 | `XiaoMao/HashtagAi.js` | RevenueCat |
| Haushaltsbuch | ddgksf2013 | 未注明 | `Reheji/Haushaltsbuch.js` | RevenueCat（年付） |
| HealthCoin | 小帽 | 未注明 | `XiaoMao/HealthCoin.js` | RevenueCat |
| HealthView | afengye | 3.9.0 | `Afengye/HealthView.js` | RevenueCat |
| Heartery | 小帽 | 未注明 | `XiaoMao/Heartery.js` | RevenueCat |
| HeartRateTracker | afengye | 2.0.20 | `Afengye/HeartRateTracker.js` | RevenueCat |
| 和包 | 小帽 | 未注明 | `XiaoMao/hebao.js` | App 专属 |
| HEIC to JPG Converter | 小帽 | 未注明 | `XiaoMao/HeictoJpg.js` | RevenueCat |
| HEIC to JPG Converter TM | 89996462 | 1.5.8 | `89996462/HEICToJPGConverter.js` | RevenueCat |
| 黑胶音乐播放器 | chxm1023 | 未注明 | `Reheji/heijiaoyinlebofangqi.js` | RevenueCat（其他） |
| HelloWords背单词 | WeiGiegie | 2.2.22 | `WeiGiegie/hellowordsbeidanci.js` | App 专属 |
| Hermes | 小帽 | 未注明 | `XiaoMao/Hermes.js` | RevenueCat |
| 和讯财经 | 小帽 | 未注明 | `XiaoMao/hexuncaijing.js` | App 专属 |
| HiddenCameraDetectorAi | 小帽 | 未注明 | `XiaoMao/HiddenCameraDetectorAi.js` | RevenueCat |
| Hidem | 小帽 | 5 | `XiaoMao/Hidem.js` | iTunes 收据 |
| HillWidget | chxm1023 | 未注明 | `Reheji/HillWidget.js` | RevenueCat（终身） |
| Hi论坛 | chxm1023 | 未注明 | `Reheji/hiluntan.js` | RevenueCat（年付） |
| HistoricalStepCounter | 小帽 | 未注明 | `XiaoMao/HistoricalStepCounter.js` | RevenueCat |
| Hitiwidget | 89996462 | 1.6.4 | `89996462/HiWidget.js` | RevenueCat |
| HomeDesignAi | 小帽 | 未注明 | `XiaoMao/HomeDesignAi.js` | RevenueCat |
| HomeRemediesForHairCare | 小帽 | 未注明 | `XiaoMao/HomeRemediesForHairCare.js` | RevenueCat |
| 烘焙小屋 | 89996462 | 3.9.5 | `89996462/hongbeixiaowu.js` | App 专属 |
| 烘焙小屋 | chxm1023 | 未注明 | `Collections/hongbeixiaowu.js` | App 专属 |
| 红豆看看 | WeiGiegie | 1.5 | `WeiGiegie/hongdoukankan.js` | App 专属 |
| HoursTracker | 小帽 | 未注明 | `XiaoMao/HoursTracker.js` | RevenueCat |
| HRZN | chxm1023 | 未注明 | `Reheji/HRZN.js` | RevenueCat（终身） |
| Httpbot抓包工具 | chxm1023 | 未注明 | `Reheji/httpbotzhuabaogongju.js` | RevenueCat（终身） |
| 话本小说 | 89996462 | 2.5.2 | `89996462/huabenxiaoshuo.js` | App 专属 |
| 话本小说 | chxm1023 | 未注明 | `Collections/huabenxiaoshuo.js` | App 专属 |
| 画眈漫画 | WeiGiegie | 1.1.2 | `WeiGiegie/huadanmanhua.js` | App 专属 |
| 画耽漫画 | 89996462 | 1.1.2 | `89996462/huadanmanhua.js` | App 专属 |
| 画历 | afengye | 1.7.8 | `Afengye/huali.js` | RevenueCat |
| 换发型 | chxm1023 | 未注明 | `Collections/FaceLab.js` | App 专属 |
| 黄油相机 | 89996462 | 8.18.0 | `89996462/huangyouxiangji.js` | App 专属 |
| 黄油相机 | 小帽 | 未注明 | `XiaoMao/huangyouxiangji.js` | App 专属 |
| 换脸 | 89996462 | 1.6.5 | `89996462/huanlian.js` | iTunes 收据 |
| 环球翻译官 | WeiGiegie | 1.0.8 | `WeiGiegie/huanqiufanyiguan.js` | App 专属 |
| 幻休 | 89996462 | 1.9.1 | `89996462/huanxiu.js` | App 专属 |
| 幻休 | WeiGiegie | 2.8.86 | `WeiGiegie/huanxiu.js` | App 专属 |
| 幻休 | 小帽 | 未注明 | `XiaoMao/huanxiu.js` | App 专属 |
| 幻影相册 | 89996462 | v5 | `89996462/huanyingxiangce.js` | App 专属 |
| 画世界 | 89996462 | 2.5.1 | `89996462/huashijie.js` | App 专属 |
| 画涯 | 89996462 | 1.5.2 | `89996462/huaya.js` | App 专属 |
| 花样文字 | chxm1023 | 未注明 | `Reheji/huayangwenzi.js` | RevenueCat（年付） |
| 汇播学堂 | WeiGiegie | 2.2.4 | `WeiGiegie/huiboxuetang.js` | App 专属 |
| 恢复购买合集 | WeiGiegie | 未注明 | `WeiGiegie/huifugoumaiheji.js` | App 专属 |
| 慧考智学 | 89996462 | 1.4.2 | `89996462/huikaozhixue.js` | App 专属 |
| 绘影字幕 | chxm1023 | 未注明 | `Collections/huiyingzimu.js` | App 专属 |
| 汇中考 | 89996462 | 2.1.2 | `89996462/huizhongkao.js` | App 专属 |
| 呼啦少儿英语 | 89996462 | 1.23.0 | `89996462/hulashaoeryingyu.js` | App 专属 |
| 葫芦养生 | 89996462 | 1.0.6 | `89996462/huluyangsheng.js` | iTunes 收据 |
| 混沌 | WeiGiegie | 未注明 | `WeiGiegie/hundun.js` | App 专属 |
| 婚礼纪 | chxm1023 | 未注明 | `Collections/hunliji.js` | App 专属 |
| 婚礼精选 | 89996462 | 8.0.4 | `89996462/hunlijingxuan.js` | App 专属 |
| 火火兔 | 小帽 | 未注明 | `XiaoMao/huohuotu.js` | App 专属 |
| 火星漫画 | 89996462 | 1.2.2 | `89996462/huoxingmanhua.js` | App 专属 |
| 呼吸 小组件 | 89996462 | 1.3.0 | `89996462/huxixiaozujian.js` | iTunes 收据 |
| Hydra相机 | chxm1023 | 未注明 | `Collections/Hydra.js` | App 专属 |
| Hydro Coach | afengye | 1.0.10 | `Afengye/HydroCoach.js` | RevenueCat |
| HydroCoash | 小帽 | 未注明 | `XiaoMao/HydroCoash.js` | RevenueCat |
| Hyperweb Safari浏览器扩展 | chxm1023 | 未注明 | `Collections/Hyperweb.js` | App 专属 |
| I am | 89996462 | 5.24.1 | `89996462/Iam.js` | iTunes 收据 |
| Icon Killer | chxm1023 | 未注明 | `Collections/IconKiller.js` | App 专属 |
| IDM | chxm1023 | 未注明 | `Reheji/IDM.js` | RevenueCat（年付） |
| IFTTT-工作流程和智能家居自动化 | chxm1023 | 未注明 | `Collections/IFTTT.js` | App 专属 |
| iHabit | afengye | 1.0.25 | `Afengye/iHabit.js` | RevenueCat |
| iHabits | 小帽 | 未注明 | `XiaoMao/iHabits.js` | RevenueCat |
| iLove PDF | chxm1023 | 未注明 | `Collections/iLovePDF.js` | App 专属 |
| ImageCompressor | 小帽 | 未注明 | `XiaoMao/ImageCompressor.js` | RevenueCat |
| ImageResizer | 小帽 | 未注明 | `XiaoMao/ImageResizer.js` | RevenueCat |
| Imagex | chxm1023 | 未注明 | `Reheji/Imagex.js` | RevenueCat（终身） |
| imagex | 89996462 | 1.5.3 | `89996462/imagex.js` | App 专属 |
| ImNGL | 小帽 | 未注明 | `XiaoMao/ImNGL.js` | RevenueCat |
| InCue | 小帽 | 未注明 | `XiaoMao/InCue.js` | RevenueCat |
| iNotes私密备忘录 | chxm1023 | 未注明 | `Reheji/inotessimibeiwanglu.js` | RevenueCat（终身） |
| InPaper | chxm1023 | 未注明 | `Reheji/InPaper.js` | RevenueCat（终身） |
| Inread | afengye | 1.4 | `Afengye/Inread.js` | RevenueCat |
| InstaBorder | 小帽 | 未注明 | `XiaoMao/InstaBorder.js` | RevenueCat |
| Instapaper | 小帽 | 未注明 | `XiaoMao/Instapaper.js` | App 专属 |
| instDown | chxm1023 | 未注明 | `Reheji/InstDown.js` | RevenueCat（终身） |
| intervalFlow | chxm1023 | 未注明 | `Reheji/IntervalFlow.js` | RevenueCat（终身） |
| IntervalTimer | afengye | 1.7.1 | `Afengye/IntervalTimer.js` | RevenueCat |
| Inventory | 小帽 | 未注明 | `XiaoMao/Inventory.js` | RevenueCat |
| Invideo | 89996462 | 8.5.4 | `89996462/Invideo.js` | App 专属 |
| InvoiceGenerator | 小帽 | 未注明 | `XiaoMao/InvoiceGenerator.js` | RevenueCat |
| in widget 超级小组件 | 89996462 | 2.4.3 | `89996462/inwidget.js` | App 专属 |
| iPrinter | 小帽 | 未注明 | `XiaoMao/iPrinter.js` | RevenueCat |
| IPTVUltra | chxm1023 | 未注明 | `Reheji/IPTVUltra.js` | RevenueCat（终身） |
| iSafe | chxm1023 | 未注明 | `Reheji/ISafe.js` | RevenueCat（其他） |
| iScreen | 89996462 | 3.7.5 | `89996462/iscreen.js` | App 专属 |
| iScreen小组件 | chxm1023 | 未注明 | `Collections/iScreenxiaozujian.js` | App 专属 |
| iTranscreen | chxm1023 | 未注明 | `Reheji/ITranscreen.js` | RevenueCat（年付） |
| iTranslate 翻译 | chxm1023 | 未注明 | `Collections/iTranslate.js` | App 专属 |
| iTunes（通用收据伪造，293 个 App） | chxm1023+ddgksf2013 | 未注明 | `iTunes.js` | iTunes 收据 |
| iWatch PDF | 小帽 | 未注明 | `XiaoMao/iWatchPDF.js` | RevenueCat |
| Jellycuts | chxm1023 | 未注明 | `Reheji/Jellycuts.js` | RevenueCat（年付） |
| 甲壳虫ADB | chxm1023 | 未注明 | `Reheji/jiakechongadb.js` | RevenueCat（其他） |
| 剪播台 | WeiGiegie | 1.3.0 | `WeiGiegie/jianbotai.js` | App 专属 |
| 江湖小说 | WeiGiegie | 2.4.0 | `WeiGiegie/jianghuxiaoshuo.js` | App 专属 |
| 建工计算器 | 89996462 | 3.8.5 | `89996462/jiangongjisuanqi.js` | App 专属 |
| 建工计算器 | chxm1023 | 未注明 | `Collections/jiangongjisuanqi.js` | App 专属 |
| 剪画 | 小帽 | 未注明 | `XiaoMao/jianhua.js` | App 专属 |
| 键盘-回复它-开场白 | wf021325 | 未注明 | `Collections/lianxiaoyu3.js` | App 专属 |
| 简讯 | 89996462 | 5.0.1 | `89996462/jianxun.js` | App 专属 |
| 简易表格 | 89996462 | 4.0 | `89996462/jianyibiaoge.js` | iTunes 收据 |
| 减脂食谱 | 89996462 | 1.0.50 | `89996462/jianzhishipu.js` | App 专属 |
| 酵母菌 | WeiGiegie | 1.6.8 | `WeiGiegie/jiaomujun.js` | App 专属 |
| 驾校一点通 | 89996462 | v10.6.2 | `89996462/jiaxiaoyidiantong.js` | App 专属 |
| 计步器 StepsApp | WeiGiegie | 7.0.20 | `WeiGiegie/jibuqistepsapp.js` | App 专属 |
| 解剖大师 | 89996462 | 3.8.1 | `89996462/jiepoudashi.js` | App 专属 |
| 解剖大师 | 小帽 | 未注明 | `XiaoMao/jiepoudashi.js` | App 专属 |
| 截图模拟生成神器 | 89996462 | 1.2 | `89996462/jietumonishengchengshenqi.js` | App 专属 |
| 解压动画 | chxm1023 | 未注明 | `Reheji/jieyadonghua.js` | RevenueCat（终身） |
| 解忧娃娃 | afengye | 2.0 | `Afengye/jieyouwawa.js` | RevenueCat |
| 解忧娃娃 | chxm1023 | 未注明 | `Reheji/jieyouwawa.js` | RevenueCat（终身） |
| 截止日期 | 小帽 | 未注明 | `XiaoMao/jiezhiriqi.js` | RevenueCat |
| 节奏酱 | WeiGiegie | 4.50.2 | `WeiGiegie/jiezoujiang.js` | App 专属 |
| 吉光卡片 | chxm1023 | 未注明 | `Reheji/jiguangkapian.js` | RevenueCat（终身） |
| 记乎 | 89996462 | 3.4.7 | `89996462/jihu.js` | App 专属 |
| 计划 | chxm1023 | 未注明 | `Collections/Calendars.js` | App 专属 |
| 极简汇率 | chxm1023 | 未注明 | `Collections/jijianhuilv.js` | App 专属 |
| 极简日记 | chxm1023 | 未注明 | `Reheji/jijianriji.js` | RevenueCat（终身） |
| 极简扫描 | chxm1023 | 未注明 | `Collections/jijiansaomiao.js` | App 专属 |
| 极简时钟 | afengye | 4.6.4 | `Afengye/jijianshizhong.js` | RevenueCat |
| 极简时钟 | chxm1023 | 未注明 | `Reheji/jijianshizhong.js` | RevenueCat（终身） |
| 即刻运动 | 89996462 | 3.4.3 | `89996462/jikeyundong.js` | App 专属 |
| 鸡乐盒 | WeiGiegie | 1.1.14 | `WeiGiegie/jilehe.js` | App 专属 |
| 金多多计算器 | chxm1023 | 未注明 | `Reheji/jinduoduojisuanqi.js` | RevenueCat（终身） |
| 精点相机 | WeiGiegie | 1.6.6 | `WeiGiegie/jingdianxiangji.js` | App 专属 |
| 京东比价 | WeiGiegie | 15.3.30 | `WeiGiegie/jingdongbijia.js` | App 专属 |
| 经济学人·商论 | chxm1023 | 未注明 | `Collections/jingjixurenshanglun.js` | App 专属 |
| 经期助手 | 89996462 | 10.0.0 | `89996462/jingqizhushou.js` | RevenueCat |
| 尽简衣橱 | 89996462 | 2.6.0 | `89996462/jinjianyichu.js` | App 专属 |
| 金牌翻译官 | WeiGiegie | 1.3.0 | `WeiGiegie/jinpaifanyiguan.js` | App 专属 |
| 金牌翻译官 | 小帽 | 未注明 | `XiaoMao/jinpaifanyiguan.js` | App 专属 |
| 今日抽烟 | 89996462 | 5.9.5 | `89996462/jinrichouyan.js` | iTunes 收据 |
| 今日解忧 | 89996462 | 1.2 | `89996462/jinrijieyou.js` | App 专属 |
| 今日解忧 | 小帽 | 未注明 | `XiaoMao/jinrijieyou.js` | App 专属 |
| 今日热榜 | 小帽 | 未注明 | `XiaoMao/jinrirebang.js` | App 专属 |
| 今日水印拍照相机 | 89996462 | 1.7 | `89996462/jinrishuiyinpaizhaoxiangji.js` | App 专属 |
| 今日水印拍照相机 | 89996462 | 1.7 | `89996462/jinrishuiyinpaizhaoxiangji2.js` | App 专属 |
| 今日水印拍照相机 | WeiGiegie | 1.7 | `WeiGiegie/jinrishuiyinpaizhaoxiangji.js` | App 专属 |
| 今日水印相机 | 89996462 | 3.0.35 | `89996462/jinrishuiyinxiangji.js` | App 专属 |
| 今日水印相机 | 89996462 | 3.0.35 | `89996462/jinrishuiyinxiangji2.js` | App 专属 |
| 计算器AI | chxm1023 | 未注明 | `Reheji/jisuanqiai.js` | RevenueCat（年付） |
| 计算器HD | 89996462 | 1.9.6 | `89996462/jisuanqihd.js` | App 专属 |
| 计算器HD | chxm1023 | 未注明 | `Collections/jisuanqihd.js` | App 专属 |
| 计算器X | chxm1023 | 未注明 | `Reheji/jisuanqix.js` | RevenueCat（其他） |
| 极速扫描仪 | 89996462 | 1.7.7 | `89996462/jisusaomiaoyi.js` | App 专属 |
| 九宫格切图 | chxm1023 | 未注明 | `Collections/jiugonggeqietu.js` | App 专属 |
| 九州短剧 | 89996462 | 1.0 | `89996462/jiuzhouduanju.js` | App 专属 |
| 记一杯 | afengye | 1.5.4 | `Afengye/jiyibei.js` | RevenueCat |
| 记一杯 | 小帽 | 未注明 | `XiaoMao/jiyibei.js` | RevenueCat |
| 记一餐 | chxm1023 | 未注明 | `Reheji/jiyican.js` | RevenueCat（其他） |
| 集云 | 89996462 | 2.0.1 | `89996462/jiyun.js` | RevenueCat |
| 吉真万年历 | chxm1023 | 未注明 | `Collections/jizhenwannianli.js` | App 专属 |
| 吉真紫微斗数 | chxm1023 | 未注明 | `Collections/jizhenziweidoushu.js` | App 专属 |
| jizhi | ddgksf2013 | 未注明 | `Reheji/Jizhi.js` | RevenueCat（年付） |
| JobsTracker | 小帽 | 未注明 | `XiaoMao/JobsTracker.js` | RevenueCat |
| JoiPlanner | 小帽 | 未注明 | `XiaoMao/JoiPlanner.js` | RevenueCat |
| Joy AI | chxm1023 | 未注明 | `Reheji/JoyAI.js` | RevenueCat（终身） |
| JPEG to PNG | 89996462 | 1.5.8 | `89996462/JPEGToPNG.js` | RevenueCat |
| JPEG to PNG Converter | 小帽 | 未注明 | `XiaoMao/JpegtoPng.js` | RevenueCat |
| js_code_pad | afengye | 1.8.5 | `Afengye/JsCodePad.js` | RevenueCat |
| 句读 | 89996462 | 4.3.0 | `89996462/judu.js` | App 专属 |
| 句读 | WeiGiegie | 4.3.0 | `WeiGiegie/judu.js` | App 专属 |
| JustDice | 小帽 | 未注明 | `XiaoMao/JustDice.js` | RevenueCat |
| 剧推推 | 89996462 | 1.2.3 | `89996462/jutuitui.js` | App 专属 |
| Kada阅读 | WeiGiegie | 8.28.0 | `WeiGiegie/kadayuedu.js` | App 专属 |
| 凯格尔运动 | WeiGiegie | 1.5 | `WeiGiegie/kaigeeryundong.js` | App 专属 |
| 开练 | 89996462 | 3.3.94 | `89996462/kailian.js` | App 专属 |
| 开拍 | 89996462 | 1.2.10 | `89996462/kaipai.js` | App 专属 |
| 开睡 | chxm1023 | 未注明 | `Reheji/kaishui.js` | RevenueCat（终身） |
| 开心拍 | 89996462 | 2.6.3 | `89996462/kaixinpai.js` | App 专属 |
| 看板 | chxm1023 | 未注明 | `Reheji/kanban.js` | RevenueCat（其他） |
| 看鉴微视频 | WeiGiegie | 9.4.9 | `WeiGiegie/kanjianweishipin.js` | App 专属 |
| 看剧学英语 | 89996462 | 3.2.2 | `89996462/kanjuxueyingyu.js` | iTunes 收据 |
| 考考鸭 | WeiGiegie | 1.04 | `WeiGiegie/kaokaoya.js` | App 专属 |
| 考试宝 | XiaoMao | 4.6.9 | `kaoshibao.js` | App 专属 |
| 咔皮action | WeiGiegie | 3.0.6 | `WeiGiegie/kapiaction.js` | App 专属 |
| 卡片馆 | chxm1023 | 未注明 | `Reheji/kapianguan.js` | RevenueCat（终身） |
| 卡片日记 | 89996462 | 10.2.0 | `89996462/kapianriji.js` | iTunes 收据 |
| 咔皮相机 | 89996462 | 3.2.3 | `89996462/kapixiangji.js` | App 专属 |
| 卡通头像 | WeiGiegie | 1.0.4 | `WeiGiegie/katongtouxiang.js` | App 专属 |
| 咖映 | chxm1023 | 未注明 | `Collections/kaying.js` | App 专属 |
| 咖映虚拟直播助手 | 89996462 | 1.1.3 | `89996462/kaying.js` | App 专属 |
| 课程 | WeiGiegie | 未注明 | `WeiGiegie/kecheng.js` | App 专属 |
| Keep | 89996462 | 7.36.0 | `89996462/Keep.js` | App 专属 |
| Keep | WeiGiegie | 8.7.20 | `WeiGiegie/Keep.js` | App 专属 |
| kegel | ddgksf2013 | 未注明 | `Reheji/Kegel.js` | RevenueCat（年付） |
| 可可修图 | 89996462 | 1.1.1 | `89996462/kekexiutu.js` | App 专属 |
| 可可修图 | WeiGiegie | 1.3.1 | `WeiGiegie/kekexiutu.js` | App 专属 |
| 克拉壁纸 | 89996462 | 7.5.0 | `89996462/kelabizhi.js` | iTunes 收据 |
| 可奈相机 | 89996462 | 2.4.2 | `89996462/kenaixiangji.js` | App 专属 |
| 可拍 | 89996462 | 2.7.0 | `89996462/kepai.js` | App 专属 |
| KettlebellCraftTraining | 小帽 | 未注明 | `XiaoMao/KettlebellCraftTraining.js` | RevenueCat |
| KidsBeeTV 少儿英语启蒙动画 | chxm1023 | 未注明 | `Reheji/kidsbeetvshaoeryingyuqimengdonghua.js` | RevenueCat（其他） |
| KK键盘 | 89996462 | 未注明 | `89996462/kkjianpan.js` | App 专属 |
| KK键盘 | 89996462 | 未注明 | `89996462/kkjianpan2.js` | App 专属 |
| K米 | 89996462 | 5.5.3 | `89996462/kmi.js` | App 专属 |
| Koan-提问日记 | chxm1023 | 未注明 | `Collections/Koan.js` | App 专属 |
| KocoWidgets | 小帽 | 未注明 | `XiaoMao/KocoWidgets.js` | RevenueCat |
| Kotodama A! | 89996462 | 1.5.8 | `89996462/Kotodama.js` | RevenueCat |
| 抠图软件 | 89996462 | 2.0.2 | `89996462/kouturuanjian.js` | App 专属 |
| 口语星球 | WeiGiegie | 4.5.8 | `WeiGiegie/kouyuxingqiu.js` | App 专属 |
| 快递100收件端 | chxm1023 | 未注明 | `Collections/kuaidi100shoujianduan.js` | App 专属 |
| 快对作业 | XiaoMao | 未注明 | `kuaidui.js` | App 专属 |
| 快看漫画 | WeiGiegie | 7.90.0 | `WeiGiegie/kuaikanmanhua.js` | App 专属 |
| 快聊变声器 | WeiGiegie | 未注明 | `WeiGiegie/kuailiaobianshengqi.js` | App 专属 |
| 快手小程序 | 89996462 | v2.3.0 | `89996462/kuaishouxiaochengxu.js` | App 专属 |
| 快速水印 | chxm1023 | 未注明 | `Collections/kuaisushuiyin.js` | App 专属 |
| 快影 | 89996462 | 6.4.0 | `89996462/kuaiying.js` | App 专属 |
| 快影 | WeiGiegie | 未注明 | `WeiGiegie/kuaiying.js` | App 专属 |
| 快制图表 | afengye | 3.35.0 | `Afengye/kuaizhitubiao.js` | RevenueCat |
| 快制图表 | chxm1023 | 未注明 | `Reheji/kuaizhitubiao.js` | RevenueCat（终身） |
| 酷安 | 小帽 | 未注明 | `XiaoMao/kuan.js` | App 专属 |
| 酷拍 | afengye | 3.7 | `Afengye/kupai.js` | RevenueCat |
| 酷雀水印管家 | WeiGiegie | 1.8.1 | `WeiGiegie/kuqueshuiyinguanjia.js` | App 专属 |
| 酷我音乐 | 89996462 | 10.3.3 | `89996462/kuwoyinyue.js` | App 专属 |
| 酷我音乐 | WeiGiegie | 11.3.8 | `WeiGiegie/kuwoyinyue.js` | App 专属 |
| 酷我音乐 | WeiGiegie | 11.3.8 | `WeiGiegie/kuwoyinyue2.js` | 未注明 |
| Kylin | afengye | 1.27.5 | `Afengye/Kylin.js` | RevenueCat |
| 来电啦 | 89996462 | 1.0.222 | `89996462/laidianla.js` | App 专属 |
| 来音 | 89996462 | 2.4.2 | `89996462/laiyin.js` | App 专属 |
| 来音智能陪练 | 89996462 | 3.4.2 | `89996462/laiyinzhinengpeilian.js` | App 专属 |
| Langster | chxm1023 | 未注明 | `Reheji/Langster.js` | RevenueCat（终身） |
| LanguageLearning | 小帽 | 未注明 | `XiaoMao/LanguageLearning.js` | RevenueCat |
| 蓝基因 | 89996462 | 1.0.16 | `89996462/lanjiyin.js` | App 专属 |
| 懒人听书 | WeiGiegie | 8.6.02 | `WeiGiegie/lanrentingshu.js` | App 专属 |
| 懒人英语阅读 | WeiGiegie | 1.3.8 | `WeiGiegie/lanrenyingyuyuedu.js` | App 专属 |
| LaunchBuddy | 小帽 | 未注明 | `XiaoMao/LaunchBuddy.js` | RevenueCat |
| LaunchX | chxm1023 | 未注明 | `Reheji/LaunchX.js` | RevenueCat（其他） |
| LazyBoard键盘 | chxm1023 | 未注明 | `Reheji/lazyboardjianpan.js` | RevenueCat（终身） |
| lcon killer | 89996462 | 1.8 | `89996462/LconKiller.js` | App 专属 |
| lectmate | WeiGiegie | 2.8.0 | `WeiGiegie/lectmate.js` | App 专属 |
| LeicaLUX | chxm1023 | 未注明 | `Reheji/LeicaLUX.js` | RevenueCat（年付） |
| LEMO FM睡眠 | chxm1023 | 未注明 | `Reheji/lemofmshuimian.js` | RevenueCat（终身） |
| Lens智图 | chxm1023 | 未注明 | `Reheji/lenszhitu.js` | RevenueCat（年付） |
| Lento-壁纸 | chxm1023 | 未注明 | `Collections/Lento.js` | App 专属 |
| 乐拍 | chxm1023 | 未注明 | `Collections/lepai.js` | App 专属 |
| 乐视视频 | WeiGiegie | 10.9.28 | `WeiGiegie/leshishipin.js` | App 专属 |
| 乐视视频 | WeiGiegie | 10.9.28 | `WeiGiegie/leshishipin2.js` | 未注明 |
| 乐刷短剧 | 89996462 | 1.1.1 | `89996462/leshuaduanju.js` | App 专属 |
| LetMeKnow | 小帽 | 未注明 | `XiaoMao/LetMeKnow.js` | RevenueCat |
| 乐秀 | chxm1023 | 未注明 | `Collections/lexiu.js` | App 专属 |
| 恋爱键盘 | 小帽 | 未注明 | `XiaoMao/lianaijianpan.js` | App 专属 |
| 恋爱聊天话术库 | 89996462 | 1.1.6 | `89996462/lianailiaotianhuashuku.js` | App 专属 |
| 练就 | chxm1023 | 未注明 | `Reheji/lianjiu.js` | RevenueCat（终身） |
| 恋相遇 | 89996462 | 1.3.2 | `89996462/lianxiangyu.js` | App 专属 |
| 恋小语-去广告 | wf021325 | 未注明 | `Collections/lianxiaoyu2.js` | App 专属 |
| 恋小语-VIP显示 | wf021325 | 未注明 | `Collections/lianxiaoyu.js` | App 专属 |
| 恋小语-小恋老师 | wf021325 | 未注明 | `Collections/lianxiaoyu3.js` | App 专属 |
| 脸型测试 | WeiGiegie | 1.4.1 | `WeiGiegie/lianxingceshi.js` | App 专属 |
| 聊天话术 | 89996462 | 1.7 | `89996462/liaotianhuashu.js` | App 专属 |
| Lifeviewer | 89996462 | 2.8.9 | `89996462/Lifeviewer.js` | App 专属 |
| Liftbear | chxm1023 | 未注明 | `Reheji/Liftbear.js` | RevenueCat（年付） |
| Lightune | chxm1023 | 未注明 | `Reheji/Lightune.js` | RevenueCat（年付） |
| 莉景天气 | 89996462 | 2.0.19 | `89996462/lijingtianqi.js` | App 专属 |
| LimiCam | chxm1023 | 未注明 | `Reheji/LimiCam.js` | RevenueCat（终身） |
| Limit | 小帽 | 未注明 | `XiaoMao/Limit.js` | RevenueCat |
| Limory | 小帽 | 未注明 | `XiaoMao/Limory.js` | RevenueCat |
| LinearityCurve | chxm1023 | 未注明 | `Collections/LinearityCurve.js` | App 专属 |
| LinearityCurve | chxm1023 | 未注明 | `Reheji/LinearityCurve.js` | RevenueCat（年付） |
| LineCamera | WeiGiegie | 15.7.4 | `WeiGiegie/LineCamera.js` | App 专属 |
| 灵敢提词器 | 89996462 | 3.0.1 | `89996462/lingganticiqi.js` | App 专属 |
| 灵敢足迹 | 89996462 | 3.0.0 | `89996462/lingganzuji.js` | App 专属 |
| 灵活计算器 | chxm1023 | 未注明 | `Reheji/linghuojisuanqi.js` | RevenueCat（年付） |
| Lingokids 儿童英语 | 89996462 | 7.101.0 | `89996462/Lingokids.js` | App 专属 |
| LingoPic | 小帽 | 未注明 | `XiaoMao/LingoPic.js` | RevenueCat |
| Lingvist-学习语言 | chxm1023 | 未注明 | `Collections/Lingvist.js` | App 专属 |
| 历史年轮 | WeiGiegie | 1.3.0 | `WeiGiegie/lishinianlun.js` | App 专属 |
| Lispod | WeiGiegie | 1.4.3 | `WeiGiegie/Lispod.js` | App 专属 |
| ListenLeap | WeiGiegie | 1.5.1 | `WeiGiegie/ListenLeap.js` | App 专属 |
| Lito | chxm1023 | 未注明 | `Reheji/Lito.js` | RevenueCat（其他） |
| 六个解锁合集（Collart | chxm1023 | 未注明 | `Collections/Collart.js` | App 专属 |
| 流利说 | 89996462 | 2.28.0 | `89996462/liulishuo.js` | App 专属 |
| Locket | ddgksf2013 | 未注明 | `Reheji/Locket.js` | RevenueCat（年付） |
| LockFlow | chxm1023 | 未注明 | `Reheji/LockFlow.js` | RevenueCat（终身） |
| LockMyApps | 小帽 | 未注明 | `XiaoMao/LockMyApps.js` | RevenueCat |
| Locknload | 小帽 | 未注明 | `XiaoMao/Locknload.js` | RevenueCat |
| LogoMaker | 小帽 | 未注明 | `XiaoMao/LogoMaker.js` | RevenueCat |
| Loopsie | afengye | 8.17.1 | `Afengye/Loopsie.js` | RevenueCat |
| Loopsie | chxm1023 | 未注明 | `Reheji/Loopsie.js` | RevenueCat（终身） |
| Loora | chxm1023 | 未注明 | `Reheji/Loora.js` | RevenueCat（年付） |
| Loud Alarm | 小帽 | 未注明 | `XiaoMao/LoudAlarm.js` | RevenueCat |
| Louder | 小帽 | 未注明 | `XiaoMao/Louder.js` | RevenueCat |
| LovepDF | 89996462 | 3.1.9 | `89996462/LovePDF.js` | App 专属 |
| Lr Adobe Lightroom | 89996462 | 7.5.2 | `89996462/Lightroom.js` | App 专属 |
| LuckPik | WeiGiegie | 1.0.0 | `WeiGiegie/LuckPik.js` | App 专属 |
| 撸了么 | chxm1023 | 未注明 | `Reheji/luleme.js` | RevenueCat（年付） |
| Lumoon | 小帽 | 未注明 | `XiaoMao/Lumoon.js` | RevenueCat |
| Lungy | 89996462 | 1.2.5 | `89996462/Lungy.js` | RevenueCat |
| 落格输入法 | 89996462 | 5.2.3 | `89996462/luogeshurufa.js` | iTunes 收据 |
| 录屏 | chxm1023 | 未注明 | `Collections/luping.js` | App 专属 |
| 陆琪讲故事 | chxm1023 | 未注明 | `Collections/luqijianggushi.js` | App 专属 |
| lUV 万能小组件 | 89996462 | 1.25.1 | `89996462/luv.js` | App 专属 |
| 录音笔记 | 89996462 | 31.2 | `89996462/luyinbiji.js` | App 专属 |
| 录音专家 | chxm1023 | 未注明 | `Collections/luyinzhuanjia.js` | App 专属 |
| 录音专业版 | 89996462 | 11.8.1 | `89996462/luyinzhuanyeban.js` | iTunes 收据 |
| 律动鼓点舞 | 89996462 | 1.6.6 | `89996462/lvdonggudianwu.js` | App 专属 |
| 旅途随身听 | chxm1023 | 未注明 | `Collections/lvtusuishenting.js` | App 专属 |
| 旅行订单生成专家 | 89996462 | 1.1 | `89996462/lvxingdingdanshengchengzhuanjia.js` | App 专属 |
| 旅行迹 | chxm1023 | 未注明 | `Reheji/lvxingji.js` | RevenueCat（终身） |
| MagicBoard | 小帽 | 未注明 | `XiaoMao/MagicBoard.js` | RevenueCat |
| MagicBook | 小帽 | 未注明 | `XiaoMao/MagicBook.js` | RevenueCat |
| MagicShot | 小帽 | 29 | `XiaoMao/MagicShot.js` | iTunes 收据 |
| MagicTiles3 | chxm1023 | 未注明 | `Reheji/MagicTiles3.js` | RevenueCat（年付） |
| Mainspring | 小帽 | 未注明 | `XiaoMao/Mainspring.js` | RevenueCat |
| 麦片屏幕翻译 | chxm1023 | 未注明 | `maipianpingmufanyi.js` | App 专属 |
| 马卡龙玩图 | 89996462 | 5.4.8 | `89996462/makalongwantu.js` | App 专属 |
| 玛卡相机 | 89996462 | 1.6.3 | `89996462/makaxiangji.js` | App 专属 |
| 玛卡写真馆 | 89996462 | 2.1.2 | `89996462/makaxiezhenguan.js` | App 专属 |
| 码立得•条码二维码批量神器 | chxm1023 | 未注明 | `Reheji/malidetiaomaerweimapiliangshenqi.js` | RevenueCat（其他） |
| Malloc VPN | chxm1023 | 未注明 | `Reheji/MallocVPN.js` | RevenueCat（年付） |
| 漫读-电子书阅读器 | ddm1026 | 未注明 | `Collections/mandu.js` | App 专属 |
| MangaAI | 小帽 | 未注明 | `XiaoMao/MangaAI.js` | RevenueCat |
| 忙豆听书 | WeiGiegie | 未注明 | `WeiGiegie/mangdoutingshu.js` | App 专属 |
| 忙豆听书请求体 | WeiGiegie | 未注明 | `WeiGiegie/mangdoutingshuqingqiuti.js` | App 专属 |
| 芒果TV | 89996462 | 7.5.2 | `89996462/mangguotv.js` | App 专属 |
| 芒果TV | WeiGiegie | 未注明 | `WeiGiegie/mangguotv.js` | App 专属 |
| 芒果TV请求头 | WeiGiegie | 未注明 | `WeiGiegie/mangguotvqingqiutou.js` | App 专属 |
| 漫画相机 | 89996462 | 1.5.1 | `89996462/manhuaxiangji.js` | App 专属 |
| 漫画园 | WeiGiegie | 1.7.2 | `WeiGiegie/manhuayuan.js` | App 专属 |
| 漫客宅 | WeiGiegie | 未注明 | `WeiGiegie/mankezhai.js` | App 专属 |
| 漫客宅请求头 | WeiGiegie | 未注明 | `WeiGiegie/mankezhaiqingqiutou.js` | App 专属 |
| 漫森短剧 | WeiGiegie | 1.0.10 | `WeiGiegie/mansenduanju.js` | App 专属 |
| 漫熊 | WeiGiegie | 6.5 | `WeiGiegie/manxiong.js` | App 专属 |
| 漫熊 | WeiGiegie | 6.5 | `WeiGiegie/manxiong2.js` | App 专属 |
| 漫芽糖 | WeiGiegie | 未注明 | `WeiGiegie/manyatang.js` | App 专属 |
| 毛豆爱成语 | 89996462 | 9999 | `89996462/maodouaichengyu.js` | App 专属 |
| 猫头鹰文件管理 | chxm1023 | 未注明 | `Collections/maotouyingwenjianguanli.js` | App 专属 |
| 猫眼票房 | 小帽 | 未注明 | `XiaoMao/maoyanpiaofang.js` | App 专属 |
| 猫语翻译器 | 89996462 | 6 | `89996462/maoyufanyiqi.js` | iTunes 收据 |
| Maple Calculator | chxm1023 | 未注明 | `Reheji/MapleCalculator.js` | RevenueCat（年付） |
| markbuy | ddgksf2013 | 未注明 | `Reheji/Markbuy.js` | RevenueCat（年付） |
| mark_cup | ddgksf2013 | 未注明 | `Reheji/MarkCup.js` | RevenueCat（年付） |
| Mate-翻译神器 | chxm1023 | 未注明 | `Collections/Mate.js` | App 专属 |
| MatrixClocca | chxm1023 | 未注明 | `Reheji/MatrixClocca.js` | RevenueCat（终身） |
| MealAIPlanner | 小帽 | 未注明 | `XiaoMao/MealAIPlanner.js` | RevenueCat |
| MealPlanner | 小帽 | 未注明 | `XiaoMao/MealPlanner.js` | RevenueCat |
| MedicationList | chxm1023 | 未注明 | `Reheji/MedicationList.js` | RevenueCat（其他） |
| 美化小组件 | WeiGiegie | 1.1.4 | `WeiGiegie/meihuaxiaozujian.js` | App 专属 |
| 每日 Bing 图 | 小帽 | 未注明 | `XiaoMao/meiribingtu.js` | App 专属 |
| 每日动态壁纸 | WeiGiegie | 2.3.8 | `WeiGiegie/meiridongtaibizhi.js` | App 专属 |
| 每日凯格尔 | 89996462 | 10.0.3 | `89996462/meirikaigeer.js` | App 专属 |
| 每日凯格尔 | 小帽 | 未注明 | `XiaoMao/meirikaigeer.js` | App 专属 |
| 每日水印相机 | WeiGiegie | 3.0.0 | `WeiGiegie/meirishuiyinxiangji.js` | App 专属 |
| 每日随机图片 | 小帽 | 未注明 | `XiaoMao/meirisuijitupian.js` | App 专属 |
| 每日新闻 60s | 小帽 | 未注明 | `XiaoMao/meirixinwen.js` | App 专属 |
| 每日新闻图片 | 小帽 | 未注明 | `XiaoMao/meirixinwentupian.js` | App 专属 |
| 每日一言 | 小帽 | 未注明 | `XiaoMao/meiriyiyan.js` | App 专属 |
| 每日一言（中英文） | 小帽 | 未注明 | `XiaoMao/meiriyiyanyingwen.js` | App 专属 |
| 每日油价 | 小帽 | 未注明 | `XiaoMao/meiriyoujia.js` | App 专属 |
| 每日语录 | 小帽 | 未注明 | `XiaoMao/meiriyulu.js` | App 专属 |
| 美容修颜相机 | 89996462 | 1.3 | `89996462/meirongxiuyanxiangji.js` | App 专属 |
| 美食日记 | chxm1023 | 未注明 | `Reheji/meishiriji.js` | RevenueCat（终身） |
| 每天读点故事 | WeiGiegie | 6.8.4 | `WeiGiegie/meitiandudiangushi.js` | App 专属 |
| 美图秀秀 | 89996462 | v9.6.20 | `89996462/meituxiuxiu.js` | App 专属 |
| 美颜相机 | chxm1023 | 未注明 | `Collections/meiyanxiangji.js` | App 专属 |
| 美妆日历 | 89996462 | 1.7.0 | `89996462/meizhuangrili.js` | RevenueCat |
| 美妆日历 | chxm1023 | 未注明 | `Reheji/meizhuangrili.js` | RevenueCat（终身） |
| 美妆相机 | 89996462 | 6.6.6 | `89996462/meizhuangxiangji.js` | RevenueCat |
| 美妆相机 | WeiGiegie | 6.6.6 | `WeiGiegie/meizhuangxiangji.js` | App 专属 |
| memo | chxm1023 | 未注明 | `Collections/memo.js` | App 专属 |
| Memokit | 小帽 | 未注明 | `XiaoMao/Memokit.js` | RevenueCat |
| memory helper | 89996462 | 4.4.1 | `89996462/MemoryHelper.js` | App 专属 |
| Memrise | 89996462 | 2022.10.25 | `89996462/Memrise.js` | App 专属 |
| Memz | 小帽 | 未注明 | `XiaoMao/Memz.js` | RevenueCat |
| 梦剧场 | 89996462 | 2.0.1 | `89996462/mengjuchang.js` | App 专属 |
| 萌客AI绘画 | chxm1023 | 未注明 | `Reheji/mengkeaihuihua.js` | RevenueCat（终身） |
| 萌配音 | WeiGiegie | 9.7 | `WeiGiegie/mengpeiyin.js` | App 专属 |
| 梦想短剧 | 89996462 | 14.0.2 | `89996462/mengxiangduanju.js` | App 专属 |
| MetadataEditor | ddgksf2013 | 未注明 | `Reheji/MetadataEditor.js` | RevenueCat（年付） |
| MetaSurf | chxm1023 | 未注明 | `Reheji/MetaSurf.js` | RevenueCat（终身） |
| mg中文版 | 89996462 | 1.3.1 | `89996462/mgzhongwenban.js` | App 专属 |
| 面包FM | WeiGiegie | 3.3.7 | `WeiGiegie/mianbaofm.js` | App 专属 |
| 面包拼图 | 89996462 | 1.0.9 | `89996462/mianbaopintu.js` | App 专属 |
| 面包拼图 | WeiGiegie | 1.0.9 | `WeiGiegie/mianbaopintu.js` | App 专属 |
| 免耽漫画 | 89996462 | 2.8.8 | `89996462/miandanmanhua.js` | App 专属 |
| 秒表计时器 | chxm1023 | 未注明 | `Reheji/miaobiaojishiqi.js` | RevenueCat（年付） |
| 秒解析 | chxm1023 | 未注明 | `Collections/miaojiexi.js` | App 专属 |
| 妙看 | 89996462 | 1.6.3 | `89996462/miaokan.js` | App 专属 |
| 喵组件 | chxm1023 | 未注明 | `Reheji/miaozujian.js` | RevenueCat（终身） |
| 谜底黑胶 | chxm1023 | 未注明 | `Reheji/midiheijiao.js` | RevenueCat（年付） |
| 谜底时钟 | 89996462 | 2.24.1 | `89996462/midishizhong.js` | iTunes 收据 |
| 谜底时钟 | chxm1023 | 未注明 | `Reheji/midishizhong.js` | RevenueCat（终身） |
| 谜底时钟 | chxm1023 | 未注明 | `Reheji/midishizhong2.js` | RevenueCat（终身） |
| 咪咕视频 | WeiGiegie | 6.5.30 | `WeiGiegie/migushipin.js` | App 专属 |
| 咪咕视频请求头 | WeiGiegie | 6.5.30 | `WeiGiegie/migushipinqingqiutou.js` | App 专属 |
| 咪咕音乐 | WeiGiegie | 7.48.0 | `WeiGiegie/miguyinyue.js` | App 专属 |
| 咪咕音乐 | WeiGiegie | 7.41.5 | `WeiGiegie/miguyinyue2.js` | App 专属 |
| 咪咕音乐 | WeiGiegie | 7.44.8 | `WeiGiegie/miguyinyue3.js` | App 专属 |
| 咪咕音乐请求头 | WeiGiegie | 7.48.0 | `WeiGiegie/miguyinyueqingqiutou.js` | App 专属 |
| MileStone | 小帽 | 未注明 | `XiaoMao/MileStone.js` | RevenueCat |
| MindBreathYoga | ddgksf2013 | 未注明 | `Reheji/MindBreathYoga.js` | RevenueCat（年付） |
| 迷你小组件全家桶 | 89996462 | 1.1.4 | `89996462/minixiaozujianquanjiatong.js` | App 专属 |
| Miraa | 小帽 | 未注明 | `XiaoMao/Miraa.js` | App 专属 |
| MirrorFit | 小帽 | 未注明 | `XiaoMao/MirrorFit.js` | RevenueCat |
| 蜜糖小剧场 | 89996462 | 1.0 | `89996462/mitangxiaojuchang.js` | App 专属 |
| Mix2 | 小帽 | 未注明 | `XiaoMao/Mix2.js` | App 专属 |
| Mixgram-图片拼接 | chxm1023 | 未注明 | `Collections/Mixgram.js` | App 专属 |
| MIX-滤镜大师 | chxm1023 | 未注明 | `Collections/MIX.js` | App 专属 |
| 蜜柚短剧 | 89996462 | 1.0.7 | `89996462/miyouduanju.js` | App 专属 |
| 蜜柚短剧 | WeiGiegie | 1.0.7 | `WeiGiegie/miyouduanju.js` | App 专属 |
| Mizframa | chxm1023 | 未注明 | `Reheji/Mizframa.js` | RevenueCat（终身） |
| 魔法消除笔 | 89996462 | 1.4 | `89996462/mofaxiaochubi.js` | App 专属 |
| 魔法消除鸭 | 89996462 | 1.1.4 | `89996462/mofaxiaochuya.js` | App 专属 |
| MOJi辞書 | 89996462 | 6.29.1 | `89996462/mojicishu.js` | App 专属 |
| 墨迹天气 | chxm1023 | 未注明 | `Collections/mojitianqi.js` | App 专属 |
| Mojo | chxm1023 | 未注明 | `Reheji/Mojo.js` | RevenueCat（年付） |
| MolyCam | 89996462 | 1.5.1 | `89996462/MolyCam.js` | App 专属 |
| Mondly: 33种语言轻松学 | 89996462 | 9.34.0 | `89996462/Mondly.js` | App 专属 |
| Monefy | afengye | 1.5.1 | `Afengye/Monefy.js` | RevenueCat |
| Monetal | ddgksf2013 | 未注明 | `Reheji/Monetal.js` | RevenueCat（年付） |
| money_manager | afengye | 1.2.9 | `Afengye/MoneyManager.js` | RevenueCat |
| Moneymate | 小帽 | 未注明 | `XiaoMao/Moneymate.js` | RevenueCat |
| Money Things记账 | chxm1023 | 未注明 | `Reheji/moneythingsjizhang.js` | RevenueCat（终身） |
| Money Wise | 小帽 | 未注明 | `XiaoMao/MoneyWise.js` | RevenueCat |
| MoodCan | 小帽 | 未注明 | `XiaoMao/MoodCan.js` | RevenueCat |
| Mood Scriber | 小帽 | 未注明 | `XiaoMao/MoodScriber.js` | RevenueCat |
| Moonlitt | chxm1023 | 未注明 | `Reheji/Moonlitt.js` | RevenueCat（其他） |
| Morphose | chxm1023 | 未注明 | `Reheji/Morphose.js` | RevenueCat（年付） |
| MortgageCalc | 小帽 | 未注明 | `XiaoMao/MortgageCalc.js` | RevenueCat |
| Motidayt | 小帽 | 未注明 | `XiaoMao/Motidayt.js` | RevenueCat |
| 摩途 | WeiGiegie | 4.1.0 | `WeiGiegie/motu.js` | App 专属 |
| 魔图 | 89996462 | 4.0.2 | `89996462/motu.js` | App 专属 |
| 缪思记（muses） | 89996462 | 1.1.0 | `89996462/muses.js` | RevenueCat |
| 魔音变声器 | WeiGiegie | 2.0.8 | `WeiGiegie/moyinbianshengqi.js` | App 专属 |
| 魔音工坊 | chxm1023 | 未注明 | `Collections/moyingongfang.js` | App 专属 |
| 摸鱼 | chxm1023 | 未注明 | `Reheji/moyu.js` | RevenueCat（终身） |
| MOZE记账 | chxm1023 | 未注明 | `Reheji/mozejizhang.js` | RevenueCat（年付） |
| 墨摘 | WeiGiegie | 1.2.7 | `WeiGiegie/mozhai.js` | App 专属 |
| 墨摘请求头 | WeiGiegie | 1.2.7 | `WeiGiegie/mozhaiqingqiutou.js` | App 专属 |
| MP3Converter | 小帽 | 1 | `XiaoMao/MP3Converter.js` | iTunes 收据 |
| MP3转换器 | 小帽 | 未注明 | `XiaoMao/mp3zhuanhuanqi.js` | RevenueCat |
| MP3转换助手 | WeiGiegie | 1.7.6 | `WeiGiegie/mp3zhuanhuanzhushou.js` | App 专属 |
| 目标地图 | chxm1023 | 未注明 | `Reheji/mubiaoditu.js` | RevenueCat（终身） |
| 幕布 | 89996462 | 2.28.5 | `89996462/mubu.js` | App 专属 |
| MuCase | chxm1023 | 未注明 | `Reheji/MuCase.js` | RevenueCat（其他） |
| 木工宝典 | chxm1023 | 未注明 | `Collections/mugongbaodian.js` | App 专属 |
| Musclemate | 小帽 | 未注明 | `XiaoMao/Musclemate.js` | RevenueCat |
| MusicBox | ddgksf2013 | 未注明 | `Reheji/MusicBox.js` | RevenueCat（终身） |
| MusicDownload | 小帽 | 未注明 | `XiaoMao/MusicDownload.js` | RevenueCat |
| Musicia | chxm1023 | 未注明 | `Reheji/Musicia.js` | RevenueCat（年付） |
| MusicMate | chxm1023 | 未注明 | `Reheji/MusicMate.js` | RevenueCat（终身） |
| MusicPutty | chxm1023 | 未注明 | `Reheji/MusicPutty.js` | RevenueCat（年付） |
| MusicTag | 小帽 | 4 | `XiaoMao/MusicTag.js` | iTunes 收据 |
| My Diary | afengye | 1.10.4 | `Afengye/MyDiary.js` | RevenueCat |
| My Jump Lab | ddgksf2013 | 未注明 | `Reheji/MyJumpLab.js` | RevenueCat（年付） |
| MyPianist乐谱 | chxm1023 | 未注明 | `Reheji/mypianistlepu.js` | RevenueCat（年付） |
| MySticker | afengye | 3.4 | `Afengye/MySticker.js` | RevenueCat |
| MyTime | 小帽 | 未注明 | `XiaoMao/MyTime.js` | RevenueCat |
| My Vinyl | 小帽 | 未注明 | `XiaoMao/MyVinyl.js` | RevenueCat |
| 乃糖小组件 | 89996462 | 1.1.9 | `89996462/naitangxiaozujian.js` | App 专属 |
| 乃糖小组件 | chxm1023 | 未注明 | `Collections/naitangxiaozujian.js` | App 专属 |
| 奶油桌面 | 89996462 | 3.3.1 | `89996462/naiyouzhuomian.js` | App 专属 |
| 纳米盒 | WeiGiegie | 13.4 | `WeiGiegie/namihe.js` | App 专属 |
| 南瓜电影 | WeiGiegie | 9.5.2 | `WeiGiegie/nanguadianying.js` | App 专属 |
| 拿捏驾考 | 89996462 | 1.1.7 | `89996462/naniejiakao.js` | App 专属 |
| 拿捏驾考 | WeiGiegie | 1.1.7 | `WeiGiegie/naniejiakao.js` | App 专属 |
| 拿捏驾考 | 小帽 | 未注明 | `XiaoMao/naniejiakao.js` | App 专属 |
| 闹钟 | 89996462 | 2.0.0 | `89996462/naozhong.js` | App 专属 |
| NASCTL | 小帽 | 未注明 | `XiaoMao/NASCTL.js` | RevenueCat |
| 嗯背 | 小帽 | 未注明 | `XiaoMao/enbei.js` | RevenueCat |
| NeatNook | ddgksf2013 | 未注明 | `Reheji/NeatNook.js` | RevenueCat（终身） |
| Nebuwall | chxm1023 | 未注明 | `Reheji/Nebuwall.js` | RevenueCat（其他） |
| NexCam | 89996462 | 未注明 | `89996462/NexCam.js` | App 专属 |
| NFC标签读写器工具 | chxm1023 | 未注明 | `Collections/nfcbiaoqianduxieqigongju.js` | App 专属 |
| 年度节日 | 小帽 | 未注明 | `XiaoMao/niandujieri.js` | App 专属 |
| 年轮3 | 89996462 | 7.5.3 | `89996462/nianlun.js` | iTunes 收据 |
| NiceDay | WeiGiegie | 3.9.16 | `WeiGiegie/NiceDay.js` | App 专属 |
| Nicegram | chxm1023 | 未注明 | `Collections/Nicegram.js` | App 专属 |
| 捏词 | WeiGiegie | 1.2.0 | `WeiGiegie/nieci.js` | App 专属 |
| Night Vision | 小帽 | 未注明 | `XiaoMao/NightVision.js` | 其他（Apphud） |
| 柠檬轻断食 | 89996462 | 2.7.3 | `89996462/ningmengqingduanshi.js` | App 专属 |
| 柠檬小剧场 | WeiGiegie | 1.3.3 | `WeiGiegie/ningmengxiaojuchang.js` | App 专属 |
| 你推陪你背单词 | WeiGiegie | 2.2.0 | `WeiGiegie/nituipeinibeidanci.js` | App 专属 |
| 牛健康 | WeiGiegie | 4.11.0 | `WeiGiegie/niujiankang.js` | App 专属 |
| 牛津高阶词典第十版 | 89996462 | 未注明 | `89996462/niujingaojiecidiandishiban.js` | App 专属 |
| 牛牛短剧 | WeiGiegie | 1.5.8 | `WeiGiegie/niuniuduanju.js` | App 专属 |
| NoFusion | chxm1023 | 未注明 | `Reheji/NoFusion.js` | RevenueCat（终身） |
| Notability | 89996462 | 11.7.1 | `89996462/Notability.js` | App 专属 |
| Notability | 89996462 | 14.0.2 | `89996462/Notability2.js` | App 专属 |
| NotBoring | chxm1023 | 未注明 | `Reheji/NotBoring.js` | RevenueCat（年付） |
| NotBoring | chxm1023 | 未注明 | `Reheji/NotBoring2.js` | RevenueCat（年付） |
| NotBoring | chxm1023 | 未注明 | `Reheji/NotBoring3.js` | RevenueCat（年付） |
| NotBoring | chxm1023 | 未注明 | `Reheji/NotBoring4.js` | RevenueCat（年付） |
| NotBoring | chxm1023 | 未注明 | `Reheji/NotBoring5.js` | RevenueCat（年付） |
| Noted | chxm1023 | 未注明 | `Collections/Noted.js` | App 专属 |
| Noted 录音笔记 | 89996462 | 103.2.1 | `89996462/noted.js` | iTunes 收据 |
| Noted录音笔记软件 | chxm1023 | 未注明 | `Collections/Noted.js` | App 专属 |
| Notedrafts | ddgksf2013 | 未注明 | `Reheji/Notedrafts.js` | RevenueCat（年付） |
| NoteMark | chxm1023 | 未注明 | `Reheji/NoteMark.js` | RevenueCat（其他） |
| NotePlan | chxm1023 | 未注明 | `Reheji/NotePlan.js` | RevenueCat（年付） |
| Notezy | 小帽 | 未注明 | `XiaoMao/Notezy.js` | RevenueCat |
| Noto | chxm1023 | 未注明 | `Reheji/Noto.js` | RevenueCat（年付） |
| No Treat Today | 小帽 | 未注明 | `XiaoMao/NoTreatToday.js` | RevenueCat |
| Now冥想-助眠白噪音乐 | 89996462 | 4.4.6 | `89996462/Now.js` | App 专属 |
| nPtt | chxm1023 | 未注明 | `Reheji/NPtt.js` | RevenueCat（年付） |
| ntPlayer | chxm1023 | 未注明 | `Reheji/NtPlayer.js` | RevenueCat（终身） |
| 暖悦 | WeiGiegie | 1.7.1 | `WeiGiegie/nuanyue.js` | App 专属 |
| Obscura | chxm1023 | 未注明 | `Reheji/Obscura.js` | RevenueCat（年付） |
| Obscura | chxm1023 | 未注明 | `Reheji/Obscura2.js` | RevenueCat（终身） |
| Ochi | ddgksf2013 | 未注明 | `Reheji/Ochi.js` | RevenueCat（年付） |
| OffScreen | chxm1023 | 未注明 | `Reheji/OffScreen.js` | RevenueCat（终身） |
| Ohms | 小帽 | 未注明 | `XiaoMao/Ohms.js` | RevenueCat |
| Old Roll 复古相机 | 89996462 | 4.2.1 | `89996462/oldroll.js` | iTunes 收据 |
| OmniWidgets | chxm1023 | 未注明 | `Reheji/OmniWidgets.js` | RevenueCat（终身） |
| One4Wall | chxm1023 | 未注明 | `Reheji/One4Wall.js` | RevenueCat（终身） |
| OneBox | afengye | 2.2.1 | `Afengye/OneBox.js` | RevenueCat |
| OneBox | ddgksf2013 | 未注明 | `Reheji/OneBox.js` | RevenueCat（年付） |
| OneChoose | chxm1023 | 未注明 | `Reheji/OneChoose.js` | RevenueCat（终身） |
| OneClear透明小组件 | chxm1023 | 未注明 | `Reheji/onecleartoumingxiaozujian.js` | RevenueCat（终身） |
| OneGrow | chxm1023 | 未注明 | `Reheji/OneGrow.js` | RevenueCat（终身） |
| OneList | chxm1023 | 未注明 | `Reheji/OneList.js` | RevenueCat（终身） |
| OneMockup | chxm1023 | 未注明 | `Reheji/OneMockup.js` | RevenueCat（年付） |
| OneScreen截图带壳 | chxm1023 | 未注明 | `Reheji/onescreenjietudaike.js` | RevenueCat（终身） |
| OneTap | chxm1023 | 未注明 | `Reheji/OneTap.js` | RevenueCat（终身） |
| OneTodo | chxm1023 | 未注明 | `Reheji/OneTodo.js` | RevenueCat（终身） |
| OneWidget | chxm1023 | 未注明 | `Reheji/OneWidget.js` | RevenueCat（终身） |
| OneYear | 小帽 | 未注明 | `XiaoMao/OneYear.js` | RevenueCat |
| Ooga | ddgksf2013 | 未注明 | `Reheji/Ooga.js` | RevenueCat（年付） |
| OpenGPT | 小帽 | 未注明 | `XiaoMao/OpenGPT.js` | RevenueCat |
| OpenLove | 小帽 | 未注明 | `XiaoMao/OpenLove.js` | App 专属 |
| OpsCat | chxm1023 | 未注明 | `Reheji/OpsCat.js` | RevenueCat（终身） |
| Opus | chxm1023 | 未注明 | `Reheji/Opus.js` | RevenueCat（年付） |
| Opus | chxm1023 | 未注明 | `Reheji/Opus2.js` | RevenueCat（终身） |
| opusvpn | afengye | 1.8.6 | `Afengye/OpusVPN.js` | RevenueCat |
| OrbitFast | chxm1023 | 未注明 | `Reheji/OrbitFast.js` | RevenueCat（终身） |
| OtterLife-健康分析 | chxm1023 | 未注明 | `Collections/OtterLife.js` | App 专属 |
| Overdue | afengye | 5.5.1 | `Afengye/Overdue.js` | RevenueCat |
| Owl Recorder | chxm1023 | 未注明 | `Reheji/OwlRecorder.js` | RevenueCat（终身） |
| 喔知Wozi背单词 | chxm1023 | 未注明 | `Reheji/ozhiwozibeidanci.js` | RevenueCat（终身） |
| Package Tracker | 小帽 | 未注明 | `XiaoMao/PackageTracker.js` | RevenueCat |
| Packy | 小帽 | 未注明 | `XiaoMao/Packy.js` | RevenueCat |
| paf 转换器 | 89996462 | 1.0.8 | `89996462/pafzhuanhuanqi.js` | RevenueCat |
| 排班日历-倒班助手 | chxm1023 | 未注明 | `Collections/paibanrili.js` | App 专属 |
| 派克 | chxm1023 | 未注明 | `Reheji/paike.js` | RevenueCat（年付） |
| 拍照识物 | WeiGiegie | 1.1.5 | `WeiGiegie/paizhaoshiwu.js` | App 专属 |
| 拍照搜题 | WeiGiegie | 1.0.6 | `WeiGiegie/paizhaosouti.js` | App 专属 |
| Pajicam | 89996462 | 未注明 | `89996462/Pajicam.js` | App 专属 |
| Paku | ddgksf2013 | 未注明 | `Reheji/Paku.js` | RevenueCat（年付） |
| Panda Widget | 89996462 | 2.1.0 | `89996462/PandaWidget.js` | iTunes 收据 |
| Pantry Check | chxm1023 | 未注明 | `Reheji/PantryCheck.js` | RevenueCat（其他） |
| Paper | chxm1023 | 未注明 | `Reheji/Paper.js` | RevenueCat（终身） |
| ParaphraserAi | 小帽 | 未注明 | `XiaoMao/ParaphraserAi.js` | RevenueCat |
| PassportID | 小帽 | 未注明 | `XiaoMao/PassportID.js` | RevenueCat |
| PassWallet | 小帽 | 未注明 | `XiaoMao/PassWallet.js` | RevenueCat |
| PastePal | ddgksf2013 | 未注明 | `Reheji/PastePal.js` | RevenueCat（年付） |
| Pathora | 小帽 | 未注明 | `XiaoMao/Pathora.js` | RevenueCat |
| PDF Converter Swift | afengye | 1.0.54 | `Afengye/PDFConverterSwift.js` | RevenueCat |
| PDF Expert | 89996462 | v7.11.0 | `89996462/PDFExpert.js` | App 专属 |
| PDFMaker | chxm1023 | 未注明 | `Reheji/PDFMaker.js` | RevenueCat（终身） |
| PDFnStamp | 小帽 | 未注明 | `XiaoMao/PDFnStamp.js` | RevenueCat |
| PdfReadAloud | 小帽 | 未注明 | `XiaoMao/PdfReadAloud.js` | RevenueCat |
| PDFScanner | afengye | 2.7.76 | `Afengye/PDFScanner.js` | RevenueCat |
| PDFtoJPG | 小帽 | 未注明 | `XiaoMao/PDFtoJPG.js` | RevenueCat |
| PDF Viewerr | chxm1023 | 未注明 | `Reheji/PDFViewerr.js` | RevenueCat（年付） |
| PDF转换器 | chxm1023 | 未注明 | `Reheji/pdfzhuanhuanqi.js` | RevenueCat（终身） |
| Pdose | 小帽 | 未注明 | `XiaoMao/Pdose.js` | RevenueCat |
| PeakVisor | 89996462 | 4.84 | `89996462/PeakVisor.js` | iTunes 收据 |
| Pedometer | 89996462 | 5.4.3 | `89996462/Pedometer.js` | RevenueCat |
| Pedometer | afengye | 6.1 | `Afengye/Pedometer.js` | RevenueCat |
| 配音 | 89996462 | 1.6 | `89996462/peiyin.js` | App 专属 |
| 配音 | chxm1023 | 未注明 | `Collections/peiyin.js` | App 专属 |
| 配音 | WeiGiegie | 1.6 | `WeiGiegie/peiyin.js` | App 专属 |
| 配音师 | WeiGiegie | 4.1.1 | `WeiGiegie/peiyinshi.js` | App 专属 |
| 配音秀 | chxm1023 | 未注明 | `Collections/peiyinxiu.js` | App 专属 |
| Penbook | chxm1023 | 未注明 | `Reheji/Penbook.js` | RevenueCat（终身） |
| Penbook02 | afengye | 6.8.3 | `Afengye/Penbook02.js` | RevenueCat |
| Percento 个人资产轻松管理 | chxm1023 | 未注明 | `Reheji/percentogerenzichanqingsongguanli.js` | RevenueCat（终身） |
| Perfect365-完美365 | chxm1023 | 未注明 | `Collections/Perfect365.js` | App 专属 |
| Period Calendar | afengye | 10.7.4 | `Afengye/PeriodCalendar.js` | RevenueCat |
| Period Calendar | ddgksf2013 | 未注明 | `Reheji/PeriodCalendar.js` | RevenueCat（年付） |
| Persona | afengye | 1.11.22 | `Afengye/Persona.js` | RevenueCat |
| Persona | chxm1023 | 未注明 | `Reheji/Persona.js` | RevenueCat（终身） |
| Personal Best | chxm1023 | 未注明 | `Reheji/PersonalBest.js` | RevenueCat（年付） |
| Phoenix | 小帽 | 未注明 | `XiaoMao/Phoenix.js` | RevenueCat |
| Pholorize | 小帽 | 未注明 | `XiaoMao/Pholorize.js` | RevenueCat |
| Phomo | 小帽 | 未注明 | `XiaoMao/Phomo.js` | RevenueCat |
| Phorase | chxm1023 | 未注明 | `Reheji/Phorase.js` | RevenueCat（终身） |
| PhotoBlur | 小帽 | 4 | `XiaoMao/PhotoBlur.js` | iTunes 收据 |
| Photo Caption Generator Ai | 小帽 | 未注明 | `XiaoMao/PhotoCaptionGeneratorAi.js` | RevenueCat |
| PhotoDance-AI舞蹈视频 | chxm1023 | 未注明 | `Collections/PhotoDance.js` | App 专属 |
| PhotoDeleteSwipe | chxm1023 | 未注明 | `Reheji/PhotoDeleteSwipe.js` | RevenueCat（终身） |
| PhotoGrid 照片拼图 | 89996462 | 8.4.02 | `89996462/photogrid.js` | App 专属 |
| PhotoMapper | chxm1023 | 未注明 | `Reheji/PhotoMapper.js` | RevenueCat（终身） |
| PhotoMark | ddgksf2013 | 未注明 | `Reheji/PhotoMark.js` | RevenueCat（终身） |
| Photomator | chxm1023 | 未注明 | `Reheji/Photomator.js` | RevenueCat（终身） |
| Photon相机 | chxm1023 | 未注明 | `Reheji/photonxiangji.js` | RevenueCat（终身） |
| PhotoQR | 小帽 | 未注明 | `XiaoMao/PhotoQR.js` | RevenueCat |
| PhotoRoom | chxm1023 | 未注明 | `Reheji/PhotoRoom.js` | RevenueCat（年付） |
| PhotoRoute | 小帽 | 1 | `XiaoMao/PhotoRoute.js` | RevenueCat |
| Photoshop Express | 89996462 | 22.35.0 | `89996462/Photoshop.js` | App 专属 |
| PhotoSlip-照片清理大师 | chxm1023 | 未注明 | `Collections/PhotoSlip.js` | App 专属 |
| PhotoSwiper | 小帽 | 未注明 | `XiaoMao/PhotoSwiper.js` | RevenueCat |
| PhotoX | chxm1023 | 未注明 | `Reheji/PhotoX.js` | RevenueCat（年付） |
| Pianolytics | chxm1023 | 未注明 | `Reheji/Pianolytics.js` | RevenueCat（年付） |
| 片羽集照片日记软件 | WeiGiegie | 1.6.31 | `WeiGiegie/pianyujizhaopianrijiruanjian.js` | App 专属 |
| 票恋 | chxm1023 | 未注明 | `Reheji/piaolian.js` | RevenueCat（终身） |
| PicChat | chxm1023 | 未注明 | `Reheji/PicChat.js` | RevenueCat（年付） |
| PicLoom | chxm1023 | 未注明 | `Reheji/PicLoom.js` | RevenueCat（其他） |
| picma | WeiGiegie | 2.8.8 | `WeiGiegie/picma.js` | App 专属 |
| PicPure | chxm1023 | 未注明 | `Reheji/PicPure.js` | RevenueCat（其他） |
| Picsart美易_图片视频编辑器 | chxm1023 | 未注明 | `Collections/picsartmeiyi.js` | App 专属 |
| PicSeek | chxm1023 | 未注明 | `Reheji/PicSeek.js` | RevenueCat（终身） |
| Picsew | XiaoMao | 3.9.5 | `Picsew.js` | iTunes 收据 |
| PicSweepAiCleaner | 小帽 | 未注明 | `XiaoMao/PicSweepAiCleaner.js` | RevenueCat |
| Pillow | chxm1023 | 未注明 | `Reheji/Pillow.js` | RevenueCat（年付） |
| 拼豆图纸 | chxm1023 | 未注明 | `Reheji/pindoutuzhi.js` | RevenueCat（终身） |
| 屏幕套壳 | chxm1023 | 未注明 | `Reheji/pingmutaoke.js` | RevenueCat（终身） |
| PinkPikoDiary | 小帽 | 未注明 | `XiaoMao/PinkPikoDiary.js` | RevenueCat |
| Pins | chxm1023 | 未注明 | `Reheji/Pins.js` | RevenueCat（年付） |
| 拼图趣 | chxm1023 | 未注明 | `Collections/pintuqu.js` | App 专属 |
| 拼图软件 | chxm1023 | 未注明 | `Reheji/pinturuanjian.js` | RevenueCat（其他） |
| 拼图鸭相机 | 89996462 | 2.4.7 | `89996462/pintuyaxiangji.js` | App 专属 |
| PipDoc | chxm1023 | 未注明 | `Reheji/PipDoc.js` | RevenueCat（终身） |
| 皮皮鸭表情包 | WeiGiegie | 1.1.7 | `WeiGiegie/pipiyabiaoqingbao.js` | App 专属 |
| Pix | 小帽 | 未注明 | `XiaoMao/Pix.js` | RevenueCat |
| pixart ai photo editor | WeiGiegie | 1.1.0 | `WeiGiegie/pixartaiphotoeditor.js` | App 专属 |
| Pixelance） | chxm1023 | 未注明 | `Collections/Pixelance.js` | App 专属 |
| Pixelmator Photo | 89996462 | 2.0.14 | `89996462/Pixelmator.js` | RevenueCat |
| pixel_me_tokyo | afengye | 4.7.1 | `Afengye/PixelMeTokyo.js` | RevenueCat |
| PixelPic | 小帽 | 未注明 | `XiaoMao/PixelPic.js` | RevenueCat |
| Pixelsense修图 | chxm1023 | 未注明 | `Reheji/pixelsensexiutu.js` | RevenueCat（终身） |
| Pixelup AI照片增强器 | chxm1023 | 未注明 | `Collections/Pixelup.js` | App 专属 |
| PixImagine | chxm1023 | 未注明 | `Reheji/PixImagine.js` | RevenueCat（其他） |
| Plan | ddgksf2013 | 未注明 | `Reheji/Plan.js` | RevenueCat（年付） |
| Planny | afengye | 10.0.17 | `Afengye/Planny.js` | RevenueCat |
| Planny | ddgksf2013 | 未注明 | `Reheji/Planny.js` | RevenueCat（年付） |
| PodAI | 小帽 | 未注明 | `XiaoMao/PodAI.js` | RevenueCat |
| Pokecut 快咔 | 89996462 | 4.2.9 | `89996462/pokecut.js` | iTunes 收据 |
| pokenote | afengye | 2.0.2 | `Afengye/Pokenote.js` | RevenueCat |
| 泼辣修图 | chxm1023 | 未注明 | `Collections/polaxiutu.js` | App 专属 |
| Poop Log | 小帽 | 未注明 | `XiaoMao/PoopLog.js` | RevenueCat |
| PortfolioX | 小帽 | 未注明 | `XiaoMao/PortfolioX.js` | RevenueCat |
| Positude | 小帽 | 未注明 | `XiaoMao/Positude.js` | RevenueCat |
| Posture Letics | 小帽 | 未注明 | `XiaoMao/PostureLetics.js` | RevenueCat |
| Powo | chxm1023 | 未注明 | `Reheji/Powo.js` | RevenueCat（终身） |
| 破竹S | WeiGiegie | 2.3.6 | `WeiGiegie/pozhus.js` | App 专属 |
| Praxis | 小帽 | 未注明 | `XiaoMao/Praxis.js` | RevenueCat |
| Precious | ddgksf2013 | 未注明 | `Reheji/Precious.js` | RevenueCat（年付） |
| PrettyUp 视频美化 | 89996462 | 5.2 | `89996462/prettyup.js` | iTunes 收据 |
| ProCam相机 | chxm1023 | 未注明 | `Reheji/procamxiangji.js` | RevenueCat（终身） |
| ProgressSnapshot | 小帽 | 未注明 | `XiaoMao/ProgressSnapshot.js` | RevenueCat |
| Propel | 小帽 | 未注明 | `XiaoMao/Propel.js` | RevenueCat |
| PROVPN | afengye | 2.0.1 | `Afengye/ProVPN.js` | RevenueCat |
| P图大神 | 89996462 | 2.0.7 | `89996462/ptudashen.js` | App 专属 |
| P图大神 | WeiGiegie | 2.0.7 | `WeiGiegie/ptudashen.js` | App 专属 |
| PumpingTracker | 小帽 | 未注明 | `XiaoMao/PumpingTracker.js` | RevenueCat |
| PureLibro | chxm1023 | 未注明 | `Reheji/PureLibro.js` | RevenueCat（年付） |
| Pure账本 | chxm1023 | 未注明 | `Reheji/purezhangben.js` | RevenueCat（终身） |
| Purgo | 小帽 | 未注明 | `XiaoMao/Purgo.js` | RevenueCat |
| 普通话测试 | 89996462 | 5.9.20 | `89996462/putonghuaceshi.js` | App 专属 |
| Puuush | 小帽 | 未注明 | `XiaoMao/Puuush.js` | RevenueCat |
| Pwrlog | 小帽 | 未注明 | `XiaoMao/Pwrlog.js` | RevenueCat |
| 千本笔记 | 89996462 | 1.30.0 | `89996462/qianbenbiji.js` | iTunes 收据 |
| 千变语言 | WeiGiegie | 未注明 | `WeiGiegie/qianbianyuyan.js` | App 专属 |
| 钱迹 | 89996462 | 3.0.6 | `89996462/qianji.js` | App 专属 |
| 千亦视界 | WeiGiegie | 未注明 | `WeiGiegie/qianyishijie.js` | App 专属 |
| 且听 | WeiGiegie | 1.0.85 | `WeiGiegie/qieting.js` | App 专属 |
| 起伏 | chxm1023 | 未注明 | `Collections/qifu.js` | App 专属 |
| Qi卡片便签 | chxm1023 | 未注明 | `Reheji/qikapianbianqian.js` | RevenueCat（终身） |
| 奇妙组件 | chxm1023 | 未注明 | `Reheji/qimiaozujian.js` | RevenueCat（终身） |
| 青橙日记全家桶 | 89996462 | 8.2 | `89996462/qingchengrijiquanjiatong.js` | App 专属 |
| 轻记 | WeiGiegie | 未注明 | `WeiGiegie/qingji.js` | App 专属 |
| 青龙面板 | chxm1023 | 未注明 | `Reheji/qinglongmianban.js` | RevenueCat（终身） |
| 情侣性爱游戏 | chxm1023 | 未注明 | `Reheji/qinglvxingaiyouxi.js` | RevenueCat（年付） |
| 青柠设计-P图抠图海报 | chxm1023 | 未注明 | `Collections/qingningsheji.js` | App 专属 |
| 轻闪PDF | chxm1023 | 未注明 | `Collections/qingshanpdf.js` | App 专属 |
| 轻图 | 89996462 | 3.5.8 | `89996462/qingtu.js` | App 专属 |
| 轻图 | chxm1023 | 未注明 | `Collections/qingtu.js` | App 专属 |
| 青蛙 Todo | 89996462 | 2.5.4 | `89996462/qingwatodo.js` | App 专属 |
| 轻颜相机 | 89996462 | v4.3.1 | `89996462/qingyanxiangji.js` | App 专属 |
| 轻音社 | WeiGiegie | 1.1.4 | `WeiGiegie/qingyinshe.js` | App 专属 |
| 亲戚计算器 | chxm1023 | 未注明 | `Collections/qinqijisuanqi.js` | App 专属 |
| Qi水印 | chxm1023 | 未注明 | `Reheji/qishuiyin.js` | RevenueCat（终身） |
| 汽水音乐 | ddgksf2013 | 未注明 | `QiShuiYinYue.snippet` | App 专属 |
| 汽修宝典 | 小帽 | 未注明 | `XiaoMao/qixiubaodian.js` | App 专属 |
| Qi应用海报 | chxm1023 | 未注明 | `Reheji/qiyingyonghaibao.js` | RevenueCat（终身） |
| 奇游手游加速器 | WeiGiegie | 3.5.4 | `WeiGiegie/qiyoushouyoujiasuqi.js` | App 专属 |
| QQ阅读 | WeiGiegie | 8.0.81 | `WeiGiegie/qqyuedu.js` | App 专属 |
| QRGenie | 小帽 | 未注明 | `XiaoMao/QRGenie.js` | RevenueCat |
| QRScanner | 小帽 | 未注明 | `XiaoMao/QRScanner.js` | RevenueCat |
| 全本小说&淘小说 | WeiGiegie | 2.3.1,2.8.2 | `WeiGiegie/quanbenxiaoshuotaoxiaoshuo.js` | App 专属 |
| 全家桶 | 89996462 | 4.7.1 | `89996462/quanjiatong.js` | iTunes 收据 |
| 全局扫描 | WeiGiegie | 1.0.1 | `WeiGiegie/quanjusaomiao.js` | App 专属 |
| 全民幸福社 | 89996462 | 5.4.1 | `89996462/quanminxingfushe.js` | App 专属 |
| 全民幸福舍 | WeiGiegie | 未注明 | `WeiGiegie/quanminxingfushe.js` | App 专属 |
| 全民幸福舍请求体 | WeiGiegie | 未注明 | `WeiGiegie/quanminxingfusheqingqiuti.js` | App 专属 |
| 全能二维码 | 89996462 | 2.2 | `89996462/quannengerweima.js` | App 专属 |
| 全能画板2 | chxm1023 | 未注明 | `Reheji/quannenghuaban2.js` | RevenueCat（年付） |
| 全能扫描王 | WeiGiegie | 3.2.7 | `WeiGiegie/quannengsaomiaowang.js` | App 专属 |
| 全球潮汐 | WeiGiegie | 5.2.0 | `WeiGiegie/quanqiuchaoxi.js` | App 专属 |
| 全网热门短剧 | WeiGiegie | 1.2 | `WeiGiegie/quanwangremenduanju.js` | App 专属 |
| Quazzl | 小帽 | 未注明 | `XiaoMao/Quazzl.js` | RevenueCat |
| 去除亲友卡 | chxm1023 | 未注明 | `Collections/caiyuntianqi.js` | App 专属 |
| 去除悬浮模块 | chxm1023 | 未注明 | `Collections/caiyuntianqi.js` | App 专属 |
| quicut | WeiGiegie | 1.0.1 | `WeiGiegie/quicut.js` | App 专属 |
| Quike 全能小组件 | 89996462 | 7.3 | `89996462/quike.js` | App 专属 |
| Quin | 89996462 | 103.2.1 | `89996462/Quin.js` | App 专属 |
| Quitnow | chxm1023 | 未注明 | `Reheji/Quitnow.js` | RevenueCat（终身） |
| quitnow | afengye | 10.2.0 | `Afengye/Quitnow.js` | RevenueCat |
| Quit Smoking | 小帽 | 未注明 | `XiaoMao/QuitSmoking2.js` | RevenueCat |
| QuitSmoking | 小帽 | 未注明 | `XiaoMao/QuitSmoking.js` | RevenueCat |
| Quitzilla | afengye | 1.2 | `Afengye/Quitzilla.js` | RevenueCat |
| 趣铃 | 89996462 | 2.1.3 | `89996462/quling.js` | App 专属 |
| 去留 | chxm1023 | 未注明 | `Reheji/quliu.js` | RevenueCat（终身） |
| Quotivate | 小帽 | 未注明 | `XiaoMao/Quotivate.js` | RevenueCat |
| 趣拍 | 89996462 | 1.0 | `89996462/qupai.js` | App 专属 |
| 趣配音 | WeiGiegie | 7.36.5 | `WeiGiegie/qupeiyin.js` | App 专属 |
| 去刷短剧 | WeiGiegie | 1.0.3 | `WeiGiegie/qushuaduanju.js` | App 专属 |
| 趣颜 | 89996462 | 1.2.8 | `89996462/quyan.js` | App 专属 |
| 取证相机 | 89996462 | 未注明 | `89996462/quzhengxiangji.js` | App 专属 |
| 趣制作 | 89996462 | 2.2.6 | `89996462/quzhizuo.js` | App 专属 |
| Race Widgets | 小帽 | 未注明 | `XiaoMao/RaceWidgets.js` | RevenueCat |
| RainViewer天气预报 | chxm1023 | 未注明 | `Collections/RainViewer.js` | App 专属 |
| Ramble | afengye | 1.1.1 | `Afengye/Ramble.js` | RevenueCat |
| RarZip | 小帽 | 未注明 | `XiaoMao/RarZip.js` | 其他（Apphud） |
| Rate Punks | 小帽 | 未注明 | `XiaoMao/RatePunks.js` | RevenueCat |
| Rats Project | ddgksf2013 | 未注明 | `Reheji/RatsProject.js` | RevenueCat（年付） |
| Raven | 小帽 | 未注明 | `XiaoMao/Raven.js` | RevenueCat |
| RayWatermark | 小帽 | 未注明 | `XiaoMao/RayWatermark.js` | RevenueCat |
| ReadBay | 小帽 | 未注明 | `XiaoMao/ReadBay.js` | RevenueCat |
| ReadCopilot | chxm1023 | 未注明 | `Reheji/ReadCopilot.js` | RevenueCat（年付） |
| reader | ddgksf2013 | 未注明 | `Reheji/Reader.js` | RevenueCat（年付） |
| Reading Tracker | 小帽 | 未注明 | `XiaoMao/ReadingTracker.js` | RevenueCat |
| Readle | chxm1023 | 未注明 | `Reheji/Readle.js` | RevenueCat（年付） |
| Readora | chxm1023 | 未注明 | `Reheji/Readora.js` | RevenueCat（其他） |
| Read Tracker | 小帽 | 未注明 | `XiaoMao/ReadTracker.js` | RevenueCat |
| Recap | 小帽 | 未注明 | `XiaoMao/Recap.js` | RevenueCat |
| ReceiptiX | 小帽 | 未注明 | `XiaoMao/ReceiptiX.js` | RevenueCat |
| Receipt Snap | 小帽 | 未注明 | `XiaoMao/ReceiptSnap.js` | RevenueCat |
| Record2Text | afengye | 8.5 | `Afengye/Record2Text.js` | RevenueCat |
| Rec相机 | chxm1023 | 未注明 | `Reheji/recxiangji.js` | RevenueCat（终身） |
| Redo | 小帽 | 未注明 | `XiaoMao/Redo.js` | RevenueCat |
| Reels Editor | ddgksf2013 | 未注明 | `Reheji/ReelsEditor.js` | RevenueCat（年付） |
| Reflix | ddgksf2013 | 未注明 | `Reheji/Reflix.js` | RevenueCat（终身） |
| Remove Background | 89996462 | 3.2.4 | `89996462/RemoveBackground.js` | App 专属 |
| Removex | 小帽 | 未注明 | `XiaoMao/Removex.js` | RevenueCat |
| 人人视频 | 89996462 | 1.7 | `89996462/renrenshipin.js` | App 专属 |
| 人人视频 | chxm1023 | 未注明 | `Collections/renrenshipin.js` | App 专属 |
| 人生清单 | afengye | 2.2.3 | `Afengye/renshengqingdan.js` | RevenueCat |
| 人生清单 | chxm1023 | 未注明 | `Reheji/renshengqingdan.js` | RevenueCat（终身） |
| 任意水印相机 | WeiGiegie | 1.6.1 | `WeiGiegie/renyishuiyinxiangji.js` | App 专属 |
| ReplyAssistant键盘 | chxm1023 | 未注明 | `Reheji/replyassistantjianpan.js` | RevenueCat（年付） |
| ResumeMaker | 小帽 | 未注明 | `XiaoMao/ResumeMaker.js` | RevenueCat |
| Retake AI照片修复 | 89996462 | 1.0.2 | `89996462/retake.js` | iTunes 收据 |
| Rhinoxlab 全家桶（拍照搜题/AI换脸变装/消除笔/漫画相机/充电精灵/音频剪辑） | 89996462 | 未注明 | `89996462/rhinoxlab.js` | App 专属 |
| RicohRecipes | chxm1023 | 未注明 | `Reheji/RicohRecipes.js` | RevenueCat（年付） |
| 日记本 | chxm1023 | 未注明 | `Reheji/rijiben.js` | RevenueCat（终身） |
| 日历假期 | chxm1023 | 未注明 | `Collections/rilijiaqi.js` | App 专属 |
| RingaWay | 小帽 | 未注明 | `XiaoMao/RingaWay.js` | RevenueCat |
| 日语趣配音 | 89996462 | 1.7.1 | `89996462/riyuqupeiyin.js` | App 专属 |
| 日语趣配音 | WeiGiegie | 1.7.5 | `WeiGiegie/riyuqupeiyin.js` | App 专属 |
| 日杂相机 | chxm1023 | 未注明 | `Collections/rizaxiangji.js` | App 专属 |
| RLT | 小帽 | 未注明 | `XiaoMao/RLT.js` | RevenueCat |
| Rolly Money Tracker | 小帽 | 未注明 | `XiaoMao/RollyMoneyTracker.js` | RevenueCat |
| Rootd | chxm1023 | 未注明 | `Reheji/Rootd.js` | RevenueCat（终身） |
| 软眠眠 | 89996462 | 1.5.3 | `89996462/ruanmianmian.js` | App 专属 |
| 瑞网微视 | 89996462 | 1.0.4 | `89996462/ruiwangweishi.js` | App 专属 |
| RunJS | 小帽 | 未注明 | `XiaoMao/RunJS.js` | App 专属 |
| RunKit | afengye | 1.24 | `Afengye/RunKit.js` | RevenueCat |
| Runna | chxm1023 | 未注明 | `Reheji/Runna.js` | RevenueCat（年付） |
| 如期 | chxm1023 | 未注明 | `Collections/ruqi.js` | App 专属 |
| 如是记录 | chxm1023 | 未注明 | `Reheji/rushijilu.js` | RevenueCat（年付） |
| RushList | 小帽 | 未注明 | `XiaoMao/RushList.js` | RevenueCat |
| Rxframe | chxm1023 | 未注明 | `Reheji/Rxframe.js` | RevenueCat（终身） |
| Safari浏览器扩展 | chxm1023 | 未注明 | `Collections/Trancy.js` | App 专属 |
| SagaLife | 小帽 | 未注明 | `XiaoMao/SagaLife.js` | RevenueCat |
| SaifsAi | chxm1023 | 未注明 | `Reheji/SaifsAi.js` | RevenueCat（终身） |
| SalesCat | chxm1023 | 未注明 | `Reheji/SalesCat.js` | RevenueCat（终身） |
| SamSmartTv | 小帽 | 未注明 | `XiaoMao/SamSmartTv.js` | 其他（Apphud） |
| 三维地图探索 | 89996462 | v1.2.7 | `89996462/sanweiditutansuo.js` | App 专属 |
| 扫描宝 | WeiGiegie | 6.69 | `WeiGiegie/saomiaobao.js` | App 专属 |
| 扫描全能王 | chxm1023 | 未注明 | `Collections/saomiaoquannengwang.js` | App 专属 |
| SaveLoop | chxm1023 | 未注明 | `Reheji/SaveLoop.js` | RevenueCat（其他） |
| Scanner Pro | 89996462 | 8.10 | `89996462/ScannerPro.js` | RevenueCat |
| Scanner Pro | chxm1023 | 未注明 | `Reheji/ScannerPro.js` | RevenueCat（年付） |
| ScanPDF | 小帽 | 未注明 | `XiaoMao/ScanPDF.js` | RevenueCat |
| Scan Sphere | 小帽 | 未注明 | `XiaoMao/ScanSphere.js` | RevenueCat |
| Scelta | chxm1023 | 未注明 | `Reheji/Scelta.js` | RevenueCat（终身） |
| SceneEscape | 小帽 | 51 | `XiaoMao/SceneEscape.js` | iTunes 收据 |
| Schoolify | 小帽 | 未注明 | `XiaoMao/Schoolify.js` | RevenueCat |
| ScientificCalculator | ddgksf2013 | 未注明 | `Reheji/ScientificCalculator.js` | RevenueCat（年付） |
| Scory | 小帽 | 未注明 | `XiaoMao/Scory.js` | RevenueCat |
| screenhop | ddgksf2013 | 未注明 | `Reheji/Screenhop.js` | RevenueCat（年付） |
| Screenshot Link | 小帽 | 未注明 | `XiaoMao/ScreenshotLink.js` | RevenueCat |
| SCRL | chxm1023 | 未注明 | `Reheji/SCRL.js` | RevenueCat（年付） |
| Seamless | chxm1023 | 未注明 | `Reheji/Seamless.js` | RevenueCat（终身） |
| Seasons | 小帽 | 未注明 | `XiaoMao/Seasons.js` | RevenueCat |
| 色采配色助手 | 89996462 | 2.6.7 | `89996462/secai.js` | iTunes 收据 |
| 色调 | chxm1023 | 未注明 | `Reheji/sediao.js` | RevenueCat（年付） |
| ServerBee | chxm1023 | 未注明 | `Reheji/ServerBee.js` | RevenueCat（终身） |
| 沙拉视频 | 89996462 | 3.2.01 | `89996462/shalashipin.js` | App 专属 |
| 闪电记账 | 89996462 | 1.41.2 | `89996462/shandianjizhang.js` | iTunes 收据 |
| 闪电水印 | chxm1023 | 未注明 | `Collections/shandianshuiyin.js` | App 专属 |
| 上班进度条 | 小帽 | 未注明 | `XiaoMao/shangbanjindutiao.js` | App 专属 |
| 上海地铁 | 小帽 | 未注明 | `XiaoMao/shanghaiditie.js` | App 专属 |
| 闪萌表情 | 89996462 | 2.0.12 | `89996462/shanmengbiaoqing.js` | App 专属 |
| 膳食计划员 | chxm1023 | 未注明 | `Reheji/shanshijihuayuan.js` | RevenueCat（其他） |
| 少年得到 | 89996462 | 5.4.1 | `89996462/shaoniandedao.js` | App 专属 |
| 少年得到 | WeiGiegie | 未注明 | `WeiGiegie/shaoniandedao.js` | App 专属 |
| 少女壁纸 | 89996462 | 2.0 | `89996462/shaonvbizhi.js` | App 专属 |
| 少女壁纸 | WeiGiegie | 2.0 | `WeiGiegie/shaonvbizhi.js` | App 专属 |
| Shapy | chxm1023 | 未注明 | `Reheji/Shapy.js` | RevenueCat（年付） |
| Shared Family Shopping List | 小帽 | 未注明 | `XiaoMao/SharedFamilyShoppingList.js` | RevenueCat |
| SharpAI | chxm1023 | 未注明 | `Reheji/SharpAI.js` | RevenueCat（终身） |
| 鲨鱼短信 | chxm1023 | 未注明 | `Reheji/shayuduanxin.js` | RevenueCat（终身） |
| 社恐快跑 | 89996462 | 1.2.3 | `89996462/shekongkuaipao.js` | App 专属 |
| ShellBean | chxm1023 | 未注明 | `Reheji/ShellBean.js` | RevenueCat（终身） |
| ShellBean | chxm1023 | 未注明 | `Reheji/ShellBean2.js` | RevenueCat（终身） |
| 声波助手 | chxm1023 | 未注明 | `Collections/shengbozhushou.js` | App 专属 |
| 生活暂停器 | chxm1023 | 未注明 | `Reheji/shenghuozantingqi.js` | RevenueCat（终身） |
| 声音魔法师 | WeiGiegie | 1.1.6 | `WeiGiegie/shengyinmofashi.js` | App 专属 |
| 声之梦 | chxm1023 | 未注明 | `Reheji/shengzhimeng.js` | RevenueCat（年付） |
| 诗词集韵 | chxm1023 | 未注明 | `Collections/shicijiyun.js` | App 专属 |
| 十点读书 | WeiGiegie | 6.11.1 | `WeiGiegie/shidiandushu.js` | App 专属 |
| Shift Days | afengye | 1.90.14 | `Afengye/ShiftDays.js` | RevenueCat |
| 时光短剧 | 89996462 | 20.3 | `89996462/shiguangduanju.js` | App 专属 |
| 时光短剧 | 89996462 | 1.2 | `89996462/shiguangduanju2.js` | App 专属 |
| 时光罐罐 | 89996462 | 1.5.8 | `89996462/shiguangguanguan.js` | iTunes 收据 |
| 时光机 | chxm1023 | 未注明 | `Collections/FaceLab.js` | App 专属 |
| 时光手帐 | 89996462 | 6.1.5 | `89996462/shiguangshouzhang.js` | App 专属 |
| 时光序-日程备忘清单 | chxm1023 | 未注明 | `Collections/shiguangxu.js` | App 专属 |
| 时间胶囊 | WeiGiegie | 3.7 | `WeiGiegie/shijianjiaonang.js` | App 专属 |
| 时间记录 | afengye | 1.8.6 | `Afengye/shijianjilu.js` | RevenueCat |
| 时间记录 | chxm1023 | 未注明 | `Reheji/shijianjilu.js` | RevenueCat（终身） |
| 时间日志 | chxm1023 | 未注明 | `Collections/shijianrizhi.js` | App 专属 |
| 视氪地图 | chxm1023 | 未注明 | `Collections/shikeditu.js` | App 专属 |
| 使命时钟 | chxm1023 | 未注明 | `Collections/shimingshizhong.js` | App 专属 |
| 诗片 | 89996462 | 1.1.2 | `89996462/shipian.js` | RevenueCat |
| 诗片 | chxm1023 | 未注明 | `Reheji/shipian.js` | RevenueCat（终身） |
| 视频剪辑 | 89996462 | 5.2.7 | `89996462/shipinjianji.js` | iTunes 收据 |
| 视频剪辑神器 | 89996462 | 2.9.19 | `89996462/shipinjianjishenqi.js` | App 专属 |
| 视频脚本 | 小帽 | 1 | `XiaoMao/VideoScript.js` | iTunes 收据 |
| 视频&图片编辑套装 | chxm1023 | 未注明 | `Collections/shipintupianbianjitaozhuang.js` | App 专属 |
| 视频舞蹈秀 | 89996462 | 131.1 | `89996462/shipinwudaoxiu.js` | App 专属 |
| 视频转换（VDIT） | 89996462 | 2.6.2 | `89996462/shipinzhuanhuan.js` | iTunes 收据 |
| 视频转文字 | 89996462 | 2.5.9 | `89996462/shipinzhuanwenzi.js` | App 专属 |
| ShipMode | 小帽 | 未注明 | `XiaoMao/ShipMode.js` | RevenueCat |
| 识日 | WeiGiegie | 2.1.5 | `WeiGiegie/shiri.js` | App 专属 |
| 识日JLPT | WeiGiegie | 1.1.0 | `WeiGiegie/shirijlpt.js` | App 专属 |
| 实时翻译 | WeiGiegie | 3.2.6 | `WeiGiegie/shishifanyi.js` | App 专属 |
| 实时翻译官 | chxm1023 | 未注明 | `Collections/shishifanyiguan.js` | App 专属 |
| 实时热榜 | 小帽 | 未注明 | `XiaoMao/shishirebang.js` | App 专属 |
| 实时台风 | 小帽 | 未注明 | `XiaoMao/taifeng.js` | App 专属 |
| 实时线报 | 小帽 | 未注明 | `XiaoMao/yangmao.js` | App 专属 |
| 事线 | chxm1023 | 未注明 | `Reheji/shixian.js` | RevenueCat（终身） |
| ShodowWorkJournal | 小帽 | 未注明 | `XiaoMao/ShodowWorkJournal.js` | RevenueCat |
| Shooz | 小帽 | 未注明 | `XiaoMao/Shooz.js` | RevenueCat |
| Short Menu | chxm1023 | 未注明 | `Reheji/ShortMenu.js` | RevenueCat（年付） |
| 手持弹幕 | chxm1023 | 未注明 | `Reheji/shouchidanmu.js` | RevenueCat（终身） |
| 手机录屏大师 | 89996462 | 1.4 | `89996462/shoujilupingdashi.js` | App 专属 |
| 手机扫描 | chxm1023 | 未注明 | `Collections/shoujisaomiao.js` | App 专属 |
| 手机通话录音机 | 89996462 | 5.12.2 | `89996462/shoujitonghualuyinji.js` | App 专属 |
| 手机硬件管家 | chxm1023 | 未注明 | `Reheji/shoujiyingjianguanjia.js` | RevenueCat（终身） |
| ShowCal | ddgksf2013 | 未注明 | `Reheji/ShowCal.js` | RevenueCat（年付） |
| 刷刷题 | 89996462 | 6.3.1 | `89996462/shuashuati.js` | App 专属 |
| 舒尔特方格 | 89996462 | 1.0.8 | `89996462/shuertefangge.js` | App 专属 |
| 睡眠音乐 | chxm1023 | 未注明 | `Reheji/shuimianyinle.js` | RevenueCat（年付） |
| 睡眠因素 | chxm1023 | 未注明 | `Reheji/shuimianyinsu.js` | RevenueCat（其他） |
| 睡眠助手 | WeiGiegie | 未注明 | `WeiGiegie/shuimianzhushou.js` | App 专属 |
| 睡前故事大全 | chxm1023 | 未注明 | `Collections/shuiqiangushidaquan.js` | App 专属 |
| 水印宝 | chxm1023 | 未注明 | `Collections/shuiyinbao.js` | App 专属 |
| 水印猫 | 89996462 | 未注明 | `89996462/shuiyinmao.js` | App 专属 |
| 水印全能王 | chxm1023 | 未注明 | `Collections/shuiyinquannengwang.js` | App 专属 |
| 水印相机 | 89996462 | 1.0.1 | `89996462/shuiyinxiangji.js` | App 专属 |
| 水印相机 | 89996462 | 1.3 | `89996462/shuiyinxiangji2.js` | App 专属 |
| 水印熊 | chxm1023 | 未注明 | `Reheji/shuiyinxiong.js` | RevenueCat（终身） |
| 薯条漫画 | WeiGiegie | 1.3.2 | `WeiGiegie/shutiaomanhua.js` | App 专属 |
| ShuZiMingPian | 小帽 | 未注明 | `XiaoMao/shuzimingpian.js` | RevenueCat |
| Silimini | 89996462 | 1.3.1 | `89996462/Silimini.js` | App 专属 |
| SimpleScan | ddgksf2013 | 未注明 | `Reheji/SimpleScan.js` | RevenueCat（终身） |
| SimpleSign | 小帽 | 未注明 | `XiaoMao/SimpleSign.js` | RevenueCat |
| SimuFlight | 小帽 | 未注明 | `XiaoMao/SimuFlight.js` | App 专属 |
| Sing Ai | 小帽 | 未注明 | `XiaoMao/SingAi.js` | RevenueCat |
| Sintelly | 小帽 | 未注明 | `XiaoMao/Sintelly.js` | RevenueCat |
| 丝域 | WeiGiegie | 1.3 | `WeiGiegie/siyu.js` | App 专属 |
| Sky Remote | 小帽 | 未注明 | `XiaoMao/SkyRemote.js` | RevenueCat |
| Sleep Cycle | 小帽 | 未注明 | `XiaoMao/SleepCycle.js` | App 专属 |
| sleep cycle: 睡眠监测梦话鼾声记录及智能闹钟 | WeiGiegie | 6.24.25 | `WeiGiegie/sleepcycleshuimianjiancemenghuahanshengjilujizhinengnaozhong.js` | App 专属 |
| SleepFan | 小帽 | 未注明 | `XiaoMao/SleepFan.js` | RevenueCat |
| SleepJournal | 小帽 | 未注明 | `XiaoMao/SleepJournal.js` | RevenueCat |
| SleepMaster | ddgksf2013 | 未注明 | `Reheji/SleepMaster.js` | RevenueCat（终身） |
| sleepo | 89996462 | 1.5.8 | `89996462/Sleepo.js` | RevenueCat |
| Slice | 小帽 | 未注明 | `XiaoMao/Slice.js` | RevenueCat |
| Slidebox相册清理 | chxm1023 | 未注明 | `Collections/Slidebox.js` | App 专属 |
| SloBrownNoise | 小帽 | 未注明 | `XiaoMao/SloBrownNoise.js` | RevenueCat |
| Slopes | ios151 | 未注明 | `Collections/Slopes.js` | App 专属 |
| SmartAI | chxm1023 | 未注明 | `Reheji/SmartAI.js` | RevenueCat（年付） |
| Smart Al | 89996462 | 1.0 | `89996462/SmartAl.js` | iTunes 收据 |
| SmartBudget | 小帽 | 未注明 | `XiaoMao/SmartBudget.js` | RevenueCat |
| Smart Style | 小帽 | 未注明 | `XiaoMao/SmartStyle.js` | RevenueCat |
| Smoothrase | chxm1023 | 未注明 | `Reheji/Smoothrase.js` | RevenueCat（终身） |
| Snake Identifier | 小帽 | 未注明 | `XiaoMao/SnakeIdentifier.js` | RevenueCat |
| SnapIt | 小帽 | 未注明 | `XiaoMao/SnapIt.js` | RevenueCat |
| Snipd播客 | chxm1023 | 未注明 | `Reheji/snipdboke.js` | RevenueCat（年付） |
| Snor | 小帽 | 未注明 | `XiaoMao/Snor.js` | RevenueCat |
| SNOW-系列 | chxm1023 | 未注明 | `Collections/SNOW.js` | App 专属 |
| SODA相机 | 89996462 | 1.9.1 | `89996462/sodaxiangji.js` | App 专属 |
| Sofa | ddgksf2013 | 未注明 | `Reheji/Sofa.js` | RevenueCat（终身） |
| Sorted 日历 | 89996462 | 3.9.1 | `89996462/sorted.js` | App 专属 |
| Sorter（相册整理） | chxm1023 | 未注明 | `Sorter.js` | iTunes 收据 |
| Soul | 89996462 | 4.97.0 | `89996462/Soul.js` | App 专属 |
| 搜图神器 | chxm1023 | 1.7.3 | `Collections/soutushenqi.js` | App 专属 |
| SpamOff | 小帽 | 未注明 | `XiaoMao/SpamOff.js` | RevenueCat |
| Spark_Mail | chxm1023 | 未注明 | `Reheji/SparkMail.js` | RevenueCat（年付） |
| SpeakerCleaner | chxm1023 | 未注明 | `Reheji/SpeakerCleaner.js` | RevenueCat（其他） |
| Speedometer | chxm1023 | 未注明 | `Reheji/Speedometer.js` | RevenueCat（终身） |
| Spektr | ddgksf2013 | 未注明 | `Reheji/Spektr.js` | RevenueCat（年付） |
| Spider Identifier | 小帽 | 未注明 | `XiaoMao/SpiderIdentifier.js` | RevenueCat |
| Spin the Wheel | 小帽 | 23 | `XiaoMao/SpinTheWheel.js` | iTunes 收据 |
| Sponder | 小帽 | 未注明 | `XiaoMao/Sponder.js` | RevenueCat |
| SpoonMe | 小帽 | 未注明 | `XiaoMao/SpoonMe.js` | RevenueCat |
| Spotify | 小帽 | 未注明 | `XiaoMao/Spotify.js` | App 专属 |
| StardewValleyGuide | 小帽 | 未注明 | `XiaoMao/StardewValleyGuide.js` | RevenueCat |
| Starship | 89996462 | 1.1.2 | `89996462/Starship.js` | RevenueCat |
| Startodo | chxm1023 | 未注明 | `Reheji/Startodo.js` | RevenueCat（终身） |
| StayOff | chxm1023 | 未注明 | `Reheji/StayOff.js` | RevenueCat（终身） |
| StaySleep | chxm1023 | 未注明 | `Reheji/StaySleep.js` | RevenueCat（终身） |
| stepapp | afengye | 8.0.1 | `Afengye/Stepapp.js` | RevenueCat |
| StepUp | ddgksf2013 | 未注明 | `Reheji/StepUp.js` | RevenueCat（年付） |
| Stock+股票图表 | chxm1023 | 未注明 | `Reheji/stockgupiaotubiao.js` | RevenueCat（终身） |
| StorageCleaner | chxm1023 | 未注明 | `Reheji/StorageCleaner.js` | RevenueCat（终身） |
| StoreView | chxm1023 | 未注明 | `Reheji/StoreView.js` | RevenueCat（其他） |
| Storia | 小帽 | 未注明 | `XiaoMao/Storia.js` | RevenueCat |
| streamer | ddgksf2013 | 未注明 | `Reheji/Streamer.js` | RevenueCat（年付） |
| StressWatch压力自测提醒 | chxm1023 | 未注明 | `Reheji/stresswatchyalizicetixing.js` | RevenueCat（终身） |
| Strides | afengye | 17.3 | `Afengye/Strides.js` | RevenueCat |
| Stripe Widgets | 小帽 | 未注明 | `XiaoMao/StripeWidgets.js` | RevenueCat |
| StrongVPN | afengye | 1.5.4 | `Afengye/StrongVPN.js` | RevenueCat |
| Structured | chxm1023 | 未注明 | `Reheji/Structured.js` | RevenueCat（终身） |
| Stryde | 小帽 | 未注明 | `XiaoMao/Stryde.js` | RevenueCat |
| StudyAI | chxm1023 | 未注明 | `Reheji/StudyAI.js` | RevenueCat（终身） |
| StyleArt AI绘画 | 89996462 | 1.1.0 | `89996462/styleart.js` | App 专属 |
| StyleUpAI | 小帽 | 未注明 | `XiaoMao/StyleUpAI.js` | RevenueCat |
| Subtrack | chxm1023 | 未注明 | `Reheji/Subtrack.js` | RevenueCat（终身） |
| Successly | 小帽 | 未注明 | `XiaoMao/Successly.js` | RevenueCat |
| 随机图片 | 小帽 | 未注明 | `XiaoMao/suijitupian.js` | App 专属 |
| 随手写 | chxm1023 | 未注明 | `Collections/suishouxie.js` | App 专属 |
| 随心记 | chxm1023 | 未注明 | `Reheji/suixinji.js` | RevenueCat（终身） |
| 速记账单 | chxm1023 | 未注明 | `Reheji/sujizhangdan.js` | RevenueCat（其他） |
| Sunlitt | chxm1023 | 未注明 | `Reheji/Sunlitt.js` | RevenueCat（其他） |
| SunSafe | 小帽 | 未注明 | `XiaoMao/SunSafe.js` | RevenueCat |
| SuperPlanner | afengye | 2.1.2406 | `Afengye/SuperPlanner.js` | RevenueCat |
| 塑形记 | chxm1023 | 未注明 | `Reheji/suxingji.js` | RevenueCat（其他） |
| Swipe Photo | 小帽 | 未注明 | `XiaoMao/SwipePhoto.js` | RevenueCat |
| Swipey | 小帽 | 未注明 | `XiaoMao/Swipey.js` | RevenueCat |
| Swish | chxm1023 | 未注明 | `Reheji/Swish.js` | RevenueCat（终身） |
| TagCamera | chxm1023 | 未注明 | `Reheji/TagCamera.js` | RevenueCat（终身） |
| 泰剧迷 | WeiGiegie | 1.0.7 | `WeiGiegie/taijumi.js` | App 专属 |
| Take A Step | 小帽 | 未注明 | `XiaoMao/TakeAStep.js` | RevenueCat |
| Tally | afengye | 3.9.0 | `Afengye/Tally.js` | RevenueCat |
| Tally Counter | 小帽 | 未注明 | `XiaoMao/TallyCounter.js` | RevenueCat |
| Tally Counter | 小帽 | 1 | `XiaoMao/TallyCounter2.js` | iTunes 收据 |
| 塔罗牌 | chxm1023 | 未注明 | `Collections/taluopai.js` | App 专属 |
| 糖豆视频 | 小帽 | 未注明 | `XiaoMao/tangdou.js` | App 专属 |
| Tangerine | chxm1023 | 未注明 | `Reheji/Tangerine.js` | RevenueCat（年付） |
| 糖果壁纸 | chxm1023 | 未注明 | `Collections/tangguobizhi.js` | App 专属 |
| 糖果追剧 | 89996462 | 1.0.3 | `89996462/tangguozhuiju.js` | App 专属 |
| 糖果追剧 | WeiGiegie | 1.0.6 | `WeiGiegie/tangguozhuiju.js` | App 专属 |
| 探味闲置 | WeiGiegie | 1.2.8 | `WeiGiegie/tanweixianzhi.js` | App 专属 |
| 桃花村直播 搭配“SenPlayer播放器” 弹窗播放 | WeiGiegie | 未注明 | `WeiGiegie/taohuacunzhibodapeisenplayerbofangqidanchuangbofang.js` | App 专属 |
| 套路键盘 | 89996462 | 3.2.5 | `89996462/taolujianpan.js` | App 专属 |
| TapeKit | afengye | 2.10.0 | `Afengye/TapeKit.js` | RevenueCat |
| 塔奇剧场 | 89996462 | 10.0.4 | `89996462/taqijuchang.js` | App 专属 |
| 塔奇剧场 | WeiGiegie | 未注明 | `WeiGiegie/taqijuchang.js` | App 专属 |
| Taro | 小帽 | 未注明 | `XiaoMao/Taro.js` | RevenueCat |
| Taskbit | ddgksf2013 | 未注明 | `Reheji/Taskbit.js` | RevenueCat（年付） |
| Tasks | ddgksf2013 | 未注明 | `Reheji/Tasks.js` | RevenueCat（年付） |
| Teak浏览器 | chxm1023 | 未注明 | `Reheji/teakliulanqi.js` | RevenueCat（终身） |
| Tebi | 小帽 | 未注明 | `XiaoMao/Tebi.js` | RevenueCat |
| Teleprompter | afengye | 7.0.1 | `Afengye/Teleprompter.js` | RevenueCat |
| Teleprompter | chxm1023 | 未注明 | `Reheji/Teleprompter.js` | RevenueCat（终身） |
| Teleprompter | chxm1023 | 未注明 | `Reheji/Teleprompter2.js` | RevenueCat（终身） |
| TenPercent | chxm1023 | 未注明 | `Collections/TenPercent.js` | App 专属 |
| 特殊文字 | WeiGiegie | 2.1.2 | `WeiGiegie/teshuwenzi.js` | App 专属 |
| TestCamera | 小帽 | 未注明 | `XiaoMao/TestCamera.js` | RevenueCat |
| tetrify | chxm1023 | 未注明 | `Reheji/Tetrify.js` | RevenueCat（终身） |
| TextMask | chxm1023 | 未注明 | `Reheji/TextMask.js` | RevenueCat（终身） |
| Text To Audio Converter | 小帽 | 未注明 | `XiaoMao/TextToAudioConverter.js` | RevenueCat |
| Text Wise AI | 小帽 | 未注明 | `XiaoMao/TextWiseAI.js` | RevenueCat |
| That Girl | 小帽 | 未注明 | `XiaoMao/ThatGirl.js` | RevenueCat |
| ThinkAction | chxm1023 | 未注明 | `Reheji/ThinkAction.js` | RevenueCat（终身） |
| Thiro | afengye | 1.3.12 | `Afengye/Thiro.js` | RevenueCat |
| Thiro | chxm1023 | 未注明 | `Reheji/Thiro.js` | RevenueCat（终身） |
| Thoughts | 小帽 | 未注明 | `XiaoMao/Thoughts.js` | RevenueCat |
| 天气 | afengye | 3.5.4 | `Afengye/tianqi.js` | RevenueCat |
| 天天豆 | chxm1023 | 未注明 | `Reheji/tiantiandou.js` | RevenueCat（终身） |
| 天天短剧 | WeiGiegie | 1.1.4.6 | `WeiGiegie/tiantianduanju.js` | App 专属 |
| 天天跳绳 | 89996462 | 3.0.22 | `89996462/tiantiantiaosheng.js` | App 专属 |
| 甜盐相机 | 89996462 | 7.1.9 | `89996462/tianyanxiangji.js` | App 专属 |
| 甜盐相机 | chxm1023 | 未注明 | `Collections/tianyangxiangji.js` | App 专属 |
| 天乙八字排版 | 89996462 | 未注明 | `89996462/tianyibazipaiban.js` | App 专属 |
| Tiao | chxm1023 | 未注明 | `Reheji/Tiao.js` | RevenueCat（年付） |
| 题材库 | 89996462 | 9.9.9 | `89996462/ticaiku.js` | App 专属 |
| ticking | WeiGiegie | 1.18.27 | `WeiGiegie/ticking.js` | App 专属 |
| ticks | 89996462 | 1.2.4 | `89996462/Ticks.js` | iTunes 收据 |
| Tico | chxm1023 | 未注明 | `Reheji/Tico.js` | RevenueCat（终身） |
| Tide Guide潮汐 | chxm1023 | 未注明 | `Reheji/tideguidechaoxi.js` | RevenueCat（终身） |
| Tidur Timers | afengye | 5.5.5 | `Afengye/TidurTimers.js` | RevenueCat |
| 贴心记 | chxm1023 | 未注明 | `Reheji/tiexinji.js` | RevenueCat（终身） |
| Tiimo | chxm1023 | 未注明 | `Reheji/Tiimo.js` | RevenueCat（终身） |
| 题库大全-好几百个APP | chxm1023 | 未注明 | `Collections/tikudaquan.js` | App 专属 |
| TimeFinder | chxm1023 | 未注明 | `Reheji/TimeFinder.js` | RevenueCat（终身） |
| TimeFlow | 小帽 | 未注明 | `XiaoMao/TimeFlow.js` | RevenueCat |
| TimePal | 小帽 | 未注明 | `XiaoMao/TimePal.js` | RevenueCat |
| TimerPlus | afengye | 2.29.1 | `Afengye/TimerPlus.js` | RevenueCat |
| Timetable | 小帽 | 未注明 | `XiaoMao/Timetable.js` | RevenueCat |
| timetrack | afengye | 1.6.128 | `Afengye/Timetrack.js` | RevenueCat |
| TimeTree日历 | chxm1023 | 未注明 | `Collections/TimeTree.js` | App 专属 |
| Timus | chxm1023 | 未注明 | `Reheji/Timus.js` | RevenueCat（终身） |
| 听书助手 | 89996462 | 1.6.7 | `89996462/tingshuzhushou.js` | App 专属 |
| 听书助手 | chxm1023 | 未注明 | `Collections/tingshuzhushou.js` | App 专属 |
| 体重小本 | chxm1023 | 未注明 | `Reheji/tizhongxiaoben.js` | RevenueCat（终身） |
| 体重指数计算器 | afengye | 1.9.3 | `Afengye/tizhongzhishujisuanqi.js` | RevenueCat |
| Tizipizi | 小帽 | 未注明 | `XiaoMao/Tizipizi.js` | RevenueCat |
| Tjime | 小帽 | 未注明 | `XiaoMao/Tjime.js` | 其他（Adapty） |
| TLDL | 小帽 | 未注明 | `XiaoMao/TLDL.js` | RevenueCat |
| Today App | ddgksf2013 | 未注明 | `Reheji/TodayApp.js` | RevenueCat（终身） |
| Todoable | 小帽 | 未注明 | `XiaoMao/Todoable.js` | RevenueCat |
| Todo清单 | 89996462 | 1.60 | `89996462/todoqingdan.js` | App 专属 |
| To Me | ddgksf2013 | 未注明 | `Reheji/ToMe.js` | RevenueCat（年付） |
| 通话录音 | 89996462 | 2.0 | `89996462/tonghualuyin.js` | App 专属 |
| 通话录音助手 | WeiGiegie | 未注明 | `WeiGiegie/tonghualuyinzhushou.js` | App 专属 |
| TouchRetouch | chxm1023 | 未注明 | `Reheji/TouchRetouch.js` | RevenueCat（年付） |
| touchretouch | WeiGiegie | 5.2.4 | `WeiGiegie/touchretouch.js` | App 专属 |
| 头像制作 | chxm1023 | 未注明 | `Collections/touxiangzhizuo.js` | App 专属 |
| 头像制作 | WeiGiegie | 1.2 | `WeiGiegie/touxiangzhizuo.js` | App 专属 |
| toxx | WeiGiegie | 1.0.9 | `WeiGiegie/toxx.js` | App 专属 |
| Tracepad | chxm1023 | 未注明 | `Reheji/Tracepad.js` | RevenueCat（终身） |
| TrackHabits | 小帽 | 未注明 | `XiaoMao/TrackHabits.js` | RevenueCat |
| Tractor GPS | 小帽 | 未注明 | `XiaoMao/TractorGPS.js` | RevenueCat |
| Tractorgps | 小帽 | 未注明 | `XiaoMao/Tractorgps.js` | RevenueCat |
| TradesBud | 小帽 | 未注明 | `XiaoMao/TradesBud.js` | RevenueCat |
| TrainAi | 小帽 | 未注明 | `XiaoMao/TrainAi.js` | RevenueCat |
| TrainFitness 健身追踪器 | chxm1023 | 未注明 | `Reheji/trainfitnessjianshenzhuizongqi.js` | RevenueCat（年付） |
| Trancy-翻译APP | chxm1023 | 未注明 | `Collections/Trancy.js` | App 专属 |
| Transmission服务器 | chxm1023 | 未注明 | `Reheji/transmissionfuwuqi.js` | RevenueCat（年付） |
| Tree Identifier | 小帽 | 未注明 | `XiaoMao/TreeIdentifier.js` | RevenueCat |
| Trio Today | 小帽 | 未注明 | `XiaoMao/TrioToday.js` | RevenueCat |
| Tripsy-旅行规划者 | chxm1023 | 未注明 | `Collections/Tripsy.js` | App 专属 |
| TrueBP | 小帽 | 未注明 | `XiaoMao/TrueBP.js` | RevenueCat |
| 团团记账 | 89996462 | 2.3.8 | `89996462/tuantuanjizhang.js` | App 专属 |
| 推剧助手 | chxm1023 | 未注明 | `Collections/tuijuzhushou.js` | App 专属 |
| 图凌 | 小帽 | 未注明 | `XiaoMao/tuling.js` | App 专属 |
| 途灵随行 | WeiGiegie | 未注明 | `WeiGiegie/tulingsuixing.js` | App 专属 |
| TunerOne | 小帽 | 未注明 | `XiaoMao/TunerOne.js` | 其他（Adapty） |
| TuneTally | chxm1023 | 未注明 | `Reheji/TuneTally.js` | RevenueCat（终身） |
| 图片编辑 | chxm1023 | 未注明 | `Collections/tupianbianji.js` | App 专属 |
| 图片处理 | WeiGiegie | 1.3.8 | `WeiGiegie/tupianchuli.js` | App 专属 |
| 图片消除 | chxm1023 | 未注明 | `Reheji/tupianxiaochu.js` | RevenueCat（年付） |
| 图趣AI | chxm1023 | 未注明 | `Collections/tuquAI.js` | App 专属 |
| 图图记账 | chxm1023 | 未注明 | `Reheji/tutujizhang.js` | RevenueCat（终身） |
| 兔u | WeiGiegie | 2.1.7 | `WeiGiegie/tuu.js` | App 专属 |
| UmAI | chxm1023 | 未注明 | `Reheji/UmAI.js` | RevenueCat（年付） |
| UNDS | 小帽 | 未注明 | `XiaoMao/UNDS.js` | RevenueCat |
| Unfold | chxm1023 | 未注明 | `Reheji/Unfold.js` | RevenueCat（年付） |
| Unit Converter | 小帽 | 未注明 | `XiaoMao/UnitConverter.js` | RevenueCat |
| universal | ddgksf2013 | 未注明 | `Reheji/Universal.js` | RevenueCat（年付） |
| upahead | chxm1023 | 未注明 | `Reheji/Upahead.js` | RevenueCat（终身） |
| Uplens | 89996462 | 2.9.5 | `89996462/Uplens.js` | App 专属 |
| Usage System | 89996462 | 4.18.2 | `89996462/Usage.js` | RevenueCat |
| UTC | afengye | 3.11 | `Afengye/UTC.js` | RevenueCat |
| Utiful | chxm1023 | 未注明 | `Reheji/Utiful.js` | RevenueCat（年付） |
| Varlens 微单相机 | 89996462 | 4.12 | `89996462/varlens.js` | App 专属 |
| vCUS 音乐节奏视频 | 89996462 | 2.1.140 | `89996462/vcus.js` | App 专属 |
| VHS相机 | chxm1023 | 未注明 | `Reheji/vhsxiangji.js` | RevenueCat（其他） |
| VIBECAM | chxm1023 | 未注明 | `Reheji/VIBECAM.js` | RevenueCat（终身） |
| VidCap | afengye | 1.0.197 | `Afengye/VidCap.js` | RevenueCat |
| VidCap | chxm1023 | 未注明 | `Reheji/VidCap.js` | RevenueCat（其他） |
| Video2Photo | 小帽 | 4 | `XiaoMao/Video2Photo.js` | iTunes 收据 |
| VideoBlur | chxm1023 | 未注明 | `Reheji/VideoBlur.js` | RevenueCat（其他） |
| Video Teleprompter | chxm1023 | 未注明 | `Reheji/VideoTeleprompter.js` | RevenueCat（年付） |
| VideoToAudio | 小帽 | 未注明 | `XiaoMao/VideoToAudio.js` | RevenueCat |
| VideotoMP3 | 小帽 | 未注明 | `XiaoMao/VideotoMP3.js` | RevenueCat |
| Video Up! | afengye | 1.23.1 | `Afengye/VideoUp.js` | RevenueCat |
| Vinyls | chxm1023 | 未注明 | `Reheji/Vinyls.js` | RevenueCat（终身） |
| Vis | 小帽 | 未注明 | `XiaoMao/Vis.js` | RevenueCat |
| Vision | chxm1023 | 未注明 | `Reheji/Vision.js` | RevenueCat（年付） |
| Vista看天下 | chxm1023 | 未注明 | `Collections/Vista.js` | App 专属 |
| Visus | 小帽 | 未注明 | `XiaoMao/Visus.js` | RevenueCat |
| VivaCut | 89996462 | 2.17.7 | `89996462/VivaCut.js` | App 专属 |
| VN-视频剪辑 | chxm1023 | 未注明 | `Collections/VN.js` | App 专属 |
| Vocable | 小帽 | 未注明 | `XiaoMao/Vocable.js` | RevenueCat |
| VocamTranslator | 小帽 | 未注明 | `XiaoMao/VocamTranslator.js` | RevenueCat |
| VoiceAI | chxm1023 | 未注明 | `Reheji/VoiceAI.js` | RevenueCat（终身） |
| vpn | afengye | 2.2 | `Afengye/Vpn.js` | RevenueCat |
| VSCO | chxm1023 | 未注明 | `Reheji/VSCO.js` | RevenueCat（年付） |
| 挖财记账 | chxm1023 | 未注明 | `Collections/wacaijizhang.js` | App 专属 |
| Wake | 89996462 | 4.0.0 | `89996462/Wake.js` | App 专属 |
| Wake Music | ddgksf2013 | 未注明 | `Reheji/WakeMusic.js` | RevenueCat（终身） |
| Wallcraft-动态壁纸 | chxm1023 | 未注明 | `Collections/Wallcraft.js` | App 专属 |
| WallShift | chxm1023 | 未注明 | `Reheji/WallShift.js` | RevenueCat（年付） |
| 旺财记账 | chxm1023 | 未注明 | `Reheji/wangcaijizhang.js` | RevenueCat（年付） |
| 网络摄像机浏览器 | chxm1023 | 未注明 | `Reheji/wangluoshexiangjiliulanqi.js` | RevenueCat（终身） |
| 网上厨房 | WeiGiegie | 16.8.99 | `WeiGiegie/wangshangchufang.js` | App 专属 |
| 网速测速大师 | chxm1023 | 未注明 | `Collections/wangsucesudashi.js` | App 专属 |
| 网速管家 | chxm1023 | 未注明 | `Collections/wangsuguanjia.js` | App 专属 |
| 网易蜗牛读书 | 89996462 | 1.9.69 | `89996462/wangyiwoniudushu.js` | App 专属 |
| 网易蜗牛读书 | chxm1023 | 未注明 | `Collections/wangyiwoniudushu.js` | App 专属 |
| 网易有道词典 | 89996462 | 9.2.27 | `89996462/wangyiyoudaocidian.js` | App 专属 |
| 完美4K影视 | 89996462 | 5.1.0 | `89996462/wanmei4kyingshi.js` | App 专属 |
| 完美身材 | 89996462 | 1.0.1 | `89996462/wanmeishencai.js` | App 专属 |
| 万能变声器 | chxm1023 | 未注明 | `Collections/wannengbianshengqi.js` | App 专属 |
| 万能播放器 | chxm1023 | 未注明 | `Collections/wannengbofangqi.js` | App 专属 |
| 万能计算器 | chxm1023 | 未注明 | `Reheji/wannengjisuanqi.js` | RevenueCat（终身） |
| 万年历 | chxm1023 | 未注明 | `Collections/wannianli.js` | App 专属 |
| Watch Faces | chxm1023 | 未注明 | `Reheji/WatchFaces.js` | RevenueCat（终身） |
| Watchly | afengye | 2.3.5 | `Afengye/Watchly.js` | RevenueCat |
| WaterEject | 小帽 | 未注明 | `XiaoMao/WaterEject.js` | RevenueCat |
| WaterMark | 小帽 | 未注明 | `XiaoMao/WaterMark.js` | RevenueCat |
| WaterNow | 小帽 | 未注明 | `XiaoMao/WaterNow.js` | 其他（Qonversion） |
| WaterTracker | 小帽 | 未注明 | `XiaoMao/WaterTracker.js` | RevenueCat |
| Weanie | 小帽 | 未注明 | `XiaoMao/Weanie.js` | RevenueCat |
| WearfitPro | 小帽 | 未注明 | `XiaoMao/WearfitPro.js` | App 专属 |
| Weather Fit | 89996462 | 6.5.10 | `89996462/WeatherFit.js` | RevenueCat |
| Weather Fit | 89996462 | 6.8.3 | `89996462/WeatherFit2.js` | RevenueCat |
| WeatherFit | afengye | 6.12.3 | `Afengye/WeatherFit.js` | RevenueCat |
| WeatherScope | 小帽 | 未注明 | `XiaoMao/WeatherScope.js` | App 专属 |
| 微博 | 小帽 | 未注明 | `XiaoMao/weibo.js` | App 专属 |
| 伟大的我 | chxm1023 | 未注明 | `Reheji/weidadewo.js` | RevenueCat（其他） |
| 维刻 | chxm1023 | 未注明 | `Reheji/weike.js` | RevenueCat（其他） |
| 维克音乐 | chxm1023 | 未注明 | `Reheji/weikeyinle.js` | RevenueCat（终身） |
| 为你读诗pro | WeiGiegie | 1.5.6 | `WeiGiegie/weinidushipro.js` | App 专属 |
| 微商海报 | WeiGiegie | 1.3.8 | `WeiGiegie/weishanghaibao.js` | App 专属 |
| 微商截图秀 | 89996462 | 3.8.9 | `89996462/weishangjietuxiu.js` | App 专属 |
| 微信读书 | 89996462 | 7.0.0 | `89996462/weixindushu.js` | App 专属 |
| 微信读书 | WeiGiegie | 8.0.0 | `WeiGiegie/weixindushu.js` | App 专属 |
| 微信自动阅读 | 89996462 | 8888 | `89996462/weixinzidongyuedu.js` | App 专属 |
| 胃之书 | 小帽 | 未注明 | `XiaoMao/weizhishu.js` | App 专属 |
| Wellness | 小帽 | 未注明 | `XiaoMao/Wellness.js` | RevenueCat |
| 文案生成器 | 89996462 | 1.3.9 | `89996462/wenanshengchengqi.js` | App 专属 |
| 文案提取大师 | 89996462 | 1.1.1 | `89996462/wenantiqudashi.js` | App 专属 |
| 文件管理器 | 89996462 | 1.0.5 | `89996462/wenjianguanliqi.js` | iTunes 收据 |
| 文件扫描 | 89996462 | 1.0.5 | `89996462/wenjiansaomiao.js` | iTunes 收据 |
| 问真八字 | chxm1023 | 未注明 | `Collections/wenzhenbazi.js` | App 专属 |
| 问真排版八字 | 89996462 | 1.2.2 | `89996462/wenzhenpaibanbazi.js` | App 专属 |
| 问真排盘 | chxm1023 | 未注明 | `Collections/wenzhenpaipan.js` | App 专属 |
| 文字转语音助手 | WeiGiegie | 未注明 | `WeiGiegie/wenzizhuanyuyinzhushou.js` | App 专属 |
| WeTransfer | chxm1023 | 未注明 | `Reheji/WeTransfer.js` | RevenueCat（年付） |
| What Dinner | 小帽 | 未注明 | `XiaoMao/WhatDinner.js` | RevenueCat |
| WhatsGoingOn | 小帽 | 未注明 | `XiaoMao/WhatsGoingOn.js` | RevenueCat |
| Whisper | chxm1023 | 未注明 | `Reheji/Whisper.js` | RevenueCat（年付） |
| WidgetArt | chxm1023 | 未注明 | `Reheji/WidgetArt.js` | RevenueCat（终身） |
| Widget Art：桌面小组件 | 89996462 | 2.6.1 | `89996462/WidgetArt.js` | iTunes 收据 |
| WidgetCat | ddgksf2013 | 未注明 | `Reheji/WidgetCat.js` | RevenueCat（年付） |
| WidgetSmith | chxm1023 | 未注明 | `Reheji/WidgetSmith.js` | RevenueCat（年付） |
| Widgets小组件 | 89996462 | 1.4 | `89996462/widgetsxiaozujian.js` | iTunes 收据 |
| widgify | 89996462 | 1.4.9 | `89996462/Widgify.js` | iTunes 收据 |
| Wink | 89996462 | 2.8.0 | `89996462/Wink.js` | App 专属 |
| Wink | 89996462 | 1.3.10 | `89996462/Wink3.js` | App 专属 |
| Wink（美图全家桶：Wink/蛋啵/潮自拍/海报工厂/Chic） | 89996462 | 9.9.9 | `89996462/wink2.js` | App 专属 |
| Wishy | chxm1023 | 未注明 | `Reheji/Wishy.js` | RevenueCat（其他） |
| 我的番茄 | 89996462 | 2.3.2 | `89996462/wodefanjia.js` | RevenueCat |
| 我的时间 | chxm1023 | 未注明 | `Reheji/wodeshijian.js` | RevenueCat（终身） |
| 我的物品 | chxm1023 | 未注明 | `Reheji/wodewupin.js` | RevenueCat（终身） |
| 我的桌面 | 89996462 | 3.6.3 | `89996462/wodezhuomian.js` | iTunes 收据 |
| WOD Timer | 小帽 | 未注明 | `XiaoMao/WODTimer.js` | RevenueCat |
| 蜗牛睡眠 | chxm1023 | 未注明 | `Collections/woniushuimian.js` | App 专属 |
| WordBoard | afengye | 6.5.1 | `Afengye/WordBoard.js` | RevenueCat |
| WordSnap | 小帽 | 未注明 | `XiaoMao/WordSnap.js` | RevenueCat |
| WordSwag | chxm1023 | 未注明 | `Reheji/WordSwag.js` | RevenueCat（年付） |
| Wordy | chxm1023 | 未注明 | `Reheji/Wordy.js` | RevenueCat（终身） |
| WorldClock | afengye | 1.21.2 | `Afengye/WorldClock.js` | RevenueCat |
| 我听 | WeiGiegie | 未注明 | `WeiGiegie/woting.js` | App 专属 |
| WoW 小组件 | 89996462 | 2.2.0 | `89996462/wowxiaozujian.js` | App 专属 |
| WPS Office | chxm1023 | 未注明 | `Collections/WPS.js` | App 专属 |
| 舞蹈生 | WeiGiegie | 1.3 | `WeiGiegie/wudaosheng.js` | App 专属 |
| 悟饭触悦 | 89996462 | 1.0.4 | `89996462/wufanchuyue.js` | App 专属 |
| 悟饭触悦 | WeiGiegie | 1.0.4 | `WeiGiegie/wufanchuyue.js` | App 专属 |
| 悟饭乐享 | 89996462 | 1.1.3 | `89996462/wufanlexiang.js` | App 专属 |
| 悟饭掌悦 | 89996462 | 1.2 | `89996462/wufanzhangyue.js` | App 专属 |
| 无痕去水印 | 89996462 | 1.2.11 | `89996462/wuhenqushuiyin.js` | iTunes 收据 |
| 唔姆( | 89996462 | 未注明 | `89996462/wumu.js` | App 专属 |
| 五年日记本 | 89996462 | 3.17.25 | `89996462/wunianrijiben.js` | App 专属 |
| 物品指南 | chxm1023 | 未注明 | `Reheji/wupinzhinan.js` | RevenueCat（终身） |
| 无线鼠标 | chxm1023 | 未注明 | `Reheji/wuxianshubiao.js` | RevenueCat（年付） |
| 无影pro | 89996462 | 5.1.4 | `89996462/wuyingpro.js` | App 专属 |
| XCam | afengye | 1.40 | `Afengye/XCam.js` | RevenueCat |
| 香哈菜谱 | chxm1023 | 未注明 | `Collections/xianghacaipu.js` | App 专属 |
| 香蕉短剧 | 89996462 | 1.1.5.6 | `89996462/xiangjiaoduanju.js` | App 专属 |
| 香蕉短剧 | WeiGiegie | 未注明 | `WeiGiegie/xiangjiaoduanju.js` | App 专属 |
| 香蕉视频 | WeiGiegie | 未注明 | `WeiGiegie/xiangjiaoshipin.js` | App 专属 |
| 相机罗盘 | 89996462 | 1.1.0 | `89996462/xiangjiluopan.js` | App 专属 |
| 向日葵阅读 | 89996462 | 3.7.6 | `89996462/xiangrikuiyuedu.js` | App 专属 |
| 像素艺术 | chxm1023 | 未注明 | `Reheji/xiangsuyishu.js` | RevenueCat（终身） |
| 现映 | WeiGiegie | 3.0.1 | `WeiGiegie/xianying.js` | App 专属 |
| 限制文学 | 小帽 | 未注明 | `XiaoMao/xianzhiwenxue.js` | App 专属 |
| 小白学习打印 | 小帽 | 未注明 | `XiaoMao/xiaobaidayin.js` | App 专属 |
| 小伴龙拼音 | 89996462 | 1.8.8 | `89996462/xiaobanlongpinyin.js` | App 专属 |
| 小伴龙学数学 | 89996462 | 3.4.0 | `89996462/xiaobanlongxueshuxue.js` | App 专属 |
| 小包搜题 | 89996462 | 1.8.3 | `89996462/xiaobaosouti.js` | App 专属 |
| 小滴课堂 | chxm1023 | 未注明 | `Collections/xiaodiketang.js` | App 专属 |
| 消防行 | chxm1023 | 未注明 | `Collections/xiaofangxing.js` | App 专属 |
| 小荷听书 | WeiGiegie | 未注明 | `WeiGiegie/xiaohetingshu.js` | App 专属 |
| 小红书 | 小帽 | 未注明 | `XiaoMao/xiaohongshu.js` | App 专属 |
| 小红书 无水印视频/图片下载 | WeiGiegie | 9.1.8 | `WeiGiegie/xiaohongshuwushuiyinshipintupianxiazai.js` | App 专属 |
| 小决定 | chxm1023 | 未注明 | `Reheji/xiaojueding.js` | RevenueCat（年付） |
| 小鹿声文 | 89996462 | 1.9.75 | `89996462/xiaolushengwen.js` | App 专属 |
| 小麦在线-公务员考试 | chxm1023 | 未注明 | `Collections/xiaomaizaixian.js` | App 专属 |
| 小木短剧 | WeiGiegie | 1.0.6 | `WeiGiegie/xiaomuduanju.js` | App 专属 |
| 小南斗 | 89996462 | 1.23.4 | `89996462/xiaonandou.js` | App 专属 |
| 小南斗 | WeiGiegie | 1.23.4 | `WeiGiegie/xiaonandou.js` | App 专属 |
| 小区楼号地图 | WeiGiegie | 1.0.10 | `xiaoqulouhaoditu.js` | App 专属 |
| 小时尚 | chxm1023 | 未注明 | `Collections/xiaoshishang.js` | App 专属 |
| 小守护 | chxm1023 | 未注明 | `Reheji/xiaoshouhu.js` | RevenueCat（终身） |
| 小睡眠 | 小帽 | 未注明 | `XiaoMao/xiaoshuimian.js` | App 专属 |
| 小歪微商 | 89996462 | 1.0.9 | `89996462/xiaowaiweishang.js` | App 专属 |
| 小歪微商 | WeiGiegie | 1.0.9 | `WeiGiegie/xiaowaiweishang.js` | App 专属 |
| 小小签到 | 小帽 | 未注明 | `XiaoMao/xiaoxiaoqiandao.js` | App 专属 |
| 小习惯-打卡App | chxm1023 | 未注明 | `Collections/xiaoxiguan.js` | App 专属 |
| 小星星Ai陪练 | 89996462 | 未注明 | `89996462/xiaoxingxingaipeilian.js` | App 专属 |
| 小熊便签 | 89996462 | 1.2.2 | `89996462/xiaoxiongbianqian.js` | iTunes 收据 |
| 小熊壁纸大全 | chxm1023 | 未注明 | `Collections/xiaoxiongbizhidaquan.js` | App 专属 |
| 小熊记账 | chxm1023 | 未注明 | `Reheji/xiaoxiongjizhang.js` | RevenueCat（终身） |
| 小熊录屏 | 89996462 | 1.7.6 | `89996462/xiaoxiongluping.js` | App 专属 |
| 小熊轻断食 | chxm1023 | 未注明 | `Reheji/xiaoxiongqingduanshi.js` | RevenueCat（终身） |
| 小熊油耗 | 89996462 | 未注明 | `xiaoxiongyouhao.js` | App 专属 |
| 小旋风收音机 | WeiGiegie | 4.5 | `WeiGiegie/xiaoxuanfengshouyinji.js` | App 专属 |
| 小影 | 89996462 | 9.6.1 | `89996462/xiaoying.js` | App 专属 |
| 小影 | WeiGiegie | 9.14.6 | `WeiGiegie/xiaoying.js` | App 专属 |
| XiaoYu | 小帽 | 161 | `XiaoMao/xiaoyu.js` | RevenueCat |
| 小圆角 | chxm1023 | 未注明 | `Reheji/xiaoyuanjiao.js` | RevenueCat（其他） |
| 小组件（40sishi） | 89996462 | 未注明 | `89996462/sishixiaozujian.js` | App 专属 |
| 小组件盒子 | chxm1023 | 未注明 | `Collections/xiaozujianhezi.js` | App 专属 |
| 小作卡片 | 89996462 | 2.7.3 | `89996462/xiaozuokapian.js` | RevenueCat |
| 西窗烛 | 89996462 | 6.1.1 | `89996462/xichuangzhu.js` | App 专属 |
| 习惯管家 | 89996462 | 2.8.0 | `89996462/xiguanguanjia.js` | iTunes 收据 |
| 习惯记 | chxm1023 | 未注明 | `Reheji/xiguanji.js` | RevenueCat（终身） |
| 西红柿短剧 | WeiGiegie | 1.3.0.2 | `WeiGiegie/xihongshiduanju.js` | App 专属 |
| 西江诗词 | chxm1023 | 未注明 | `Reheji/xijiangshici.js` | RevenueCat（年付） |
| 喜加一 | 小帽 | 未注明 | `XiaoMao/xijiayi.js` | App 专属 |
| 溪流 | afengye | 2.0.1 | `Afengye/xiliu.js` | RevenueCat |
| 喜马拉雅 | 89996462 | 9.0.67 | `89996462/ximalaya.js` | App 专属 |
| 喜马拉雅 | WeiGiegie | 9.4.50 | `WeiGiegie/ximalaya.js` | App 专属 |
| 喜马拉雅 | WeiGiegie | 9.4.50 | `WeiGiegie/ximalaya2.js` | App 专属 |
| 喜马拉雅儿童版 | WeiGiegie | 5.0.0 | `WeiGiegie/ximalayaertongban.js` | App 专属 |
| 喜马拉雅国际版 | WeiGiegie | 通用 | `WeiGiegie/ximalayaguojiban.js` | App 专属 |
| 喜马拉雅H5会员 | WeiGiegie | h5 | `WeiGiegie/ximalayah5huiyuan.js` | App 专属 |
| 喜马拉雅极速版 | WeiGiegie | 3.0.34 | `WeiGiegie/ximalayajisuban.js` | App 专属 |
| 喜马拉雅音频地址解析 | WeiGiegie | 9.4.41 | `WeiGiegie/ximalayayinpindizhijiexi.js` | App 专属 |
| 心动短剧 | WeiGiegie | 1.4.17 | `WeiGiegie/xindongduanju.js` | App 专属 |
| 星垂日记 | chxm1023 | 未注明 | `Reheji/xingchuiriji.js` | RevenueCat（终身） |
| 星垂专注 | chxm1023 | 未注明 | `Reheji/xingchuizhuanzhu.js` | RevenueCat（终身） |
| 星动剧场 | WeiGiegie | 4.4 | `WeiGiegie/xingdongjuchang.js` | App 专属 |
| 星空外语 | WeiGiegie | 1.8.0 | `WeiGiegie/xingkongwaiyu.js` | App 专属 |
| 星晴壁纸 | 89996462 | 2.3.2 | `89996462/xingqingbizhi.js` | App 专属 |
| 醒图 | 89996462 | 5.5.0 | `89996462/xingtu.js` | App 专属 |
| 醒图 | 89996462 | 6.9.0 | `89996462/xingtu2.js` | App 专属 |
| 心光 | WeiGiegie | 4.0.31 | `WeiGiegie/xinguang.js` | App 专属 |
| 星座运势 | 小帽 | 未注明 | `XiaoMao/xingzuoyunshi.js` | App 专属 |
| 心晴计划 | WeiGiegie | 1.4.6 | `WeiGiegie/xinqingjihua.js` | App 专属 |
| 心情树洞 | 89996462 | 1.0 | `89996462/xinqingshudong.js` | App 专属 |
| 新鲜壁纸 | chxm1023 | 未注明 | `Reheji/xinxianbizhi.js` | RevenueCat（终身） |
| 信息计算 | chxm1023 | 未注明 | `Reheji/xinxijisuan.js` | RevenueCat（终身） |
| 新颜相机 | WeiGiegie | 1.2.9 | `WeiGiegie/xinyanxiangji.js` | App 专属 |
| 新语听书 | WeiGiegie | 4.2.36 | `WeiGiegie/xinyutingshu.js` | App 专属 |
| 心脏+ | chxm1023 | 未注明 | `Collections/xinzang.js` | App 专属 |
| 新知卫星地 | 89996462 | 4.0.7 | `89996462/xinzhiweixingdi.js` | App 专属 |
| 新知卫星地图 | 89996462 | 4.3.1 | `89996462/xinzhiweixingditu.js` | App 专属 |
| 熊猫客 | WeiGiegie | 1.9.11 | `WeiGiegie/xiongmaoke.js` | App 专属 |
| 熊猫脑洞小说 | 89996462 | 2.14 | `89996462/xiongmaonaodongxiaoshuo.js` | App 专属 |
| 熊猫脑洞小说 | WeiGiegie | 2.14 | `WeiGiegie/xiongmaonaodongxiaoshuo.js` | App 专属 |
| 熊猫睡眠 | 89996462 | v1.1.3 | `89996462/xiongmaoshuimian.js` | App 专属 |
| 熊猫水印 | chxm1023 | 未注明 | `Collections/xiongmaoshuiyin.js` | App 专属 |
| 系统电池分析 | chxm1023 | 未注明 | `Reheji/xitongdianchifenxi.js` | RevenueCat（终身） |
| XMind | 89996462 | 3.2.10 | `89996462/XMind.js` | App 专属 |
| XMind | 89996462 | 23.06 | `89996462/XMind2.js` | App 专属 |
| XMind | 小帽 | 未注明 | `XiaoMao/XMind.js` | App 专属 |
| XONE | 89996462 | 1.0.6 | `89996462/XONE.js` | RevenueCat |
| Xone | 小帽 | 未注明 | `XiaoMao/Xone.js` | RevenueCat |
| XS VPN | afengye | 2.6 | `Afengye/XSVPN.js` | RevenueCat |
| 学科网 | 小帽 | 未注明 | `XiaoMao/xuekewang.js` | App 专属 |
| 血压记录日记 | chxm1023 | 未注明 | `Reheji/xueyajiluriji.js` | RevenueCat（其他） |
| 迅雷 | WeiGiegie | 2.2.21 | `WeiGiegie/xunlei.js` | App 专属 |
| 迅雷-你的专享云盘 | 89996462 | 1.5.8 | `89996462/XunLei.js` | App 专属 |
| 迅游加速器 | 89996462 | 4.8.10 | `89996462/xunyoujiasuqi.js` | App 专属 |
| 迅游手游加速器 | 89996462 | 4.7.4 | `89996462/xunyoushouyoujiasuqi.js` | App 专属 |
| 洋葱学园 | 小帽 | 未注明 | `XiaoMao/yangcongxueyuan.js` | App 专属 |
| 阳光老挝语 | 小帽 | 未注明 | `XiaoMao/yangguanglaowoyu.js` | App 专属 |
| 言橘 | 小帽 | 未注明 | `XiaoMao/yanju.js` | App 专属 |
| 言外笔记 | afengye | 2.18.7 | `Afengye/yanwaibiji.js` | RevenueCat |
| 言外笔记 | chxm1023 | 未注明 | `Reheji/yanwaibiji.js` | RevenueCat（年付） |
| 遥忘 | chxm1023 | 未注明 | `Collections/yaowang.js` | App 专属 |
| YardSale | 小帽 | 未注明 | `XiaoMao/YardSale.js` | RevenueCat |
| 亚瑟浏览器 | 89996462 | 11.6 | `89996462/yaseliulanqi.js` | iTunes 收据 |
| 雅俗共赏 | 89996462 | 1.0.3 | `89996462/yasugongshang.js` | App 专属 |
| 雅俗共赏 | chxm1023 | 未注明 | `Collections/yasugongshang.js` | App 专属 |
| Yata | 小帽 | 未注明 | `XiaoMao/Yata.js` | RevenueCat |
| Yearvana | 小帽 | 未注明 | `XiaoMao/Yearvana.js` | RevenueCat |
| 野果阅读 | chxm1023 | 未注明 | `Collections/yeguoyuedu.js` | App 专属 |
| YetiVpn | afengye | 1.0.34 | `Afengye/YetiVpn.js` | RevenueCat |
| 一卟抠图 | 89996462 | v1.6.0 | `89996462/yibukoutu.js` | App 专属 |
| 一卟抠图 | WeiGiegie | 1.4.2 | `WeiGiegie/yibukoutu.js` | App 专属 |
| 一草亭读书 | WeiGiegie | 1.5.1 | `WeiGiegie/yicaotingdushu.js` | App 专属 |
| 一寸证件照 | 89996462 | 1.0.9 | `89996462/yicunzhengjianzhao.js` | App 专属 |
| 一寸证件照 | WeiGiegie | 1.1.3 | `WeiGiegie/yicunzhengjianzhao.js` | App 专属 |
| 移动扫描仪 | 89996462 | 1.6.3 | `89996462/yidongsaomiaoyi.js` | App 专属 |
| 一飞记账 | chxm1023 | 未注明 | `Collections/yifeijizhang.js` | App 专属 |
| 一键换脸 | 89996462 | 1.0.4 | `89996462/yijianhuanlian.js` | App 专属 |
| 一键抠图 | chxm1023 | 未注明 | `Collections/yijiankoutu.js` | App 专属 |
| 易截图 | 89996462 | 1.2.2 | `Collections/yijietu.js` | App 专属 |
| 易截图2 | 89996462 | 1.2.2 | `89996462/yijietu2.js` | App 专属 |
| 易截图2 | 89996462 | 1.2.2 | `yijietu.js` | App 专属 |
| 衣记Thinglog | chxm1023 | 未注明 | `Reheji/yijithinglog.js` | RevenueCat（终身） |
| 医考帮 | 89996462 | 3.4.9.2 | `89996462/yikaobang.js` | App 专属 |
| 医考帮 | WeiGiegie | 3.5.5.1 | `WeiGiegie/yikaobang.js` | App 专属 |
| 一刻 | chxm1023 | 未注明 | `Reheji/yike.js` | RevenueCat（其他） |
| 一刻相册 解锁部分功能 | chxm1023 | 未注明 | `Collections/yikexiangce.js` | App 专属 |
| 咿啦看书 | 89996462 | 3.1.0 | `89996462/yilakanshu.js` | App 专属 |
| 薏米短剧 | WeiGiegie | 4.1.2 | `WeiGiegie/yimiduanju.js` | App 专属 |
| 一木记账 | chxm1023 | 未注明 | `Collections/yimujizhang.js` | App 专属 |
| 一木记账 | chxm1023 | 未注明 | `yimujizhang.js` | App 专属 |
| 一木清单 | 89996462 | 1.1.3 | `89996462/yimuqingdan.js` | App 专属 |
| 一木清单 | chxm1023 | 未注明 | `Collections/yimuqingdan.js` | App 专属 |
| 隐蔽相机 | 89996462 | 未注明 | `89996462/yinbixiangji.js` | App 专属 |
| 樱飞 | chxm1023 | 未注明 | `Reheji/yingfei.js` | RevenueCat（终身） |
| 硬汗健身 | WeiGiegie | 1.49.1 | `WeiGiegie/yinghanjianshen.js` | App 专属 |
| 应用收藏夹 | chxm1023 | 未注明 | `Reheji/yingyongshoucangjia.js` | RevenueCat（年付） |
| 英语读书 | WeiGiegie | 2.2.3 | `WeiGiegie/yingyudushu.js` | App 专属 |
| 映月相机 | 89996462 | 2.1.1 | `89996462/yingyuexiangji.js` | App 专属 |
| 音乐搜索 | 小帽 | 未注明 | `XiaoMao/yinyuesousuo.js` | App 专属 |
| 音频剪辑提取 | 89996462 | 2.0.6 | `89996462/yinpinjianjitiqu.js` | App 专属 |
| 音频提取 | 小帽 | 未注明 | `XiaoMao/yinpintiqu.js` | RevenueCat |
| 印象电子音乐相册 | 89996462 | 1.0 | `89996462/yinxiangdianziyinyuexiangce.js` | App 专属 |
| 印象时间 | WeiGiegie | 未注明 | `WeiGiegie/yinxiangshijian.js` | App 专属 |
| 隐形相机/黑屏录像 | chxm1023 | 未注明 | `Reheji/yinxingxiangjiheipingluxiang.js` | RevenueCat（年付） |
| 一起练琴 | chxm1023 | 未注明 | `Collections/yiqilianqin.js` | App 专属 |
| 一起欺词 | chxm1023 | 未注明 | `Reheji/yiqiqici.js` | RevenueCat（年付） |
| 一书一课 | 89996462 | 未注明 | `89996462/yishuyike.js` | App 专属 |
| 一甜相机 | 89996462 | 3.0.2 | `89996462/yitianxiangji.js` | App 专属 |
| 一天阅读 | 89996462 | 2.0.0 | `89996462/yitianyuedu.js` | App 专属 |
| 一万年日记 | 89996462 | 1.6.0 | `89996462/yiwannianriji.js` | App 专属 |
| 一言 | chxm1023 | 未注明 | `Collections/yiyan.js` | App 专属 |
| 易颜证件照 | WeiGiegie | 1.1.0 | `WeiGiegie/yiyanzhengjianzhao.js` | App 专属 |
| 已阅 | chxm1023 | 未注明 | `Reheji/yiyue.js` | RevenueCat（终身） |
| 泳记 | chxm1023 | 未注明 | `Reheji/yongji.js` | RevenueCat（终身） |
| Yosum | afengye | 2.5.5 | `Afengye/Yosum.js` | RevenueCat |
| Yosum | chxm1023 | 未注明 | `Reheji/Yosum.js` | RevenueCat（年付） |
| You Can | 小帽 | 未注明 | `XiaoMao/YouCan.js` | RevenueCat |
| YouCanFocus2 | afengye | 2.3.0 | `Afengye/YouCanFocus2.js` | RevenueCat |
| 有道翻译官 | WeiGiegie | 4.3.15 | `WeiGiegie/youdaofanyiguan.js` | App 专属 |
| 有道翻译官 无限体验同传翻译体验时间 | WeiGiegie | 4.3.15 | `WeiGiegie/youdaofanyiguanwuxiantiyantongchuanfanyitiyanshijian.js` | App 专属 |
| 有道乐读 | 89996462 | 4.3.6 | `89996462/youdaoledu.js` | App 专属 |
| 有谱么 | chxm1023 | 未注明 | `Collections/youpume.js` | App 专属 |
| You're So Great | 89996462 | 1.0 | `89996462/YoureSoGreat.js` | iTunes 收据 |
| 有声听书 | chxm1023 | 未注明 | `Collections/yunting.js` | App 专属 |
| 有诗 | 89996462 | 1.0.1 | `89996462/youshi.js` | App 专属 |
| 有书 ,有书精读 | WeiGiegie | 7.1.00 | `WeiGiegie/youshuyoushujingdu.js` | App 专属 |
| 有心跳 | WeiGiegie | 1.75.5 | `WeiGiegie/youxintiao.js` | App 专属 |
| 优雅高定素材 | 89996462 | 未注明 | `89996462/youyagaodingsucai.js` | App 专属 |
| 柚子轻断食 | 89996462 | 2.6.5 | `89996462/youziqingduanshi.js` | App 专属 |
| YPlayer | afengye | 8.3 | `Afengye/YPlayer.js` | RevenueCat |
| 原耽漫画 | WeiGiegie | 1.6.2 | `WeiGiegie/yuandanmanhua.js` | App 专属 |
| 圆点记账 | chxm1023 | 未注明 | `Reheji/yuandianjizhang.js` | RevenueCat（年付） |
| 元气壁纸 | WeiGiegie | 1.1.9 | `WeiGiegie/yuanqibizhi.js` | App 专属 |
| 元气计时 | chxm1023 | 未注明 | `Reheji/yuanqijishi.js` | RevenueCat（终身） |
| 元气记时 | 89996462 | 3.10 | `89996462/yuanqijishi.js` | RevenueCat |
| 元气桌面壁纸 | 89996462 | 2.91.1940 | `89996462/yuanqizhuomianbizhi.js` | App 专属 |
| 元思笔记 | chxm1023 | 未注明 | `Reheji/yuansibiji.js` | RevenueCat（终身） |
| 元元记账 | WeiGiegie | 1.2.8 | `WeiGiegie/yuanyuanjizhang.js` | App 专属 |
| YubePiP | chxm1023 | 未注明 | `Reheji/YubePiP.js` | RevenueCat（终身） |
| 阅读记录 | chxm1023 | 未注明 | `Collections/yuedujilu.js` | App 专属 |
| 阅己 | 89996462 | 1.0.4 | `89996462/yueji.js` | App 专属 |
| 月亮听书 | WeiGiegie | 未注明 | `WeiGiegie/yueliangtingshu.js` | App 专属 |
| 粤语学习通 | WeiGiegie | 8.0.1 | `WeiGiegie/yueyuxuexitong.js` | App 专属 |
| Yummi | chxm1023 | 未注明 | `Reheji/Yummi.js` | RevenueCat（终身） |
| 云上写作 | chxm1023 | 未注明 | `Collections/yunshangxiezuo.js` | App 专属 |
| 云听-全国电台 | chxm1023 | 7.0.35 | `Collections/yunting.js` | App 专属 |
| 语音翻译 | WeiGiegie | 1.2.9 | `WeiGiegie/yuyinfanyi.js` | App 专属 |
| 语音合成助手 | afengye | 3.9.1 | `Afengye/yuyinhechengzhushou.js` | RevenueCat |
| 语音计算器 | chxm1023 | 未注明 | `Reheji/yuyinjisuanqi.js` | RevenueCat（终身） |
| 语音转换文字 | 89996462 | 1.1.1 | `89996462/yuyinzhuanhuanwenzi.js` | App 专属 |
| 语音转换文字 | WeiGiegie | 1.4.0 | `WeiGiegie/yuyinzhuanhuanwenzi.js` | App 专属 |
| 语音转文字 | WeiGiegie | 1.1.5 | `WeiGiegie/yuyinzhuanwenzi.js` | App 专属 |
| 宇宙星图 | 89996462 | v2.4.5 | `89996462/yuzhouxingtu.js` | App 专属 |
| YzyFit | ddgksf2013 | 未注明 | `Reheji/YzyFit.js` | RevenueCat（年付） |
| 早安打卡 | chxm1023 | 未注明 | `Collections/zaoandaka.js` | App 专属 |
| 早晚读书 | WeiGiegie | 1.8.4 | `WeiGiegie/zaowandushu.js` | App 专属 |
| 杂志天下 | 89996462 | 1.2.0 | `89996462/zazhitianxia.js` | App 专属 |
| 杂志天下 | chxm1023 | 未注明 | `Collections/zazhitianxia.js` | App 专属 |
| Zen7 VPN | afengye | 2.0 | `Afengye/Zen7VPN.js` | RevenueCat |
| ZenTime | afengye | 1.1.5 | `Afengye/ZenTime.js` | RevenueCat |
| Zero | ddgksf2013 | 未注明 | `Reheji/Zero.js` | RevenueCat（年付） |
| Zettelbox | chxm1023 | 未注明 | `Reheji/Zettelbox.js` | RevenueCat（终身） |
| 长图拼接 | 89996462 | 3.2 | `89996462/changtupinjie.js` | iTunes 收据 |
| 长图拼图 | 89996462 | 1.4 | `89996462/changtupintu.js` | iTunes 收据 |
| 站酷高高手 | 89996462 | 3.4.14 | `89996462/zhankugaogaoshou.js` | App 专属 |
| 照片格式转换 | 89996462 | 1.1.4 | `89996462/zhaopiangeshizhuanhuan.js` | App 专属 |
| 照片清理Photo Cleaner | chxm1023 | 未注明 | `Reheji/zhaopianqingliphotocleaner.js` | RevenueCat（终身） |
| 昭昭医考 | 89996462 | 8.0.6 | `89996462/zhaozhaoyikao.js` | App 专属 |
| 证件照高清版 | 89996462 | 1.5.7 | `89996462/zhengjianzhaogaoqingban.js` | iTunes 收据 |
| 证件照相馆 | WeiGiegie | 1.4.2 | `zhengjianzhaoxiangguan.js` | App 专属 |
| 正气 | WeiGiegie | 7.1.33 | `WeiGiegie/zhengqi.js` | App 专属 |
| 真题伴侣 | 89996462 | 2.1.56 | `89996462/zhentibanlv.js` | App 专属 |
| 真心话大冒险 | chxm1023 | 未注明 | `Reheji/zhenxinhuadamaoxian.js` | RevenueCat（年付） |
| 职场人日历 | 小帽 | 未注明 | `XiaoMao/zhichangrenrili.js` | App 专属 |
| 支付宝模拟器 | 89996462 | 未注明 | `89996462/zhifubaomoniqi.js` | App 专属 |
| 知乎 | WeiGiegie | 未注明 | `WeiGiegie/zhihu.js` | App 专属 |
| 知乎 | WeiGiegie | 未注明 | `WeiGiegie/zhihu2.js` | 未注明 |
| 指尖笔记 | 89996462 | v2.9.1 | `89996462/zhijianbiji.js` | App 专属 |
| 指尖时光 | 89996462 | 6.1.2 | `89996462/zhijianshiguang.js` | App 专属 |
| 指尖时光 | 89996462 | 6.3.70 | `89996462/zhijianshiguang2.js` | App 专属 |
| 知了-RSS聚合阅读 | chxm1023 | 未注明 | `Collections/zhiliao.js` | App 专属 |
| 指南针GPS | 89996462 | 1.1.5 | `89996462/zhinanzhengps.js` | App 专属 |
| 智能抢答器 | chxm1023 | 未注明 | `Collections/zhinengqiangdaqi.js` | App 专属 |
| 智能扫描王 | 89996462 | 1.4 | `89996462/zhinengsaomiaowang.js` | App 专属 |
| 智能视频抠图 | 89996462 | 2.0 | `89996462/zhinengshipinkoutu.js` | iTunes 收据 |
| 智能助手 | chxm1023 | 1.0.3 | `Collections/zhinengzhushou.js` | App 专属 |
| 知识脱口秀 | WeiGiegie | 1.5.2 | `WeiGiegie/zhishituokouxiu.js` | App 专属 |
| 知我记物 | chxm1023 | 未注明 | `Reheji/zhiwojiwu.js` | RevenueCat（终身） |
| 植物识别 | chxm1023 | 未注明 | `Reheji/zhiwushibie.js` | RevenueCat（终身） |
| 秩序目标 | afengye | 3.4.5 | `Afengye/zhixumubiao.js` | RevenueCat |
| 秩序目标 | chxm1023 | 未注明 | `Reheji/zhixumubiao.js` | RevenueCat（终身） |
| 秩序时钟 | chxm1023 | 未注明 | `Reheji/zhixushizhong.js` | RevenueCat（终身） |
| 知音漫客 | 89996462 | 4.1.3 | `89996462/zhiyinmanke.js` | App 专属 |
| 知音漫客 | WeiGiegie | 4.1.6 | `WeiGiegie/zhiyinmanke.js` | App 专属 |
| 中国法律 | chxm1023 | 未注明 | `Reheji/zhongguofalv.js` | RevenueCat（年付） |
| 中国房价 | 小帽 | 未注明 | `XiaoMao/zhongguofangjia.js` | App 专属 |
| 中国福利彩票 | 小帽 | 未注明 | `XiaoMao/fulicaipiao.js` | App 专属 |
| 中国体育彩票 | 小帽 | 未注明 | `XiaoMao/tiyucaipiao.js` | App 专属 |
| 中华日历 | 89996462 | 3.6.5 | `89996462/zhonghuarili.js` | App 专属 |
| 中华诗词库 | 89996462 | 1.7 | `89996462/zhonghuashiciku.js` | App 专属 |
| 中华诗词库 | 89996462 | 1.7 | `89996462/zhonghuashiciku2.js` | App 专属 |
| 中信书院 | WeiGiegie | 未注明 | `WeiGiegie/zhongxinshuyuan.js` | App 专属 |
| 中医方剂 | 89996462 | 2.3 | `89996462/zhongyifangji.js` | App 专属 |
| 中医方剂 | WeiGiegie | 2.3 | `WeiGiegie/zhongyifangji.js` | App 专属 |
| 中医通 | 小帽 | 未注明 | `XiaoMao/zhongyitong.js` | App 专属 |
| 周易起名大师 | 89996462 | 2.2.6 | `89996462/zhouyiqimingdashi.js` | App 专属 |
| 周易起名大师 | chxm1023 | 未注明 | `Collections/zhouyiqimingdashi.js` | App 专属 |
| 转易侠PDF转换器 | 89996462 | 1.0.8 | `89996462/zhuanyixiapdfzhuanhuanqi.js` | App 专属 |
| 转易侠扫描王 | 89996462 | 5.2.7 | `89996462/zhuanyixiasaomiaowang.js` | App 专属 |
| 追读小说 | 89996462 | 8.0.7 | `89996462/zhuiduxiaoshuo.js` | App 专属 |
| 追剧日历 | WeiGiegie | 2.0.4 | `WeiGiegie/zhuijurili.js` | App 专属 |
| 桌面小组件 | 89996462 | 4.5 | `89996462/zhuomianxiaozujian.js` | iTunes 收据 |
| 自动点击器 | chxm1023 | 未注明 | `Reheji/zidongdianjiqi.js` | RevenueCat（终身） |
| 字幕翻译 | WeiGiegie | 1.1.8 | `WeiGiegie/zimufanyi.js` | App 专属 |
| 自拍题词器 | WeiGiegie | 2.1.1 | `WeiGiegie/zipaiticiqi.js` | App 专属 |
| 字体册 | chxm1023 | 未注明 | `Collections/zitice.js` | App 专属 |
| 子午觉 | 89996462 | 1.1.3 | `89996462/ziwujiao.js` | App 专属 |
| 资源搬运大师 | chxm1023 | 未注明 | `Reheji/ziyuanbanyundashi.js` | RevenueCat（终身） |
| 自愈时钟 | chxm1023 | 未注明 | `Reheji/ziyushizhong.js` | RevenueCat（终身） |
| Zoomable | chxm1023 | 未注明 | `Reheji/Zoomable.js` | RevenueCat（终身） |
| ZoomEarth | afengye | 3.1 | `Afengye/ZoomEarth.js` | RevenueCat |
| 最美证件照 | 89996462 | v1.3.1 | `89996462/zuimeizhengjianzhao.js` | App 专属 |
| 足控社 | WeiGiegie | 未注明 | `WeiGiegie/zukongshe.js` | App 专属 |
| 佐糖 | 89996462 | 1.2.10 | `89996462/zuotang.js` | App 专属 |
| 佐糖 | chxm1023 | 未注明 | `Collections/zuotang.js` | App 专属 |
| 佐糖照片修复 | chxm1023 | 未注明 | `Collections/zuotangzhaopianxiufu.js` | App 专属 |
| 作业改改 | 89996462 | 1.3 | `89996462/zuoyegaigai.js` | App 专属 |
| 作业批改 | WeiGiegie | 2.1.1 | `WeiGiegie/zuoyepigai.js` | App 专属 |
