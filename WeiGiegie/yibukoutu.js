/* 一卟抠图 — ai抠图换背景证件照制作消除笔抠图p图扣图软件
 * 原作者：WeiGiegie
 * 适配版本：1.4.2
 * 清理整理：Muse — 反混淆还原为明文，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ff.mofangzhice.com
 */
if($request["url"]["includes"]("/api/client/info")){$done({"body":$response["body"]["replace"](/"vip":\w+/g,"\"vip\":{\"status\":1,\"plan_id\":2613,\"zone\":\"default\",\"viptype\":4,\"func_quota\":0,\"func_times\":0,\"actived_at\":\"2024-09-16 19:56:08\",\"start_time\":null,\"expired_at\":\"2999-09-09 03:55:55\",\"forever\":0,\"latest_ip\":\"39.155.17.37\",\"is_trial\":32493834549,\"trial_info\":\"32493834549\",\"isExpired\":0,\"vipname\":\"永久会员\",\"now_date\":\"2024-09-16 19:56:54\",\"is_vip_plan\":1,\"ios_product_id\":\"SmarkCamera_SmLXWeek\"}")});}{$done({});}