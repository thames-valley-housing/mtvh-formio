Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div>\n\n  <div ref="selectInput">\n    <select lang="en" class="form-control mb-3 formio-component-mtvhContactDetail" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress" ref="existingDetailsDropdown">\n      <option value="" selected="selected"></option>\n    </select>\n    <a ref="switchToFreetext", href="#">\n      <span class="input-switch-icon"></span> Provide a different phone number\n      </a>\n  </div>\n\n  <div ref="manualInput">\n    <input ref="newDetailsInput" type=\'number\' class="form-control">\n    <div ref="inlineValidation"></div>\n    <a ref="switchToDropdown", href="#">\n      <span class="input-switch-icon"></span> Choose an existing phone number\n    </a>\n  </div>\n\n  <input value="';
 if (ctx.value) { ;
__p +=
((__t = (ctx.value)) == null ? '' : __t);
 } else { ;

 } ;
__p += '" spellcheck="true" lang="en" class="form-control" type="hidden" name="data[' +
((__t = (ctx.component.key)) == null ? '' : __t) +
']" ref="mtvhContact">\n</div>\n';
return __p
}