/* 电子请柬 — 电子请柬制作 - 婚礼宝宝满月邀请函视频制作
 * 原作者：WeiGiegie
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * 身份还原：外层包装拦截 $done，输出中若含作者推广链接则恢复用户原始昵称/头像
 * 混淆说明：原版为 jsjiami/混淆代码，核心未完全还原；推广与作者身份信息已清理
 * [rewrite_local]
 * [mitm] hostname = cn.invit.vip,www.lovewith.me,poster.leminet.cn
 */
(function () {
  var __orig = null;
  try { __orig = JSON.parse($response.body); } catch (e) {}
  var __ident = {};
  (function __collect(o) {
    if (!o || typeof o !== 'object') return;
    for (var k in o) {
      var v = o[k];
      if ((k === 'nickname' || k === 'username' || k === 'userName' || k === 'nick' || k === 'nickName' || k === 'avatar' || k === 'headImg' || k === 'avatarUrl') && typeof v === 'string' && !(k in __ident)) __ident[k] = v;
      if (v && typeof v === 'object') __collect(v);
    }
  })(__orig);
  function __sanitizedDone(res) {
    try {
      if (res && typeof res.body === 'string' && (res.body.indexOf('t.me/GieGie777') !== -1 || res.body.indexOf('GieGie777') !== -1)) {
        var obj = JSON.parse(res.body);
        (function __walk(o) {
          if (!o || typeof o !== 'object') return;
          for (var k in o) {
            var v = o[k];
            if (typeof v === 'string' && (v.indexOf('t.me/GieGie777') !== -1 || v.indexOf('GieGie777') !== -1)) {
              if (k in __ident) o[k] = __ident[k];
              else delete o[k];
            } else if (v && typeof v === 'object') __walk(v);
          }
        })(obj);
        res.body = JSON.stringify(obj);
      }
    } catch (e) {}
    return $done(res);
  }
  (function ($done) {


var _0x16df1c=["117.","68.108.100.107.108.123.76.113.121.123.108.122.122.96.102.103.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51."];function _0x91d99g(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0xag5cfb(_c){var _0xg1cc1a="4|1|0|2|3".split(_0x91d99g(_0x16df1c[0])),_0x3efcde=0;while(!![]){switch(+_0xg1cc1a[_0x3efcde++]){case 0:var _3=-1;continue;case 1:var _2=[];continue;case 2:var _4=-1;continue;case 3:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s*h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s/h;}(op_1,op_2);_2.push(value);_4++;break;}case _.xor:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.pop:{return _2[_4];}}}continue;case 4:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0xag5cfb([32,626146,32,626146,38,37]);}();i<program['\x62\x6f\x64\x79']['\x6c\x65\x6e\x67\x74\x68'];eval(String.fromCharCode(105,43,43))){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(node['\x63\x61\x6c\x6c\x65\x65']['\x74\x79\x70\x65']===_0x91d99g(_0x16df1c[1])){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0x7bea="1|2|0".split(_0x91d99g(_0x16df1c[2])),_0x24bcg=0;while(!![]){switch(+_0x7bea[_0x24bcg++]){case 0:return evalute(node,scope);continue;case 1:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 2:if(!evalute){throw new Error(_0x91d99g(_0x16df1c[3]),node['\x74\x79\x70\x65']);}continue;}break;}}if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("eliforp/50v/evolog/em.htiwevol.www//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){var _0xf738e;let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);_0xf738e=function(){return _0xag5cfb([32,814166,32,814163,38,37]);}();Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{vip_expire:4092566400,balance:999880});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}else if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("ofni/sresu/piv.tivni.nc//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{username:"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037",vip_exp:4092566400,is_vip:1,balance:999880});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}else if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("eliforp/10v/nc.tenimel.retsop//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{username:"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037",vip_expire:4092566400,vip:!![]});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}
  })(__sanitizedDone);
})();
