Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = (ctx.className)) == null ? '' : __t) +
'">\n  ';
 if (!ctx.panels[ctx.currentPage].hideLabel) { ;
__p += '\n    <div class="row">\n      <div class="col-md-12 col-lg-8">\n        <h1>' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</h1> \n      </div>\n    </div>  \n  ';
 } ;
__p += '\n  <div class="row">\n    <div class="col-md-8">\n      <div class="wizard-page" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n        ' +
((__t = (ctx.wizardNav)) == null ? '' : __t) +
'\n      </div>\n    </div>    \n    <div class="col-md-4">\n      ';
 if (ctx.panels[ctx.currentPage].breadcrumb !== 'none') { ;
__p += '\n        ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>';
return __p
}