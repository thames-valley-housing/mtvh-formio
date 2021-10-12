Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = (ctx.className)) == null ? '' : __t) +
'">\r\n  ';
 if (!ctx.panels[ctx.currentPage].hideLabel) { ;
__p += '\r\n    <div class="row">\r\n      <div class="col-md-12 col-lg-8">\r\n        <h1>' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</h1> \r\n      </div>\r\n    </div>  \r\n  ';
 } ;
__p += '\r\n  <div class="row">\r\n    <div class="col-md-8">\r\n      <div class="wizard-page" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\r\n        ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\r\n        ' +
((__t = (ctx.wizardNav)) == null ? '' : __t) +
'\r\n      </div>\r\n    </div>    \r\n    <div class="col-md-4">\r\n     ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n</div>';
return __p
}