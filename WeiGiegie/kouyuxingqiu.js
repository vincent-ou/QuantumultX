/* 口语星球 — 口语星球
 * 原作者：WeiGiegie
 * 适配版本：4.5.8
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mapi.kouyuxingqiu.com
 */

let body = $response.body;

try {
  let obj = JSON.parse(body);
  
  if (obj.data) {
    // 场景1: data是对象（权限接口）
    if (typeof obj.data === 'object' && !Array.isArray(obj.data)) {
      obj.data.expireDate = 4102416000000;
      obj.data.havePermission = true;
      obj.data.type = 2;
      obj.data.isVip = true;
      if (obj.data.vipLevel !== undefined) obj.data.vipLevel = 10;
    }
    
    // 场景2: data是数组（课程列表接口）
    else if (Array.isArray(obj.data)) {
      obj.data.forEach(course => {
        course.overTime = 4102416000000;
        if (course.status !== undefined) course.status = 1;
        if (course.isStudyIng !== undefined) course.isStudyIng = 1;
      });
    }
  }
  
  body = JSON.stringify(obj);
} catch(e) {
  console.log("Error: " + e);
}

$done({body});
