Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" class="card" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\n  <div class="card-body">\n    <h5 class="card-title">Sections</h5>\n    <div class="card-text">\n      <ul class="mtvh-ul">\n        ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n          ';
 if (panel.breadcrumb !== 'none') { ;
__p += '\n            <li class="page-item' +
((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
'" style="cursor: pointer;">\n              <span ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (ctx.t(panel.title))) == null ? '' : __t) +
'</span>\n            </li>\n          ';
 } ;
__p += '\n        ';
 }) ;
__p += '\n      </ul>\n    </div>\n  </div> \n</nav>\n' +
((__t = (ctx.wizard)) == null ? '' : __t);
return __p
}