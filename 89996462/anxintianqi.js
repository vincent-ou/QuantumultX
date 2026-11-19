/* AnXinTianQi — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.1
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = buy.itunes.apple.com
 */

var ojbk=JSON["parse"]($response["body"]);ojbk={'environment':"Production",'pending_renewal_info':[{'product_id':"com.highonemob.weather.base.w",'auto_renew_status':'1'}],'status':0x0,'latest_receipt_info':[{'quantity':'1','purchase_date_ms':"1688386973000",'expires_date':"2099-06-06 06:06:06 Etc/GMT",'expires_date_pst':"2099-06-06 06:06:06 America/Los_Angeles",'is_in_intro_offer_period':'false','transaction_id':"540001260447637",'is_trial_period':'false','original_transaction_id':'540001260447637','product_id':'com.highonemob.weather.base.w','original_purchase_date_ms':"1688386974000",'expires_date_ms':"148204937166000"}]};$done({'body':JSON['stringify'](ojbk)});
