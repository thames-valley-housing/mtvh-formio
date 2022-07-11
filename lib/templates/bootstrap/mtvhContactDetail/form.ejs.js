Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div>\n\n  <select lang="en" class="form-control mb-3" type="text" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-selectAddress" ref="existingDetailsDropdown">\n    <option value="" selected="selected"></option>\n  </select>\n  <a ref="switchToFreetext">Switch to text</a>\n\n  <input ref="newDetailsInput" type=\'number\' placeholder=\'_____-______\' class="form-control"></div>\n  <a ref="switchToDropdown">Switch to dropdown</a>\n\n  <div ref=\'messageContainer\'></div>\n</div>\n';
return __p
}