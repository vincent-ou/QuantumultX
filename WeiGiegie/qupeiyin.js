/* 趣配音 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：7.36.5
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = apis40.qupeiyin.com
 */
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const courseDetail = "/course/detail_new";
const memberIndex = "/member/index";
const courseRelated = "/course/related_course";
const albumCourse = "/album/course_list";

// 处理课程详情接口
if (url.indexOf(courseDetail) != -1) {
  if (obj.data) {
    obj.data.is_needbuy = "0";
    obj.data.is_vip = "0";
  }
  body = JSON.stringify(obj);
}

// 处理会员信息接口
else if (url.indexOf(memberIndex) != -1) {
  if (obj.data) {
    obj.data.is_vip = "1";
    obj.data.vip_endtime = "4102444800";
    obj.data.is_svip = "1";
    obj.data.svip_endtime = "4102444800";
    obj.data.is_aisvip = "1";
    obj.data.aisvip_endtime = "4102444800";
  }
  body = JSON.stringify(obj);
}

// 处理课程列表接口
else if (url.indexOf(courseRelated) != -1 || url.indexOf(albumCourse) != -1) {
  if (obj.data && Array.isArray(obj.data)) {
    obj.data.forEach(video => {
      video.is_needbuy = "0";
      video.is_vip = "0";
    });
  }
  body = JSON.stringify(obj);
}
$done({
  body
});