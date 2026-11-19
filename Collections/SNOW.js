/* SNOW — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.snow.me */


var resp = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const times = Date.now();

const list = {
  "iphoneapp.epik": { id: "com.snowcorp.epik.subscribe.plan.oneyear" },  //Epik-AI照片&视频编辑
  "iphoneapp.snow": { id: "com.campmobile.snow.subscribe.oneyear" }  //SNOW-AI写真
};

for (const key of Object.keys(list)) {
  if (new RegExp(`^${key}`, "i").test(ua)) {
    resp.result = {
      "products": [
        {
          "managed": true,
          "status": "ACTIVE",
          "startDate": times,
          "productId": list[key].id,
          "expireDate": 4092599349000
        }
      ],
      "tickets": [
        {
          "managed": true,
          "status": "ACTIVE",
          "startDate": times,
          "productId": list[key].id,
          "expireDate": 4092599349000
        }
      ],
      "activated": true
    };
    console.log("已操作成功🎉🎉🎉");
    break;
  }
}

$done({ body: JSON.stringify(resp) });
