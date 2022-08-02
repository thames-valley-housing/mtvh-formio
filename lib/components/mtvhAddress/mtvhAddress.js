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
import editForm from './mtvhAddress.form';
var mtvhAddress = /** @class */ (function (_super) {
    __extends(mtvhAddress, _super);
    function mtvhAddress(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    mtvhAddress.schema = function () {
        return Input.schema({
            type: 'mtvhAddress',
            label: 'What is your address?',
            description: 'We need this information so that we can confirm you are an MTVH resident',
            key: 'mtvhAddress',
            tableView: true,
            inputType: 'text',
            'validate': {
                'required': true
            }
        });
    };
    mtvhAddress.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    Object.defineProperty(mtvhAddress.prototype, "inputInfo", {
        get: function () {
            var info = _super.prototype.inputInfo;
            return info;
        },
        enumerable: false,
        configurable: true
    });
    mtvhAddress.prototype.render = function () {
        return _super.prototype.render.call(this, this.renderTemplate('mtvhAddress', {}));
    };
    mtvhAddress.prototype.attach = function (element) {
        var _this = this;
        this.loadRefs(element, {
            postCodeLabel: 'single',
            postCode: 'single',
            findAddress: 'single',
            address: 'single',
            messageContainer: 'single',
            postCodeSection: 'single',
            postCodeChange: 'single',
            postCodeSelected: 'single',
            selectAddressSection: 'single',
            selectAddress: 'single',
            cantFindAddress: 'single',
            manualAddressSection: 'single',
            manualAddress: 'single',
            readonlyAddressSection: 'single',
            readonlyAddress: 'single',
            readonlyAddressChange: 'single'
        });
        this.addEventListener(this.refs.postCode, 'focus', function () {
        });
        this.addEventListener(this.refs.postCodeChange, 'click', function (e) {
            _this.mtvhAddressReset(element);
            _this.mtvhAddressResetData(element);
            e.preventDefault();
        });
        this.addEventListener(this.refs.findAddress, 'click', function () {
            var postCode = _this.refs.postCode.value.trim().toLowerCase();
            _this.mtvhAddressStage1(element, postCode);
        });
        this.addEventListener(this.refs.selectAddress, 'change', function () {
            _this.updateValue(_this.refs.selectAddress.value);
        });
        this.addEventListener(this.refs.cantFindAddress, 'click', function (e) {
            _this.mtvhAddressStage3(element);
            e.preventDefault();
        });
        this.addEventListener(this.refs.readonlyAddressChange, 'click', function (e) {
            _this.updateValue('');
            _this.mtvhAddressReset(element);
            _this.mtvhAddressResetData(element);
            _this.refs.postCode.focus();
            e.preventDefault();
        });
        this.addEventListener(this.refs.manualAddress, 'keyup', function () {
            _this.updateValue(_this.refs.manualAddress.value.replace(/(?:\r\n|\r|\n)/g, ', '));
        });
        this.mtvhAddressInitiate(element);
        return _super.prototype.attach.call(this, element);
    };
    /////////////////////////////////////// Steps
    mtvhAddress.prototype.mtvhAddressInitiate = function (element) {
        var cvar = this.getValue();
        if (cvar !== '' && cvar !== null) {
            this.refs.postCodeSection.style.display = 'none';
            this.refs.postCodeLabel.style.display = 'none';
            this.refs.selectAddressSection.style.display = 'none';
            this.refs.manualAddressSection.style.display = 'none';
            this.refs.readonlyAddress.innerHTML = cvar;
            this.refs.readonlyAddressSection.style.display = 'block';
        }
    };
    mtvhAddress.prototype.mtvhAddressReset = function (element) {
        this.refs.postCode.value = '';
        this.mtvhValid(element, 'postCode');
        this.refs.postCodeSection.style.display = 'block';
        this.refs.postCodeLabel.style.display = 'block';
        this.refs.selectAddressSection.style.display = 'none';
        this.refs.manualAddressSection.style.display = 'none';
        this.refs.readonlyAddressSection.style.display = 'none';
    };
    mtvhAddress.prototype.mtvhAddressResetData = function (element) {
        this.refs.postCode.value = '';
        this.refs.postCodeSelected.innerHTML = '';
        this.refs.readonlyAddress.innerHTML = '';
        // this.refs.selectAddressResults.innerHTML = '0';
        this.refs.selectAddress.options.length = 0;
        this.updateValue('');
    };
    mtvhAddress.prototype.mtvhAddressStage1 = function (element, postCode) {
        if (this.mtvhValidatePostcode(postCode) == true) {
            if (this.refs.messageContainer.innerHTML == '<div class="form-text error">Enter a valid postcode</div>') {
                this.mtvhValid(element, 'postCode');
            }
            this.mtvhAddressStage2(element);
        }
        else {
            this.mtvhInvalid(element, 'postCode', 'Enter a valid postcode');
        }
    };
    mtvhAddress.prototype.mtvhAddressStage2 = function (element) {
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
    mtvhAddress.prototype.mtvhAddressStage3 = function (element) {
        this.refs.manualAddressSection.style.display = 'block';
        this.refs.selectAddressSection.style.display = 'none';
        this.refs.postCodeLabel.style.display = 'none';
        this.refs.manualAddress.focus();
    };
    mtvhAddress.prototype.mtvhFormatAddress = function (array, postcode) {
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
    mtvhAddress.prototype.mtvhGetAddresses = function (postcode) {
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
    mtvhAddress.prototype.mtvhInvalid = function (element, field, error) {
        element.classList.add('has-error');
        this.refs[field].classList.add('is-invalid');
        // this.refs.messageContainer.style.display = 'block';
        this.refs.messageContainer.innerHTML = '<div class="form-text error">' + error + '</div>';
    };
    mtvhAddress.prototype.mtvhValid = function (element, field) {
        element.classList.remove('has-error');
        this.refs[field].classList.remove('is-invalid');
        // this.refs.messageContainer.style.display = 'none';
        this.refs.messageContainer.innerHTML = '';
    };
    mtvhAddress.prototype.mtvhValidatePostcode = function (input) {
        var regEx = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
        return regEx.test(input);
    };
    mtvhAddress.prototype.detach = function () {
        return _super.prototype.detach.call(this);
    };
    mtvhAddress.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    mtvhAddress.prototype.normalizeValue = function (value, flags) {
        if (flags === void 0) { flags = {}; }
        return _super.prototype.normalizeValue.call(this, value, flags);
    };
    // Required for display of values in readonly mode - Issues with nested forms
    mtvhAddress.prototype.getValue = function () {
        if (this.refs.address) {
            return this.refs.address.value;
        }
    };
    mtvhAddress.prototype.getValueAt = function (index) {
        return _super.prototype.getValueAt.call(this, index);
    };
    mtvhAddress.prototype.setValue = function (value, flags) {
        if (flags === void 0) { flags = {}; }
        return _super.prototype.setValue.call(this, value, flags);
    };
    mtvhAddress.prototype.setValueAt = function (index, value, flags) {
        if (flags === void 0) { flags = {}; }
        return _super.prototype.setValueAt.call(this, index, value, flags);
    };
    // Required for display of values in readonly mode - Issues with nested forms
    mtvhAddress.prototype.updateValue = function (value, flags) {
        if (flags === void 0) { flags = {}; }
        if (this.refs.address) {
            this.refs.address.value = value;
        }
        return _super.prototype.updateValue.call(this);
    };
    mtvhAddress.editForm = editForm;
    mtvhAddress.builderInfo = {
        title: 'MTVH Address',
        group: 'custom',
        icon: 'home',
        weight: 10,
        schema: mtvhAddress.schema()
    };
    return mtvhAddress;
}(Input));
export default mtvhAddress;
