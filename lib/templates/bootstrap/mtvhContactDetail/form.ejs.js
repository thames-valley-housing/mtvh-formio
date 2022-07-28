Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div>\r\n\r\n  <select lang="en" class="form-control mb-3" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress" ref="existingDetailsDropdown">\r\n    <option value="" selected="selected"></option>\r\n  </select>\r\n  <a ref="switchToFreetext">Switch to text</a>\r\n\r\n  <input ref="newDetailsInput" type=\'number\' placeholder=\'_____-______\' class="form-control"></div>\r\n  <a ref="switchToDropdown">Switch to dropdown</a>\r\n\r\n  <div ref=\'messageContainer\'></div>\r\n</div>\r\n';
return __p
}