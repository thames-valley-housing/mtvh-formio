import editForm from './mtvhContactDetail.form';
declare const mtvhContactDetail_base: any;
export default class mtvhContactDetail extends mtvhContactDetail_base {
    static schema(): any;
    static editForm: typeof editForm;
    static builderInfo: {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    constructor(component: any, options: any, data: any);
    init(): void;
    get inputInfo(): any;
    render(): any;
    attach(element: any): any;
    detach(): any;
    destroy(): any;
    normalizeValue(value: any, flags?: {}): any;
    getValue(): any;
    getValueAt(index: any): any;
    setValue(value: any, flags?: {}): any;
    setValueAt(index: any, value: any, flags?: {}): any;
    updateValue(value: any, flags?: {}): any;
    mtvhContactDetailInitiate(element: any): void;
    switchToContactDetailFreetext(element: any): void;
    switchToContactDetailDropdown(element: any): void;
    resetValues(): void;
    getDropdownData(): any;
    getSelected(): any;
    populateDropdown(): boolean;
    validatePhoneNumber(element: any): void;
    mtvhInvalid(): void;
    mtvhValid(): void;
    isPhoneNumberValid(input: any): boolean;
    inputtedPhoneNumber(): any;
}
export {};
