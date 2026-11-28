/* TestFlight — 强制安装 TF 应用（解除设备/平台兼容限制）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 补注释头，逻辑与原版一致
 * [rewrite_local]
 * ^https:\/\/testflight\.apple\.com((\/v3\/accounts\/.+?\/apps$)|(\/v2\/accounts\/.+?\/apps\/.+?\/builds\/.+)) url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/forceinstalltf.js
 * [mitm] hostname = testflight.apple.com */

const url = $request.url
 const responseBody = $response.body
 
     ; (async () => {
         const regeList = /.*?\/v3\/accounts\/.+?\/apps$/
         const regeMainPage = /.*?\/v2\/accounts\/.+?\/apps\/.+?\/builds\/.+/
         const regBiulds = /.*?\/v2\/accounts\/.+?\/apps\/.+?\/platforms\/ios\/trains\/.+?\/builds/
         if (regeList.test(url)) {
             $done({ body: list(responseBody) })
             return
         }
 
         if (regeMainPage.test(url)) {
             if (url.endsWith("install")) {
                 console.log("is install")
                 $done({ body: responseBody })
                 return
             }
 
             $done({ body: info(responseBody) })
             return
         }
 
         if (regBiulds.test(url)) {
             $done({ body: builds(responseBody) })
             return
         }
     })()
         .catch(error => {
             console.log(error)
         }).finally(() => $done())
 
 function info(responseBody) {
     let body = JSON.parse(responseBody)
     let family = {
         "name": "Mac",
         "unsupportedDevices": [
         ],
         "minimumSupportedDevice": null
     }
 
     for (const build of body.data.builds) {
         build.platformCompatible = true
         build.hardwareCompatible = true
         build.compatible = true
         build.permission = "install"
 
 
         build.compatibilityData.compatibleDeviceFamilies.push(family)
     }
 
     let build = body.data.currentBuild
     build.platformCompatible = true
     build.hardwareCompatible = true
     build.compatible = true
     build.permission = "install"
 
 
     build.compatibilityData.compatibleDeviceFamilies.push(family)
     return JSON.stringify(body)
 }
 
 function list(responseBody) {
     if (responseBody === "") {
         $done({ body: responseBody })
     }
 
     let body = JSON.parse(responseBody)
 
     for (const app of body.data) {
         for (const p of app.platforms) {
             if (p.name === "ios") {
                 console.log(p.build.name)
                 p.build.hardwareCompatible = true
                 p.build.compatible = true
             }
         }
     }
 
     return JSON.stringify(body)
 }
 
 function builds(responseBody) {
     let body = JSON.parse(responseBody)
     if (body.error === null) {
         for (const build of body.data) {
             if (build.platform === "ios") {
                 build.compatible = true
             }
         }
     }
 
     return JSON.stringify(body)
 }
