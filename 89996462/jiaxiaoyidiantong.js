/* 驾校一点通 — 点通
 * 原作者：89996462
 * 适配版本：v10.6.2
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = vipapi.jxedt.com
 */

var body=$response["body"];var objk=JSON['parse'](body);objk={'code':0x0,'result':{'vipCheckResult':"zlW9SsBvibu+JT9FUFFUy2VSnXcs//FxdzKwYaofC9ij7Z6NpblTKPxI+GeUOs+zxvDy8jq7/Hwv75MAqZ7402iKtz9IATt3yQk6I1gABuJbFKyid8E8+4f0I+0VK96ELJFm3tswVWzx9Z6EM2QLYDg3ixfhUASjTZi6GIwerPxyxQgBjK8vh5YLw7WGn/PXrdHN4tSIpn8p0T5886YR5sB5m2qjG/NRxkNaVpFEmUXR3fc9MeaZiYRMTdho/vMH9JR8VPKaoRV/IT30Tyv8aL6e/+WzDw3Qlvw2vjlHdt0b3LTNRNTec51CT9KakoqYBjidFZ6vl2oyCsjA8/HRDQ=="},'msg':'ok'};body=JSON["stringify"](objk);$done({'body':body});
