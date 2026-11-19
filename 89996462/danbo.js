/* DanBo — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.800
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api-sub.meitu.com
 */

var objc=JSON["parse"]($response["body"]);objc={'code':0x0,'error_code':"00000",'message':"success",'data':{'account_type':0x1,'account_id':0x3dea1866,'is_vip':!![],'valid_time':0x184f07cfa4e,'invalid_time':0x1d8f602e4570,'have_valid_contract':!![],'show_renew_flag':!![],'sub_type':0x2,'sub_type_name':'续期','active_product_id':0x0,'active_order_id':0x613c1f3e78c46c00,'active_sub_type':0x2,'active_sub_type_name':'续期','active_promotion_status':0x2,'in_trial_period':!![],'trial_period_invalid_time':0x185148962de,'current_order_invalid_time':0x185148962de,'derive_type':0x1,'derive_type_name':"普通会员",'membership':{'id':0x9,'display_name':"蛋啵普通会员",'level':0x1,'level_name':"普通会员"}},'request_id':"5ce47c9e178445ae84c8dfd657ab89ca",'success':!![]};$done({'body':JSON["stringify"](objc)});
