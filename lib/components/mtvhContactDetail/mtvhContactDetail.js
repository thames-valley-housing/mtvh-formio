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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import TextFieldComponent from 'formiojs/components/textfield/TextField';
import editForm from './mtvhContactDetail.form';
var mtvhContactDetail = /** @class */ (function (_super) {
    __extends(mtvhContactDetail, _super);
    function mtvhContactDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mtvhContactDetail.schema = function () {
        var extend = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extend[_i] = arguments[_i];
        }
        return TextFieldComponent.schema.apply(TextFieldComponent, __spreadArrays([{
                type: 'mtvhContactDetail',
                label: 'What is your number?',
                description: 'We need to know what number to contact you on',
                key: 'mtvhContactDetail',
                tableView: true,
                inputType: 'tel',
                inputMask: '99999999999',
                inputMode: 'decimal',
                displayMask: '',
                required: true,
            }], extend));
    };
    Object.defineProperty(mtvhContactDetail, "builderInfo", {
        get: function () {
            return {
                title: 'MTVH Contact details',
                group: 'custom',
                icon: 'phone',
                weight: 10,
                schema: mtvhContactDetail.schema()
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mtvhContactDetail.prototype, "defaultSchema", {
        get: function () {
            return mtvhContactDetail.schema();
        },
        enumerable: false,
        configurable: true
    });
    mtvhContactDetail.prototype.renderElement = function (value, index) {
        // Double quotes cause the input value to close so replace them with html quote char.
        if (value && typeof value === 'string') {
            value = value.replace(/"/g, '&quot;');
        }
        var info = this.inputInfo;
        info.attr = info.attr || {};
        info.attr.value = this.getValueAsString(this.formatValue(this.parseValue(value)))
            .replace(/"/g, '&quot;');
        var valueMask = this.component.inputMask;
        var displayMask = this.component.displayMask;
        var hasDifferentDisplayAndSaveFormats = valueMask && displayMask && valueMask !== displayMask;
        if (this.isMultipleMasksField) {
            info.attr.class += ' formio-multiple-mask-input';
        }
        return this.renderTemplate('mtvhContactDetail', {
            prefix: this.prefix,
            suffix: this.suffix,
            input: info,
            value: this.formatValue(this.parseValue(value)),
            hasValueMaskInput: hasDifferentDisplayAndSaveFormats,
            index: index
        });
    };
    mtvhContactDetail.prototype.attach = function (element) {
        var _this = this;
        this.loadRefs(element, {
            phoneNumber: 'single',
            existingDetailsDropdown: 'single',
            switchToFreetext: 'single',
            messageContainer: 'single',
            input: 'single',
            switchToDropdown: 'single',
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
        this.mtvhContactDetailInitiate(element);
        return _super.prototype.attach.call(this, element);
    };
    mtvhContactDetail.prototype.mtvhContactDetailInitiate = function (element) {
        this.refs.existingDetailsDropdown.style.display = 'block';
        this.refs.switchToFreetext.style.display = 'block';
        this.refs.input.style.display = 'none';
        this.refs.switchToDropdown.style.display = 'none';
        this.populateDropdown();
        // if (!(this.populateDropdown())){
        //   this.switchToContactDetailFreetext(element)
        // }
    };
    mtvhContactDetail.prototype.switchToContactDetailFreetext = function (element) {
        this.refs.existingDetailsDropdown.style.display = 'none';
        this.refs.switchToFreetext.style.display = 'none';
        this.refs.input[0].style.display = 'block';
        this.refs.switchToDropdown.style.display = 'block';
    };
    mtvhContactDetail.prototype.switchToContactDetailDropwdown = function (element) {
        this.refs.existingDetailsDropdown.style.display = 'block';
        this.refs.switchToFreetext.style.display = 'block';
        this.refs.input[0].style.display = 'none';
        this.refs.switchToDropdown.style.display = 'none';
        this.setValue('');
        this.refs.existingDetailsDropdown.value = '';
    };
    mtvhContactDetail.prototype.getDropdownData = function () {
        if (this.options.data && this.options.data.isMtvho && this.options.data.phoneNumbers && this.options.data.phoneNumbers.length > 0) {
            return this.options.data.phoneNumbers;
        }
        else {
            return [];
        }
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
    mtvhContactDetail.editForm = editForm;
    return mtvhContactDetail;
}(TextFieldComponent));
export default mtvhContactDetail;
