import TextFieldComponent from 'formiojs/components/textfield/TextField';
import editForm from './mtvhContactDetail.form';

export default class mtvhContactDetail extends (TextFieldComponent as any) {

  static schema(...extend) {
    return TextFieldComponent.schema({
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
    }, ...extend);
  }

  public static editForm = editForm;

  static get builderInfo() {
    return {
      title: 'MTVH Contact details',
      group: 'custom',
      icon: 'phone',
      weight: 10,
      schema: mtvhContactDetail.schema()
    };
  }

  get defaultSchema() {
    return mtvhContactDetail.schema();
  }

  renderElement(value, index) {
    // Double quotes cause the input value to close so replace them with html quote char.
    if (value && typeof value === 'string') {
      value = value.replace(/"/g, '&quot;');
    }
    const info = this.inputInfo;
    info.attr = info.attr || {};
    info.attr.value = this.getValueAsString(this.formatValue(this.parseValue(value)))
      .replace(/"/g, '&quot;');

    const valueMask = this.component.inputMask;
    const displayMask = this.component.displayMask;
    const hasDifferentDisplayAndSaveFormats = valueMask && displayMask && valueMask !== displayMask;

    if (this.isMultipleMasksField) {
      info.attr.class += ' formio-multiple-mask-input';
    }

    return this.renderTemplate('mtvhContactDetail', {
      prefix: this.prefix,
      suffix: this.suffix,
      input: info,
      value: this.formatValue(this.parseValue(value)),
      hasValueMaskInput: hasDifferentDisplayAndSaveFormats,
      index
    });
  }

  attach(element) {
    this.loadRefs(element, {
      phoneNumber: 'single',
      existingDetailsDropdown: 'single',
      switchToFreetext: 'single',
      messageContainer: 'single',
      input: 'single',
      switchToDropdown: 'single',
    });

    this.addEventListener(this.refs.switchToFreetext, 'click', () => {
      this.switchToContactDetailFreetext(element);
    });
    this.addEventListener(this.refs.switchToDropdown, 'click', () => {
      this.switchToContactDetailDropwdown(element);
    });

    this.addEventListener(this.refs.existingDetailsDropdown, 'change', () => {
      this.setValue(this.refs.existingDetailsDropdown.value);
    });

    this.mtvhContactDetailInitiate(element);

    return super.attach(element);
  }

  mtvhContactDetailInitiate(element) {
    this.refs.existingDetailsDropdown.style.display = 'block';
    this.refs.switchToFreetext.style.display = 'block';
    this.refs.input.style.display = 'none';
    this.refs.switchToDropdown.style.display = 'none';
    this.populateDropdown();
    // if (!(this.populateDropdown())){
    //   this.switchToContactDetailFreetext(element)
    // }
  }

  switchToContactDetailFreetext(element) {
    this.refs.existingDetailsDropdown.style.display = 'none';
    this.refs.switchToFreetext.style.display = 'none';
    this.refs.input[0].style.display = 'block';
    this.refs.switchToDropdown.style.display = 'block';
  }

  switchToContactDetailDropwdown(element) {
    this.refs.existingDetailsDropdown.style.display = 'block';
    this.refs.switchToFreetext.style.display = 'block';
    this.refs.input[0].style.display = 'none';
    this.refs.switchToDropdown.style.display = 'none';
    this.setValue('');
    this.refs.existingDetailsDropdown.value = '';
  }

  getDropdownData() {
    if (this.options.data && this.options.data.isMtvho && this.options.data.phoneNumbers && this.options.data.phoneNumbers.length > 0) {
      return this.options.data.phoneNumbers
    } else {
      return []
    }
  }

  populateDropdown() {
    const dropdown = this.refs.existingDetailsDropdown
    const options = this.getDropdownData()

    if (options.length == 0) {
      return false
    } else {
      for (let i = 0, l = options.length; i < l; i++) {
        const option = options[i];
        dropdown.options.add(new Option(option, option));
      }
      dropdown.focus();
      return true
    }
  }
}
