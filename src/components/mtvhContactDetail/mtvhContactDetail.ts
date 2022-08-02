import { Components } from 'formiojs';
const Input = (Components as any).components.field;
import editForm from './mtvhContactDetail.form';

export default class mtvhContactDetail extends (Input as any) {

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
      newDetailsInput: 'single',
      switchToDropdown: 'single',
      mtvhContact: 'single',
      inlineValidation: 'single',
      manualInput: 'single',
      selectInput: 'single',
    });

    this.addEventListener(this.refs.switchToFreetext, 'click', (event) => {
      event.preventDefault();
      this.switchToContactDetailFreetext(element);
    });

    this.addEventListener(this.refs.switchToDropdown, 'click', (event) => {
      event.preventDefault();
      this.switchToContactDetailDropdown(element);
    });

    this.addEventListener(this.refs.existingDetailsDropdown, 'change', () => {
      this.updateValue(this.refs.existingDetailsDropdown.value);
    });

    this.addEventListener(this.refs.newDetailsInput, 'keyup', (val) => {
      this.validatePhoneNumber(element);
    });

    this.mtvhContactDetailInitiate(element);

    return super.attach(element);
  }


  // ========= switch between input modes


  mtvhContactDetailInitiate(element){
    if(this.refs.selectInput){ //Check for readonly mode
      if (!(this.populateDropdown())){
        this.switchToContactDetailFreetext(element)
      }
      else{
        this.switchToContactDetailDropdown(element);
      }
    }
  }

  switchToContactDetailFreetext(element){
    this.refs.selectInput.style.display = 'none';
    this.refs.manualInput.style.display = 'block';
    this.resetValues();
  }

  switchToContactDetailDropdown(element){
    this.refs.selectInput.style.display = 'block';
    this.refs.manualInput.style.display = 'none';
    this.resetValues();
  }

  resetValues(){
    this.updateValue('');
    this.refs.newDetailsInput.value = '';
    this.refs.inlineValidation.innerHTML = '';
    this.refs.existingDetailsDropdown.selectedIndex = 0;
  }

  // ======= Dropdown =======

  getDropdownData(){
    if (this.options.data && this.options.data.isMtvho && this.options.data.phoneNumbers && this.options.data.phoneNumbers.length > 0) {
      return this.options.data.phoneNumbers
    } else {
      return []
    }
  }

  getSelected() {
    if (this.options.data && this.options.data.selectedPhoneNumber && this.options.data.selectedPhoneNumber.length > 0) {
      return this.options.data.selectedPhoneNumber
    } else {
      return ''
    }
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
      setTimeout( () => {
        this.setValue(this.getSelected());
        this.refs.existingDetailsDropdown.value = this.getSelected();
      }, 200);
      return true
    }
  }

  // ======= Validation =======

  validatePhoneNumber(element){
    const input = this.inputtedPhoneNumber();

    if (this.isPhoneNumberValid(input)){
      this.updateValue(input);
      this.mtvhValid();
    }
    else {
      this.updateValue('');
      this.mtvhInvalid();
    }
  }

  mtvhInvalid(){
    if (this.inputtedPhoneNumber().length < 11) {
      this.refs.inlineValidation.innerHTML = '<b style="color:orange">A valid UK phone number must be 11 digits</b>'
    } else {
      this.refs.inlineValidation.innerHTML = '<b style="color:red">Not a valid UK phone number</b>';
    }
  }

  mtvhValid(){
    this.refs.inlineValidation.innerHTML = '<b style="color:green">Valid UK phone number</b>';
  }

  isPhoneNumberValid(input){
    return /^(?:\W*\d){11}\W*$/.test(input)
  }

  inputtedPhoneNumber(){
    return this.refs.newDetailsInput.value.replace(/\W+/g, '');
  }

  //////////////////////////////// Formio functions

  updateValue(value, flags = {}) {
    if(this.refs.mtvhContact){
      this.refs.mtvhContact.value = value;
    }
    return super.updateValue();
  }

  getValue() {
    if(this.refs.mtvhContact){
      return this.refs.mtvhContact.value;
    }
  }
}
