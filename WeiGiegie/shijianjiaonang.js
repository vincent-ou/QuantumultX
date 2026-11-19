/* 时间胶囊 — 写给亲爱未来的日记本
 * 原作者：WeiGiegie
 * 适配版本：3.7
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.timecaps.app
 */
// 判断平台
const isLoon = typeof $loon !== "undefined";
const isQuantumultX = typeof $task !== "undefined";
const isSurge = typeof $httpClient !== "undefined" && !isQuantumultX;

// 存储函数
function saveUserId(userId) {
  if (isLoon || isSurge) {
    $persistentStore.write(userId, "TimeCapsUserID");
  } else if (isQuantumultX) {
    $prefs.setValueForKey(userId, "TimeCapsUserID");
  }
}

// 读取函数
function readUserId() {
  if (isLoon || isSurge) {
    return $persistentStore.read("TimeCapsUserID");
  } else if (isQuantumultX) {
    return $prefs.valueForKey("TimeCapsUserID");
  }
  return null;
}

// 主处理逻辑
if ($request && $response) {
  const url = $request.url;

  // 第一步：获取userID
  if (url.includes("/v1/snapshots?since")) {
    try {
      const body = JSON.parse($response.body);
      if (body.pieceLogs && body.pieceLogs.length > 0) {
        const userId = body.pieceLogs[0].userID;
        saveUserId(userId);
        $done({
          body: $response.body
        });
      } else {
        $done({
          body: $response.body
        });
      }
    } catch (error) {
      $done({
        body: $response.body
      });
    }
  }

  // 第二步：修改订阅
  else if (url.includes("/v1/subscriptions")) {
    const userId = readUserId();
    if (!userId) {
      $done({
        body: $response.body
      });
      return;
    }
    const subscriptionResponse = [{
      "source": "apple",
      "status": "active",
      "userID": userId,
      "renewedAt": "2025-11-18T12:28:10Z",
      "productID": "com.PolarisChen.TimeCaps.Pro.Yearly",
      "expiresAt": "2099-12-31T23:59:59Z",
      "renewsAt": "2025-12-18T12:28:10Z",
      "purchasedAt": "2025-11-18T12:28:11Z"
    }];
    $done({
      body: JSON.stringify(subscriptionResponse)
    });
  }

  // 其他请求
  else {
    $done({
      body: $response.body
    });
  }
} else {
  $done();
}