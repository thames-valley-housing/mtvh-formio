Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" class="card" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\r\n  <div class="card-body">\r\n    <h5 class="card-title">Sections</h5>\r\n    <div class="card-text">\r\n      <ul class="mtvh-ul">\r\n        ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\r\n          ';
 if (panel.breadcrumb !== 'none') { ;
__p += '\r\n            <li class="page-item' +
((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
'" style="cursor: pointer;">\r\n              <span ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (ctx.t(panel.title))) == null ? '' : __t) +
'</span>\r\n            </li>\r\n          ';
 } ;
__p += '\r\n        ';
 }) ;
__p += '\r\n      </ul>\r\n    </div>\r\n  </div> \r\n</nav>\r\n' +
((__t = (ctx.wizard)) == null ? '' : __t);
return __p
}