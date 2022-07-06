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
      console.log('Change on dropdown')
      super.updateValue(this.refs.existingDetailsDropdown);
    });

    this.addEventListener(this.refs.newDetailsInput, 'keyup', () => {
      console.log('Key up on new details')
      super.updateValue(this.refs.newDetailsInput);
      console.log(this.getValue())
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
  }

  switchToContactDetailDropwdown(element){
    this.refs.existingDetailsDropdown.style.display = 'block';
    this.refs.switchToFreetext.style.display = 'block';
    this.refs.newDetailsInput.style.display = 'none';
    this.refs.switchToDropdown.style.display = 'none';
  }




  mtvhContactDetailStage1(element,postCode){
    if(this.mtvhValidatePostcode(postCode)==true){
      if(this.refs.messageContainer.innerHTML == '<div class="form-text error">Enter a valid postcode</div>'){
        this.mtvhValid(element,'postCode');
      }
      this.mtvhContactDetailStage2(element)
    }
    else{
      this.mtvhInvalid(element,'postCode','Enter a valid postcode')
    }
  }

  mtvhContactDetailStage2(element){
    this.refs.postCodeSelected.innerHTML = this.refs.postCode.value.trim().toUpperCase();
    this.refs.postCodeSection.style.display = 'none';
    this.refs.selectAddressSection.style.display = 'block';
    let selectAddressResultsCnt = 0;
    const selectAddress = this.refs.selectAddress;
    selectAddress.options.length = 0;
    selectAddress.options.add( new Option('Loading ...','') );
    const mtvhFormatAddress = this.mtvhFormatAddress;

    this.mtvhGetAddresses(this.refs.postCode.value.trim().toLowerCase()).then(function(result:any){
      selectAddressResultsCnt = result.addresses.length;

      selectAddress.options.length = 0;
      selectAddress.options.add( new Option(selectAddressResultsCnt+' results found','') );
      for(let i = 0, l = result.addresses.length; i < l; i++){
        const option = result.addresses[i];
        const optionFormat = mtvhFormatAddress(option,result.postcode);
        selectAddress.options.add( new Option(optionFormat,optionFormat) );
      }
      selectAddress.focus();

    }, function(error) {
      selectAddress.options.length = 0;
      selectAddress.options.add( new Option('0 results found','') );
      console.log(error); // Need to do something with this.
    })
  }

  mtvhContactDetailStage3(element){
    this.refs.manualAddressSection.style.display = 'block';
    this.refs.selectAddressSection.style.display = 'none';
    this.refs.postCodeLabel.style.display = 'none';
    this.refs.manualAddress.focus();
  }

  mtvhFormatAddress(array,postcode){
    const fields=['line_1','line_2','line_3','line_4','locality','town_or_city','county']
    let ret = ''
    for (const field of fields) {
      if(array[field]!=''){
        ret = ret + array[field]+', ';
      }
    }
    return ret+postcode;
  }

  mtvhGetAddresses(postcode){
    const xmlhttp = new XMLHttpRequest();
    const url = 'https://api.getaddress.io/find/'+postcode+'?expand=true&sort=true&api-key='+this.component.gaIoApiKey;

    return new Promise(function(resolve, reject) {
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const responseJSON = JSON.parse(this.responseText);
          if(responseJSON.addresses){
            resolve(responseJSON)
          }
          else{
            reject('Error, status code = ' + xmlhttp.status)
          }
        }
      };
      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    });

  }

  /////////////////////////////////////// Helpers

  mtvhInvalid(element,field,error){
    element.classList.add('has-error');
    this.refs[field].classList.add('is-invalid');
    // this.refs.messageContainer.style.display = 'block';
    this.refs.messageContainer.innerHTML = '<div class="form-text error">'+error+'</div>';
  }

  mtvhValid(element,field){
    element.classList.remove('has-error');
    this.refs[field].classList.remove('is-invalid');
    // this.refs.messageContainer.style.display = 'none';
    this.refs.messageContainer.innerHTML = '';
  }

  mtvhValidatePostcode(input){
    const regEx = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
    return regEx.test(input);
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
    if(this.refs.address){
      return this.refs.address.value;
    }
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
    if(this.refs.address){
      this.refs.address.value = value;
    }
    return super.updateValue();
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
