import { Components } from 'formiojs';
const Input = (Components as any).components.field;
import editForm from './mtvhContactDetail.form';

export default class mtvhContactDetail extends (Input as any) {
  NOT_UK_NUMBER = 'This does not loook like a UK number';
  ERROR_BEEN_SHOWN = false;

  static schema() {
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
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'MTVH Contact details',
    group: 'custom',
    icon: 'phone',
    weight: 10,
    schema: mtvhContactDetail.schema()
  }

  constructor(component, options, data) {
    super(component, options, data);
  }

  init() {
    super.init();
  }

  get inputInfo() {
    const info = super.inputInfo;
    return info;
  }

  public render() {
    return super.render(this.renderTemplate('mtvhContactDetail'));
  }

  attach(element) {
    this.loadRefs(element, {
      phoneNumber: 'single',
      existingDetailsDropdown: 'single',
      switchToFreetext: 'single',
      messageContainer: 'single',
      newDetailsInput: 'single',
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

    this.addEventListener(this.refs.newDetailsInput, 'keyup', (val) => {
      if (this.ERROR_BEEN_SHOWN || this.inputtedPhoneNumber().length > 11){
        this.validatePhoneNumber(element);
      }
    });

    this.addEventListener(this.refs.newDetailsInput, 'blur', (val) => {
      this.validatePhoneNumber(element);
    });

    this.mtvhContactDetailInitiate(element);

    return super.attach(element);
  }

  detach() {
    return super.detach();
  }

  destroy() {
    return super.destroy();
  }

  normalizeValue(value, flags = {}) {
    return super.normalizeValue(value, flags);
  }


  // Required for display of values in readonly mode - Issues with nested forms

  getValue() {
    return super.getValue();
  }

  getValueAt(index) {
    return super.getValueAt(index);
  }

  setValue(value, flags = {}) {
    return super.setValue(value, flags);
  }

  setValueAt(index, value, flags = {}) {
    return super.setValueAt(index, value, flags);
  }

  // Required for display of values in readonly mode - Issues with nested forms

  updateValue(value, flags = {}) {
    return super.updateValue(value);
  }

  // ========= switch between input modes


  mtvhContactDetailInitiate(element){
    this.refs.existingDetailsDropdown.style.display = 'block';
    this.refs.switchToFreetext.style.display = 'block';
    this.refs.newDetailsInput.style.display = 'none';
    this.refs.switchToDropdown.style.display = 'none';

    if (!(this.populateDropdown())){
      this.switchToContactDetailFreetext(element)
    }
  }

  switchToContactDetailFreetext(element){
    this.refs.existingDetailsDropdown.style.display = 'none';
    this.refs.switchToFreetext.style.display = 'none';
    this.refs.newDetailsInput.style.display = 'block';
    this.refs.switchToDropdown.style.display = 'block';

    if (this.ERROR_BEEN_SHOWN || this.inputtedPhoneNumber().length > 11){
      this.validatePhoneNumber(element);
    }
  }

  switchToContactDetailDropwdown(element){
    this.refs.existingDetailsDropdown.style.display = 'block';
    this.refs.switchToFreetext.style.display = 'block';
    this.refs.newDetailsInput.style.display = 'none';
    this.refs.switchToDropdown.style.display = 'none';

    this.setValue(this.refs.existingDetailsDropdown.value);
  }
  getDropdownData(){
    return ['0123456', '789013456', '12390243']
  }



    populateDropdown(){
      const dropdown = this.refs.existingDetailsDropdown
      const options = this.getDropdownData()

      if (options.length == 0) {
          return false
      } else {
        for(let i = 0, l = options.length; i < l; i++){
          const option = options[i];
          dropdown.options.add( new Option(option,option) );
        }
        dropdown.focus();
        return true
      }
    }



  // ======= Validation =======

  validatePhoneNumber(element){
    const input = this.inputtedPhoneNumber();

    if (this.isPhoneNumberValid(input)){
      this.setValue(input);
      this.mtvhValid(element, 'newDetailsInput');
    } else {
      this.setValue('');
      this.mtvhInvalid(element, 'newDetailsInput', this.NOT_UK_NUMBER);
    }
  }

  mtvhInvalid(element,field,error){
    const input = this.inputtedPhoneNumber();

    this.ERROR_BEEN_SHOWN = true;
    element.classList.add('has-error');
    this.refs[field].classList.add('is-invalid');
    // this.refs.messageContainer.style.display = 'block';
    this.refs.messageContainer.innerHTML = '<div class="form-text error">'+error+'</div>';
  }

  mtvhValid(element,field){
    const input = this.inputtedPhoneNumber();

    element.classList.remove('has-error');
    this.refs[field].classList.remove('is-invalid');
    // this.refs.messageContainer.style.display = 'none';
    this.refs.messageContainer.innerHTML = '';
  }

  isPhoneNumberValid(input){
    return /^(?:\W*\d){11}\W*$/.test(input)
  }

  inputtedPhoneNumber(){
    return this.refs.newDetailsInput.value.replace(/\W+/g, '');
  }
}
