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
    return super.render(this.renderTemplate('mtvhContactDetail', {}));
  }

  attach(element) {

    this.loadRefs(element, {
      existingDetailsDropdown: 'single',
      switchToFreetext: 'single',

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
      this.setValue(this.refs.newDetailsInput.value);
    });

    this.mtvhContactDetailInitiate(element);

    return super.attach(element);
  }

  /////////////////////////////////////// Steps

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

    this.setValue(this.refs.newDetailsInput.value);
  }

  switchToContactDetailDropwdown(element){
    this.refs.existingDetailsDropdown.style.display = 'block';
    this.refs.switchToFreetext.style.display = 'block';
    this.refs.newDetailsInput.style.display = 'none';
    this.refs.switchToDropdown.style.display = 'none';
    
    this.setValue(this.refs.existingDetailsDropdown.value);
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



  /*
  get defaultSchema() {
    return mtvhContactDetail.schema();
  }

  get skipInEmail() {
    return false;
  }
  */

}
