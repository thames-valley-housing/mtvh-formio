import { Components } from 'formiojs';
import { callbackify } from 'util';
const Input = (Components as any).components.field;
import editForm from './mtvhAddress.form';

export default class mtvhAddress extends (Input as any) {

  static schema() {
    return Input.schema({
      type: 'mtvhAddress',
      label: 'What is your address?',
      description: "We need this information so that we can confirm you are an MTVH resident",
      key: 'mtvhAddress',
      tableView: true,
      inputType: 'text',
      "validate": {
        "required": true
      }
    });
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'MTVH Address',
    group: 'custom',
    icon: 'home',
    weight: 10,
    schema: mtvhAddress.schema()
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
    return super.render(this.renderTemplate('mtvhAddress', {}));
  }

  attach(element) {

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
      manualAddress: 'single'
    });
  
    this.addEventListener(this.refs.postCode, 'focus', () => {
      this.mtvhValid(element,'postCode');
    });

    this.addEventListener(this.refs.postCodeChange, 'click', (e) => {
      this.mtvhAddressReset(element);
      this.mtvhAddressResetData(element);
      e.preventDefault();
    });

    this.addEventListener(this.refs.findAddress, 'click', () => {
      var postCode = this.refs.postCode.value.trim().toLowerCase();
      this.mtvhAddressStage1(element,postCode);
    });

    this.addEventListener(this.refs.selectAddress, 'change', () => {
      this.updateValue(this.refs.selectAddress.value);
    });

    this.addEventListener(this.refs.cantFindAddress, 'click', (e) => {
      this.mtvhAddressStage3(element);
      e.preventDefault();
    });

    this.addEventListener(this.refs.manualAddress, 'keyup', () => {
      this.updateValue(this.refs.manualAddress.value.replace(/(?:\r\n|\r|\n)/g, ', '));
    });

    return super.attach(element);
  }

  /////////////////////////////////////// Steps

  mtvhAddressReset(element){
    this.refs.postCode.value = '';
    this.mtvhValid(element,'postCode');
    this.refs.postCodeSection.style.display = 'block';
    this.refs.selectAddressSection.style.display = 'none';
    this.refs.postCode.focus();
  }

  mtvhAddressResetData(element){
    this.refs.postCode.value = '';
    this.refs.postCodeSelected.innerHTML = '';
    //this.refs.selectAddressResults.innerHTML = '0';
    this.refs.selectAddress.options.length = 0;
    this.updateValue('');
  }

  mtvhAddressStage1(element,postCode){
    if(this.mtvhValidatePostcode(postCode)==true){
      this.mtvhAddressStage2(element)
    }
    else{
      this.mtvhInvalid(element,'postCode','Enter a valid postcode')
    }
  }

  mtvhAddressStage2(element){
    this.refs.postCodeSelected.innerHTML = this.refs.postCode.value.trim().toUpperCase();
    this.refs.postCodeSection.style.display = 'none';
    this.refs.selectAddressSection.style.display = 'block';
    var selectAddressResultsCnt = 0;
    var selectAddress = this.refs.selectAddress;
    selectAddress.options.length = 0;
    selectAddress.options.add( new Option('Loading ...','') );
    var mtvhFormatAddress = this.mtvhFormatAddress;

    this.mtvhGetAddresses(this.refs.postCode.value.trim().toLowerCase()).then(function(result:any){
      selectAddressResultsCnt = result.addresses.length;

      selectAddress.options.length = 0;
      selectAddress.options.add( new Option(selectAddressResultsCnt+' results found','') );
      for(var i = 0, l = result.addresses.length; i < l; i++){
        var option = result.addresses[i];
        var optionFormat = mtvhFormatAddress(option,result.postcode);
        selectAddress.options.add( new Option(optionFormat,optionFormat) );
      }
      selectAddress.focus();

    }, function(error) {
      selectAddress.options.length = 0;
      selectAddress.options.add( new Option('0 results found','') );
      console.log(error); //Need to do something with this.
    })
  }

  mtvhAddressStage3(element){
    this.refs.manualAddressSection.style.display = 'block';
    this.refs.selectAddressSection.style.display = 'none';
    this.refs.postCodeLabel.style.display = 'none';
    this.refs.manualAddress.focus();
  }

  mtvhFormatAddress(array,postcode){
    var fields=['line_1','line_2','line_3','line_4','locality','town_or_city','county']
    var ret = ''
    for (const field of fields) {
      if(array[field]!=''){
        ret = ret + array[field]+', ';
      }
    }  
    return ret+postcode;
  }

  mtvhGetAddresses(postcode){
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://api.getaddress.io/find/'+postcode+'?expand=true&sort=true&api-key='+this.component.gaIoApiKey;
  
    return new Promise(function(resolve, reject) {
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var responseJSON = JSON.parse(this.responseText);
          if(responseJSON.addresses){
            resolve(responseJSON)
          }
          else{
            reject("Error, status code = " + xmlhttp.status)
          }
        }
      }; 
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    });

  }

  /////////////////////////////////////// Helpers

  mtvhInvalid(element,field,error){
    element.classList.add("has-error");
    this.refs[field].classList.add("is-invalid");
    this.refs.messageContainer.style.display = 'block';
    this.refs.messageContainer.innerHTML = '<div class="form-text error">'+error+'</div>';
  }
  
  mtvhValid(element,field){
    element.classList.remove("has-error");
    this.refs[field].classList.remove("is-invalid");
    this.refs.messageContainer.style.display = 'none';
    this.refs.messageContainer.innerHTML = '';
  }

  mtvhValidatePostcode(input){
    var regEx = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
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

  getValue() {
      return this.refs.address.value;
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

  updateValue(value, flags = {}) {
    this.refs.address.value = value;
    return super.updateValue();
  }

  /*
  get defaultSchema() {
    return mtvhAddress.schema();
  }
  
  get skipInEmail() {
    return false;
  }
  */

}