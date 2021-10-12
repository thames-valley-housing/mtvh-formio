Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!ctx.label.hidden && !['radio', 'selectboxes','day','checkbox','mtvhAddress'].includes(ctx.component.type)) { ;
__p += '\r\n  ' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\r\n';
 } ;
__p += '\r\n\r\n';
 if (ctx.label.hidden && ctx.label.className && ctx.component.validate.required && ctx.component.type !== 'radio') { ;
__p += '\r\n  <label class="' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'"></label>\r\n';
 } ;
__p += '\r\n\r\n';
 if (!ctx.label.hidden && ['radio', 'selectboxes','day','checkbox','mtvhAddress'].includes(ctx.component.type)) { ;
__p += '\r\n  <fieldset>\r\n    <legend\r\n      ref="label"\r\n      class="col-form-label ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'"\r\n      for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n      id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    >\r\n      ' +
((__t = ( ctx.t(ctx.component.label, { _userInput: true }) )) == null ? '' : __t) +
'\r\n      ' +
((__t = ( ctx.component.validate.required == false && ctx.component.type != 'day' ? '<span class="optional-question">(optional)</span>' : '' )) == null ? '' : __t) +
'\r\n      ';
 if (ctx.component.type === 'number' || ctx.component.type === 'phoneNumber' || ctx.component.type === 'currency') { ;
__p += '\r\n        <span class=\'sr-only\'>, ' +
((__t = (ctx.t('numeric only'))) == null ? '' : __t) +
',</span>\r\n      ';
 } ;
__p += '\r\n      ';
 if (ctx.component.tooltip) { ;
__p += '\r\n        <i ref="tooltip" tabindex="0" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\r\n      ';
 } ;
__p += '\r\n    </legend>\r\n';
 } ;
__p += '\r\n\r\n';
 if (ctx.component.description) { ;
__p += '\r\n  <div id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="form-text">' +
((__t = (ctx.t(ctx.component.description, { _userInput: true }))) == null ? '' : __t) +
'</div>\r\n';
 } ;
__p += '\r\n\r\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\r\n\r\n';
 if (ctx.component.type === 'radio') { ;
__p += '\r\n  </fieldset>\r\n';
 } ;

return __p
}