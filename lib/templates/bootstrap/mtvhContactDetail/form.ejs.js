Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.readOnly === true) { ;
__p += '\n<input value="';
 if (ctx.value) { ;
__p +=
((__t = (ctx.value)) == null ? '' : __t);
 } else { ;

 } ;
__p += '" spellcheck="true" lang="en" class="form-control" type="input" name="data[' +
((__t = (ctx.component.key)) == null ? '' : __t) +
']" ref="mtvhContact" readonly>\n';
 } else { ;
__p += '\n<div>\n  <div ref="selectInput">\n    <select lang="en" class="form-control mb-1 formio-component-mtvhContactDetail" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress" ref="existingDetailsDropdown">\n      <option value="" selected="selected"></option>\n    </select>\n    <div class="mt-2">\n      <a ref="switchToFreetext" href="#">\n      <span class="input-switch-icon"></span> Provide a different phone number\n      </a>\n    </div>\n  </div>\n\n  <div ref="manualInput">\n    <input ref="newDetailsInput" type=\'text\' class="form-control  mb-1" autocomplete="tel">\n    <div ref="inlineValidation"></div>\n    <div class="mt-2">\n      <a ref="switchToDropdown" href="#">\n        <span class="input-switch-icon"></span> Choose an existing phone number\n      </a>\n    </div>\n  </div>\n\n  <input value="';
 if (ctx.value) { ;
__p +=
((__t = (ctx.value)) == null ? '' : __t);
 } else { ;

 } ;
__p += '" spellcheck="true" lang="en" class="form-control" type="hidden" name="data[' +
((__t = (ctx.component.key)) == null ? '' : __t) +
']" ref="mtvhContact">\n</div>\n';
 } ;
__p += '\n';
return __p
}