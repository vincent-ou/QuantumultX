/* 秒解析 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = tcb-api.tencentcloudapi.com */

//获取当前时间戳
var currentTimeStamp = Date.now();
//获取response_data响应
var responseData = JSON.parse($response.body).data.response_data;
//解析response_data中的data字段
var data = JSON.parse(responseData).data;

//修改数据
data[0].jieshushijian = 4092599349000;
data[0].kaitongshijian = currentTimeStamp;
data[0].qixian = "永久免除所有广告";

//更新response_data中的data字段
responseData = JSON.stringify({ data: data });

//更新原始数据
var obj = JSON.parse($response.body);

obj.data.response_data = responseData;

$done({ body: JSON.stringify(obj) });
