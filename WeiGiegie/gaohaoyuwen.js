/* 稿好语文 — 稿好语文-硬核学习备考
 * 原作者：WeiGiegie
 * 适配版本：2.10.3
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.gaohaozuowen.com
 */

let obj = JSON.parse($response.body);

try {
    if (obj.data) {
        obj.data.is_vip = 1;                  
        obj.data.remain_day = 36500;          
        obj.data.other_is_vip = 1;            
        obj.data.other_remain_day = 36500;    
        obj.data.is_check = 1;                
       
    }
} catch (e) {
    console.log("vip bypass error:", e);
}

$done({body: JSON.stringify(obj)});
