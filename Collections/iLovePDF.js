/* iLove PDF — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = service.ilovepdf.com */


var resp = JSON.parse($response.body);

resp = {
  "id": 88846584,
  "name": "Apple",
  "email": "001701.68ecf1bf47734080a0afd313503270a8.0327@apple.com",
  "active": 1,
  "avatar": "https://www.ilovepdf.com/img/avatar/default30.png",
  "limits": {
    "merge": {
      "mb": 4000,
      "files": 500
    },
    "split": {
      "mb": 4000,
      "files": 1
    },
    "compress": {
      "mb": 4000,
      "files": 10
    },
    "officepdf": {
      "mb": 4000,
      "files": 10
    },
    "wordpdf": {
      "mb": 4000,
      "files": 10
    },
    "powerpointpdf": {
      "mb": 4000,
      "files": 10
    },
    "excelpdf": {
      "mb": 4000,
      "files": 10
    },
    "pdfword": {
      "mb": 4000,
      "files": 10
    },
    "pdfpowerpoint": {
      "mb": 4000,
      "files": 10
    },
    "pdfexcel": {
      "mb": 4000,
      "files": 10,
      "pages": 400
    },
    "pdfoffice": {
      "mb": 4000,
      "files": 10
    },
    "pdfjpg": {
      "mb": 4000,
      "files": 10
    },
    "imagepdf": {
      "mb": 4000,
      "files": 80
    },
    "pagenumber": {
      "mb": 4000,
      "files": 10
    },
    "watermark": {
      "mb": 4000,
      "files": 10
    },
    "rotate": {
      "mb": 4000,
      "files": 80
    },
    "unlock": {
      "mb": 4000,
      "files": 10
    },
    "protect": {
      "mb": 4000,
      "files": 80
    },
    "pdfa": {
      "mb": 4000,
      "files": 10
    },
    "repair": {
      "mb": 4000,
      "files": 10
    },
    "organize": {
      "mb": 4000,
      "files": 20
    },
    "resizeimage": {
      "mb": 4000,
      "files": 120
    },
    "compressimage": {
      "mb": 4000,
      "files": 120
    },
    "cropimage": {
      "mb": 4000,
      "files": 1
    },
    "converttojpg": {
      "mb": 4000,
      "files": 120
    },
    "convertfromjpg": {
      "mb": 4000,
      "files": 120
    },
    "rotateimage": {
      "mb": 4000,
      "files": 120
    },
    "watermarkimage": {
      "mb": 4000,
      "files": 120
    },
    "memeimage": {
      "mb": 4000,
      "files": 1
    },
    "editimage": {
      "mb": 50,
      "files": 1
    },
    "editpdf": {
      "mb": 100,
      "files": 1
    },
    "sign": {
      "mb": 50,
      "files": 5
    }
  },
  "mode": 3,
  "premium": true,
  "country": "US",
  "loginkey": "9Uzg80XSQoT6Cx6RQ96V2S7BtlpdjPHB",
  "can_trial": false,
  "current_subscription": null,
  "team_role": "owner",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXJ2aWNlLmlsb3ZlcGRmLmNvbSIsImF1ZCI6IiIsImlhdCI6MTY2NTIxMzY0MiwibmJmIjoxNjY1MjEzNjQyLCJqdGkiOjg4ODQ2NTg0fQ.PSMgFzA2runG2TVX2VIBNQvQYWeYHAjT4AFL_IrKCSU",
  "sus_rbt": false,
  "custom_avatar": 0,
  "signatures_left": 0,
  "sms_left": 0,
  "certificates_left": 0
}

$done({body : JSON.stringify(resp)});
