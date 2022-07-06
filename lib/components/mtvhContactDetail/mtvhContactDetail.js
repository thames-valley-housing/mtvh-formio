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
        return _super.call(this, component, options, data) || this;
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
        return _super.prototype.render.call(this, this.renderTemplate('mtvhContactDetail', {}));
    };
    mtvhContactDetail.prototype.attach = function (element) {
        var _this = this;
        this.loadRefs(element, {
            existingDetailsDropdown: 'single',
            switchToFreetext: 'single',
            newDetailsInput: 'single',
            switchToDropdown: 'single',
        });
        this.addEventListener(this.refs.switchToFreetext, 'click', function () {
            _this.switchToContactDetailFreetext(element);
        });
        this.addEventListener(this.refs.switchToDropdown, 'click', function () {
            _this.switchToContactDetailDropwdown(element);
        });
        this.addEventListener(this.refs.existingDetailsDropdown, 'change', function () {
            console.log('Change on dropdown');
            _super.prototype.updateValue.call(_this, _this.refs.existingDetailsDropdown);
        });
        this.addEventListener(this.refs.newDetailsInput, 'keyup', function () {
            console.log('Key up on new details');
            _super.prototype.updateValue.call(_this, _this.refs.newDetailsInput);
            console.log(_this.getValue());
        });
        this.mtvhContactDetailInitiate(element);
        return _super.prototype.attach.call(this, element);
    };
    /////////////////////////////////////// Steps
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
    mtvhContactDetail.prototype.mtvhContactDetailInitiate = function (element) {
        this.refs.existingDetailsDropdown.style.display = 'block';
        this.refs.switchToFreetext.style.display = 'block';
        this.refs.newDetailsInput.style.display = 'none';
        this.refs.switchToDropdown.style.display = 'none';
        if (!(this.populateDropdown())) {
            this.switchToContactDetailFreetext(element);
        }
    };
    mtvhContactDetail.prototype.switchToContactDetailFreetext = function (element) {
        this.refs.existingDetailsDropdown.style.display = 'none';
        this.refs.switchToFreetext.style.display = 'none';
        this.refs.newDetailsInput.style.display = 'block';
        this.refs.switchToDropdown.style.display = 'block';
    };
    mtvhContactDetail.prototype.switchToContactDetailDropwdown = function (element) {
        this.refs.existingDetailsDropdown.style.display = 'block';
        this.refs.switchToFreetext.style.display = 'block';
        this.refs.newDetailsInput.style.display = 'none';
        this.refs.switchToDropdown.style.display = 'none';
    };
    mtvhContactDetail.prototype.mtvhContactDetailStage1 = function (element, postCode) {
        if (this.mtvhValidatePostcode(postCode) == true) {
            if (this.refs.messageContainer.innerHTML == '<div class="form-text error">Enter a valid postcode</div>') {
                this.mtvhValid(element, 'postCode');
            }
            this.mtvhContactDetailStage2(element);
        }
        else {
            this.mtvhInvalid(element, 'postCode', 'Enter a valid postcode');
        }
    };
    mtvhContactDetail.prototype.mtvhContactDetailStage2 = function (element) {
        this.refs.postCodeSelected.innerHTML = this.refs.postCode.value.trim().toUpperCase();
        this.refs.postCodeSection.style.display = 'none';
        this.refs.selectAddressSection.style.display = 'block';
        var selectAddressResultsCnt = 0;
        var selectAddress = this.refs.selectAddress;
        selectAddress.options.length = 0;
        selectAddress.options.add(new Option('Loading ...', ''));
        var mtvhFormatAddress = this.mtvhFormatAddress;
        this.mtvhGetAddresses(this.refs.postCode.value.trim().toLowerCase()).then(function (result) {
            selectAddressResultsCnt = result.addresses.length;
            selectAddress.options.length = 0;
            selectAddress.options.add(new Option(selectAddressResultsCnt + ' results found', ''));
            for (var i = 0, l = result.addresses.length; i < l; i++) {
                var option = result.addresses[i];
                var optionFormat = mtvhFormatAddress(option, result.postcode);
                selectAddress.options.add(new Option(optionFormat, optionFormat));
            }
            selectAddress.focus();
        }, function (error) {
            selectAddress.options.length = 0;
            selectAddress.options.add(new Option('0 results found', ''));
            console.log(error); // Need to do something with this.
        });
    };
    mtvhContactDetail.prototype.mtvhContactDetailStage3 = function (element) {
        this.refs.manualAddressSection.style.display = 'block';
        this.refs.selectAddressSection.style.display = 'none';
        this.refs.postCodeLabel.style.display = 'none';
        this.refs.manualAddress.focus();
    };
    mtvhContactDetail.prototype.mtvhFormatAddress = function (array, postcode) {
        var fields = ['line_1', 'line_2', 'line_3', 'line_4', 'locality', 'town_or_city', 'county'];
        var ret = '';
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            if (array[field] != '') {
                ret = ret + array[field] + ', ';
            }
        }
        return ret + postcode;
    };
    mtvhContactDetail.prototype.mtvhGetAddresses = function (postcode) {
        var xmlhttp = new XMLHttpRequest();
        var url = 'https://api.getaddress.io/find/' + postcode + '?expand=true&sort=true&api-key=' + this.component.gaIoApiKey;
        return new Promise(function (resolve, reject) {
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var responseJSON = JSON.parse(this.responseText);
                    if (responseJSON.addresses) {
                        resolve(responseJSON);
                    }
                    else {
                        reject('Error, status code = ' + xmlhttp.status);
                    }
                }
            };
            xmlhttp.open('GET', url, true);
            xmlhttp.send();
        });
    };
    /////////////////////////////////////// Helpers
    mtvhContactDetail.prototype.mtvhInvalid = function (element, field, error) {
        element.classList.add('has-error');
        this.refs[field].classList.add('is-invalid');
        // this.refs.messageContainer.style.display = 'block';
        this.refs.messageContainer.innerHTML = '<div class="form-text error">' + error + '</div>';
    };
    mtvhContactDetail.prototype.mtvhValid = function (element, field) {
        element.classList.remove('has-error');
        this.refs[field].classList.remove('is-invalid');
        // this.refs.messageContainer.style.display = 'none';
        this.refs.messageContainer.innerHTML = '';
    };
    mtvhContactDetail.prototype.mtvhValidatePostcode = function (input) {
        var regEx = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
        return regEx.test(input);
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
        if (this.refs.address) {
            return this.refs.address.value;
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
        if (this.refs.address) {
            this.refs.address.value = value;
        }
        return _super.prototype.updateValue.call(this);
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
