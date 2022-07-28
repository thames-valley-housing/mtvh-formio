var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from 'formiojs';
var Input = Components.components.field;
import editForm from './mtvhContactDetail.form';
var mtvhContactDetail = /** @class */ (function (_super) {
    __extends(mtvhContactDetail, _super);
    function mtvhContactDetail(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.NOT_UK_NUMBER = 'This does not loook like a UK number';
        return _this;
    }
    mtvhContactDetail.schema = function () {
        return Input.schema({
            type: 'mtvhContactDetail',
            label: 'What is your number?',
            description: 'We need to know what number to contact you on',
            key: 'mtvhContactDetail',
            tableView: true,
            inputType: 'text',
            'validate': {
                'required': true
            }
        });
    };
    mtvhContactDetail.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    Object.defineProperty(mtvhContactDetail.prototype, "inputInfo", {
        get: function () {
            var info = _super.prototype.inputInfo;
            return info;
        },
        enumerable: false,
        configurable: true
    });
    mtvhContactDetail.prototype.render = function () {
        return _super.prototype.render.call(this, this.renderTemplate('mtvhContactDetail'));
    };
    mtvhContactDetail.prototype.attach = function (element) {
        var _this = this;
        this.loadRefs(element, {
            phoneNumber: 'single',
            existingDetailsDropdown: 'single',
            switchToFreetext: 'single',
            newDetailsInput: 'single',
            switchToDropdown: 'single',
            mtvhContact: 'single',
            inlineValidation: 'single',
            manualInput: 'single',
            selectInput: 'single',
        });
        this.addEventListener(this.refs.switchToFreetext, 'click', function () {
            _this.switchToContactDetailFreetext(element);
        });
        this.addEventListener(this.refs.switchToDropdown, 'click', function () {
            _this.switchToContactDetailDropwdown(element);
        });
        this.addEventListener(this.refs.existingDetailsDropdown, 'change', function () {
            _this.setValue(_this.refs.existingDetailsDropdown.value);
        });
        this.addEventListener(this.refs.newDetailsInput, 'keyup', function (val) {
            console.log('sdfdsfsd');
            _this.validatePhoneNumber(element);
        });
        this.mtvhContactDetailInitiate(element);
        return _super.prototype.attach.call(this, element);
    };
    mtvhContactDetail.prototype.detach = function () {
        return _super.prototype.detach.call(this);
    };
    mtvhContactDetail.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    mtvhContactDetail.prototype.normalizeValue = function (value, flags) {
        if (flags === void 0) { flags = {}; }
        return _super.prototype.normalizeValue.call(this, value, flags);
    };
    // Required for display of values in readonly mode - Issues with nested forms
    mtvhContactDetail.prototype.getValue = function () {
        if (this.refs.mtvhContact) {
            return this.refs.mtvhContact.value;
        }
    };
    mtvhContactDetail.prototype.getValueAt = function (index) {
        return _super.prototype.getValueAt.call(this, index);
    };
    mtvhContactDetail.prototype.setValue = function (value, flags) {
        if (flags === void 0) { flags = {}; }
        return _super.prototype.setValue.call(this, value, flags);
    };
    mtvhContactDetail.prototype.setValueAt = function (index, value, flags) {
        if (flags === void 0) { flags = {}; }
        return _super.prototype.setValueAt.call(this, index, value, flags);
    };
    // Required for display of values in readonly mode - Issues with nested forms
    mtvhContactDetail.prototype.updateValue = function (value, flags) {
        if (flags === void 0) { flags = {}; }
        if (this.refs.mtvhContact) {
            this.refs.mtvhContact.value = value;
        }
        return _super.prototype.updateValue.call(this);
    };
    // ========= switch between input modes
    mtvhContactDetail.prototype.mtvhContactDetailInitiate = function (element) {
        if (!(this.populateDropdown())) {
            this.switchToContactDetailFreetext(element);
        }
        else {
            this.switchToContactDetailDropwdown(element);
        }
    };
    mtvhContactDetail.prototype.switchToContactDetailFreetext = function (element) {
        this.refs.selectInput.style.display = 'none';
        this.refs.manualInput.style.display = 'block';
        this.resetValues();
    };
    mtvhContactDetail.prototype.switchToContactDetailDropwdown = function (element) {
        this.refs.selectInput.style.display = 'block';
        this.refs.manualInput.style.display = 'none';
        this.resetValues();
    };
    mtvhContactDetail.prototype.resetValues = function () {
        this.updateValue('');
        this.refs.newDetailsInput.value = '';
        this.refs.inlineValidation.innerHTML = '';
        this.refs.existingDetailsDropdown.selectedIndex = 0;
    };
    mtvhContactDetail.prototype.getDropdownData = function () {
        return ['0123456', '789013456', '12390243'];
    };
    mtvhContactDetail.prototype.populateDropdown = function () {
        var dropdown = this.refs.existingDetailsDropdown;
        var options = this.getDropdownData();
        if (options.length == 0) {
            return false;
        }
        else {
            for (var i = 0, l = options.length; i < l; i++) {
                var option = options[i];
                dropdown.options.add(new Option(option, option));
            }
            dropdown.focus();
            return true;
        }
    };
    // ======= Validation =======
    mtvhContactDetail.prototype.validatePhoneNumber = function (element) {
        var input = this.inputtedPhoneNumber();
        if (this.isPhoneNumberValid(input)) {
            this.updateValue(input);
            this.mtvhValid();
        }
        else {
            this.updateValue('');
            this.mtvhInvalid();
        }
    };
    mtvhContactDetail.prototype.mtvhInvalid = function () {
        this.refs.inlineValidation.innerHTML = '<b style="color:red">Not a valid phone number</b>';
    };
    mtvhContactDetail.prototype.mtvhValid = function () {
        this.refs.inlineValidation.innerHTML = '<b style="color:green">Valid phone number</b>';
    };
    mtvhContactDetail.prototype.isPhoneNumberValid = function (input) {
        return /^(?:\W*\d){11}\W*$/.test(input);
    };
    mtvhContactDetail.prototype.inputtedPhoneNumber = function () {
        return this.refs.newDetailsInput.value.replace(/\W+/g, '');
    };
    mtvhContactDetail.editForm = editForm;
    mtvhContactDetail.builderInfo = {
        title: 'MTVH Contact details',
        group: 'custom',
        icon: 'phone',
        weight: 10,
        schema: mtvhContactDetail.schema()
    };
    return mtvhContactDetail;
}(Input));
export default mtvhContactDetail;
