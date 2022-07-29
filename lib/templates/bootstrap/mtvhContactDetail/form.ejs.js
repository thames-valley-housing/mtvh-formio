Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.readOnly === true) { ;
__p += '\r\n<input value="';
 if (ctx.value) { ;
__p +=
((__t = (ctx.value)) == null ? '' : __t);
 } else { ;

 } ;
__p += '" spellcheck="true" lang="en" class="form-control" type="input" name="data[' +
((__t = (ctx.component.key)) == null ? '' : __t) +
']" ref="mtvhContact" readonly>\r\n';
 } else { ;
__p += '\r\n<div>\r\n  <div ref="selectInput">\r\n    <select lang="en" class="form-control mb-1" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress" ref="existingDetailsDropdown">\r\n      <option value="" selected="selected"></option>\r\n    </select>\r\n    <div class="mt-2"><a ref="switchToFreetext">Switch to text</a></div>\r\n  </div>\r\n\r\n  <div ref="manualInput">\r\n    <input ref="newDetailsInput" type=\'text\' placeholder=\'_____-______\' class="form-control mb-1" autocomplete="tel">\r\n    <div ref="inlineValidation"></div>\r\n    <div class="mt-2"><a ref="switchToDropdown">Switch to dropdown</a></div>\r\n  </div>\r\n\r\n  <input value="';
 if (ctx.value) { ;
__p +=
((__t = (ctx.value)) == null ? '' : __t);
 } else { ;

 } ;
__p += '" spellcheck="true" lang="en" class="form-control" type="hidden" name="data[' +
((__t = (ctx.component.key)) == null ? '' : __t) +
']" ref="mtvhContact">\r\n</div>\r\n';
 } ;

return __p
}