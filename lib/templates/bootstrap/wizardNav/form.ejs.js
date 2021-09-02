Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="row" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-nav">\n  ';
 if (ctx.buttons.submit) { ;
__p += '\n  <div class="col-md-12"><span><button class="btn btn-primary btn-wizard-nav-submit" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-submit">' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
'</button></span></div>\n  ';
 } ;
__p += '\n  ';
 if (ctx.buttons.next) { ;
__p += '\n  <div class="col-md-12"><span><button class="btn btn-primary btn-wizard-nav-next" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-next">' +
((__t = (ctx.t('next'))) == null ? '' : __t) +
'</button></span></div>\n  ';
 } ;
__p += '\n</div>';
return __p
}