Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<ul class="formio-wizard-nav-container list-inline" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-nav">\r\n  ';
 ctx.buttonOrder.forEach(function(button) { ;
__p += '\r\n    ';
 if (button === 'next' && ctx.buttons.next) { ;
__p += '\r\n    <li>\r\n      <button class="btn btn-primary btn-wizard-nav-next" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-next" aria-label="' +
((__t = (ctx.t('nextButtonAriaLabel'))) == null ? '' : __t) +
'">' +
((__t = (ctx.t('Continue'))) == null ? '' : __t) +
' &#8594;</button>\r\n    </li>\r\n    ';
 } ;
__p += '\r\n    ';
 if (button === 'submit' && ctx.buttons.submit) { ;
__p += '\r\n    <li>\r\n      ';
 if (ctx.disableWizardSubmit){ ;
__p += '\r\n      <button disabled class="btn btn-primary btn-wizard-nav-submit" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-submit" aria-label="' +
((__t = (ctx.t('submitButtonAriaLabel'))) == null ? '' : __t) +
'">' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
'</button>\r\n      ';
 } else { ;
__p += '\r\n      <button class="btn btn-primary btn-wizard-nav-submit" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-submit" aria-label="' +
((__t = (ctx.t('submitButtonAriaLabel'))) == null ? '' : __t) +
'">' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
'</button>\r\n      ';
 } ;
__p += '\r\n    </li>\r\n    ';
 } ;
__p += '\r\n  ';
 }) ;
__p += '\r\n</ul>\r\n\r\n';
 if (ctx.buttons.previous) { ;
__p += '\r\n  ';
 if (ctx.buttons.submit || ctx.buttons.next) { ;
__p += '\r\n  <p class="mt-5">\r\n  ';
 } else { ;
__p += '\r\n  <p>\r\n  ';
 } ;
__p += '\r\n    <a href="#" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-previous" aria-label="' +
((__t = (ctx.t('previousButtonAriaLabel'))) == null ? '' : __t) +
'">&#8592; Previous page</a>\r\n  </p>\r\n';
 } ;

return __p
}