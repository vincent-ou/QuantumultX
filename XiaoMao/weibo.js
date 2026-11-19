/* 微博 — 微博 VIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = new.vip.weibo.cn,api.weibo.cn,weibointl.api.weibo.cn
 */
function getGoneDay(n=0,yearFlag=true){let myDate=new Date();myDate.setDate(myDate.getDate()-n);let month=myDate.getMonth()+1;let day=myDate.getDate();let result=""+(yearFlag?myDate.getFullYear():"")+"/"+(month<10?"0"+month:month)+"/"+(day<10?"0"+day:day);return result}let requestUrl=$request.url;let obj=JSON.parse($response.body);if(/^https:\/\/new\.vip\.weibo\.cn\/aj\/appicon\/list?/.test(requestUrl)){obj.data.list.forEach((el)=>{el.status=1;el.cardType="2";el.tag="大佬尊享";el.hasOwnProperty("endTime")?(el.endTime=new Date(getGoneDay(-100))/1000):""})}else if(/^https:\/\/api\.weibo\.cn\/device\/get?/.test(requestUrl)){obj.devices.forEach((el)=>{el.vip=0});obj.cards=[]}else if(/^https:\/\/weibointl\.api\.weibo\.cn\/portal\.php?/.test(requestUrl)){if(obj.data.length==3&&obj.data[0].title=="单色"){obj.data.forEach((el)=>{el.card.forEach((card)=>{card.status=1;card.forbidden=0})})}}$done({body:JSON.stringify(obj)});
