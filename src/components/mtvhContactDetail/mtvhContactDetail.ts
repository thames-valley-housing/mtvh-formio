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

    this.addEventListener(this.refs.switchToFreetext, 'click', () => {
      this.switchToContactDetailFreetext(element);
    });

    this.addEventListener(this.refs.switchToDropdown, 'click', () => {
      this.switchToContactDetailDropwdown(element);
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
        this.switchToContactDetailDropwdown(element);
      }
    }
  }

  switchToContactDetailFreetext(element){
    this.refs.selectInput.style.display = 'none';
    this.refs.manualInput.style.display = 'block';
    this.resetValues();
  }

  switchToContactDetailDropwdown(element){
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
      this.updateValue(input);
      this.mtvhValid();
    } 
    else {
      this.updateValue('');
      this.mtvhInvalid();
    }
  }

  mtvhInvalid(){
    this.refs.inlineValidation.innerHTML = '<b style="color:red">Not a valid phone number</b>';
  }

  mtvhValid(){
    this.refs.inlineValidation.innerHTML = '<b style="color:green">Valid phone number</b>';
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

  //////////////////////////// Formio functions not required
  
  /*
  detach() {
    return super.detach();
  }

  destroy() {
    return super.destroy();
  }

  normalizeValue(value, flags = {}) {
    return super.normalizeValue(value, flags);
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
  */

  //////////////////////////// Formio functions amended
  /*
  getValue() {
    return super.getValue();
  }

  updateValue(value, flags = {}) {
    return super.updateValue(value, flags);
  }
  */
 
}
