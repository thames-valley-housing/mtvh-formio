Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = (ctx.className)) == null ? '' : __t) +
'">\n  <div class="row">\n    <div class="col-md-12 col-lg-8">\n      <h1>' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</h1> \n    </div>\n  </div>  \n  <div class="row">\n    <div class="col-md-8">\n      <div class="wizard-page" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n        ' +
((__t = (ctx.wizardNav)) == null ? '' : __t) +
'\n      </div>\n    </div>    \n    <div class="col-md-4">\n     ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n    </div>\n  </div>\n</div>';
return __p
}