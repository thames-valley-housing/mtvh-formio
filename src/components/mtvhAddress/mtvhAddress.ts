import { Components } from 'formiojs';
const Input = (Components as any).components.field;
import editForm from './mtvhAddress.form';

export default class mtvhAddress extends (Input as any) {

  static schema() {
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
      manualAddress: 'single',
      readonlyAddressSection: 'single',
      readonlyAddress: 'single',
      readonlyAddressChange: 'single'
    });

    this.addEventListener(this.refs.postCode, 'focus', () => {
    });

    this.addEventListener(this.refs.postCodeChange, 'click', (e) => {
      this.mtvhAddressReset(element);
      this.mtvhAddressResetData(element);
      e.preventDefault();
    });

    this.addEventListener(this.refs.findAddress, 'click', () => {
      const postCode = this.refs.postCode.value.trim().toLowerCase();
      this.mtvhAddressStage1(element,postCode);
    });

    this.addEventListener(this.refs.selectAddress, 'change', () => {
      this.updateValue(this.refs.selectAddress.value);
    });

    this.addEventListener(this.refs.cantFindAddress, 'click', (e) => {
      this.mtvhAddressStage3(element);
      e.preventDefault();
    });

    this.addEventListener(this.refs.readonlyAddressChange, 'click', (e) => {
      this.updateValue('');
      this.mtvhAddressReset(element);
      this.mtvhAddressResetData(element);
      this.refs.postCode.focus();
      e.preventDefault();
    });

    this.addEventListener(this.refs.manualAddress, 'keyup', () => {
      this.updateValue(this.refs.manualAddress.value.replace(/(?:\r\n|\r|\n)/g, ', '));
    });

    this.mtvhAddressInitiate(element);

    return super.attach(element);
  }

  /////////////////////////////////////// Steps

  mtvhAddressInitiate(element){
    const cvar = this.getValue();
    if(cvar!=='' && cvar !==null){
      this.refs.postCodeSection.style.display = 'none';
      this.refs.postCodeLabel.style.display = 'none';
      this.refs.selectAddressSection.style.display = 'none';
      this.refs.manualAddressSection.style.display = 'none';
      this.refs.readonlyAddress.innerHTML = cvar;
      this.refs.readonlyAddressSection.style.display = 'block';
    }
  }

  mtvhAddressReset(element){
    this.refs.postCode.value = '';
    this.mtvhValid(element,'postCode');
    this.refs.postCodeSection.style.display = 'block';
    this.refs.postCodeLabel.style.display = 'block';
    this.refs.selectAddressSection.style.display = 'none';
    this.refs.manualAddressSection.style.display = 'none';
    this.refs.readonlyAddressSection.style.display = 'none';
  }

  mtvhAddressResetData(element){
    this.refs.postCode.value = '';
    this.refs.postCodeSelected.innerHTML = '';
    this.refs.readonlyAddress.innerHTML = '';
    // this.refs.selectAddressResults.innerHTML = '0';
    this.refs.selectAddress.options.length = 0;
    this.updateValue('');
  }

  mtvhAddressStage1(element,postCode){
    if(this.mtvhValidatePostcode(postCode)==true){
      if(this.refs.messageContainer.innerHTML == '<div class="form-text error">Enter a valid postcode</div>'){
        this.mtvhValid(element,'postCode');
      }
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

  mtvhAddressStage3(element){
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
    return mtvhAddress.schema();
  }

  get skipInEmail() {
    return false;
  }
  */

}