Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!ctx.label.hidden && !['radio', 'selectboxes','day','checkbox','mtvhAddress'].includes(ctx.component.type)) { ;
__p += '\n  ' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n\n';
 if (ctx.label.hidden && ctx.label.className && ctx.component.validate.required && ctx.component.type !== 'radio') { ;
__p += '\n  <label class="' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'"></label>\n';
 } ;
__p += '\n\n';
 if (!ctx.label.hidden && ['radio', 'selectboxes','day','checkbox','mtvhAddress'].includes(ctx.component.type)) { ;
__p += '\n  <fieldset>\n    <legend\n      ref="label"\n      class="col-form-label ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'"\n      for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n      id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    >\n      ' +
((__t = ( ctx.t(ctx.component.label, { _userInput: true }) )) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.validate.required == false && ctx.component.type != 'day' ? '<span class="optional-question">(optional)</span>' : '' )) == null ? '' : __t) +
'\n      ';
 if (ctx.component.type === 'number' || ctx.component.type === 'phoneNumber' || ctx.component.type === 'currency') { ;
__p += '\n        <span class=\'sr-only\'>, ' +
((__t = (ctx.t('numeric only'))) == null ? '' : __t) +
',</span>\n      ';
 } ;
__p += '\n      ';
 if (ctx.component.tooltip) { ;
__p += '\n        <i ref="tooltip" tabindex="0" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n      ';
 } ;
__p += '\n    </legend>\n';
 } ;
__p += '\n\n';
 if (ctx.component.description) { ;
__p += '\n  <div id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="form-text">' +
((__t = (ctx.t(ctx.component.description, { _userInput: true }))) == null ? '' : __t) +
'</div>\n';
 } ;
__p += '\n\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n\n';
 if (ctx.component.type === 'radio') { ;
__p += '\n  </fieldset>\n';
 } ;

return __p
}