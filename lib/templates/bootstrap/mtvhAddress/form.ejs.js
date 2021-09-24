Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div ref="element" class="mt-4">\r\n  <div ref="postCodeLabel">\r\n    <label ref="label" class="col-form-label label-sm" for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-postCode">\r\n      Postcode\r\n    </label>\r\n  </div>\r\n  <div ref="postCodeSection" id="postCodeSection">\r\n    <input id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-postCode" value="" lang="en" class="form-control" type="text" style="text-transform: uppercase;" ref="postCode" maxlength="9">\r\n    <button lang="en" class="btn btn-secondary btn-md mt-3" type="button" ref="findAddress">Find address</button>\r\n  </div>\r\n  <div ref="selectAddressSection" style="display:none;">\r\n    <p><b class="pr-3" ref="postCodeSelected"></b> <a href="#" ref="postCodeChange">Change</a></p>\r\n    <label ref="label" class="col-form-label label-sm mt-3" for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress">\r\n      Select address\r\n    </label>\r\n    <select lang="en" class="form-control mb-3" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress" ref="selectAddress">\r\n      <option value="" selected="selected"></option>\r\n      <option value="label"><span>label</span></option>\r\n      <option value="label2"><span>label2</span></option>\r\n    </select>\r\n    <a href="#" ref="cantFindAddress">I can\'t find my address in this list</a>\r\n  </div>\r\n  <div ref="manualAddressSection" style="display:none;">\r\n    <label ref="label" class="col-form-label d-none" for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-manualAddress">\r\n      Address\r\n    </label>\r\n    <textarea rows="3" spellcheck="true" lang="en" class="form-control" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-manualAddress" ref="manualAddress"></textarea>\r\n  </div>\r\n  <input value="" spellcheck="true" lang="en" class="form-control" type="hidden" name="data[' +
((__t = (ctx.component.key)) == null ? '' : __t) +
']" ref="address">\r\n</div>';
return __p
}