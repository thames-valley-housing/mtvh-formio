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
    mtvhContactDetailInitiate(element: any): void;
    switchToContactDetailFreetext(element: any): void;
    switchToContactDetailDropwdown(element: any): void;
    resetValues(): void;
    getDropdownData(): string[];
    populateDropdown(): boolean;
    validatePhoneNumber(element: any): void;
    mtvhInvalid(): void;
    mtvhValid(): void;
    isPhoneNumberValid(input: any): boolean;
    inputtedPhoneNumber(): any;
    updateValue(value: any, flags?: {}): any;
    getValue(): any;
}
export {};
