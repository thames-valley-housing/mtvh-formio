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
']" ref="address" readonly>\n';
 } else { ;
__p += '\n<div ref="element">\n  <div ref="postCodeLabel">\n    <label ref="label" class="col-form-label label-sm" for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-postCode">\n      Postcode\n    </label>\n  </div>\n  <div ref="postCodeSection" id="postCodeSection">\n    <input id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-postCode" value="" lang="en" class="form-control" type="text" style="text-transform: uppercase;" ref="postCode" maxlength="9">\n    <button lang="en" class="btn btn-secondary btn-md mt-3" type="button" ref="findAddress">Find address</button>\n  </div>\n  <div ref="selectAddressSection" style="display:none;">\n    <p><span style="font-weight:bold" class="pr-3" ref="postCodeSelected"></span> <a href="#" ref="postCodeChange">Change</a></p>\n    <label ref="label" class="col-form-label label-sm mt-3" for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress">\n      Select address\n    </label>\n    <select lang="en" class="form-control mb-3" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress" ref="selectAddress">\n      <option value="" selected="selected"></option>\n      <option value="label"><span>label</span></option>\n      <option value="label2"><span>label2</span></option>\n    </select>\n    <a href="#" ref="cantFindAddress">I can\'t find my address in this list</a>\n  </div>\n  <div ref="manualAddressSection" style="display:none;">\n    <label ref="label" class="col-form-label d-none" for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-manualAddress">\n      Address\n    </label>\n    <textarea rows="3" spellcheck="true" lang="en" class="form-control" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-manualAddress" ref="manualAddress"></textarea>\n  </div>\n  <div ref="readonlyAddressSection" style="display:none;">\n    <p><span style="font-weight:bold" class="pr-3" ref="readonlyAddress"></span><br><a href="#" ref="readonlyAddressChange">Change</a></p>\n  </div>\n  <input value="';
 if (ctx.value) { ;
__p +=
((__t = (ctx.value)) == null ? '' : __t);
 } else { ;

 } ;
__p += '" spellcheck="true" lang="en" class="form-control" type="hidden" name="data[' +
((__t = (ctx.component.key)) == null ? '' : __t) +
']" ref="address">\n</div>\n';
 } ;

return __p
}