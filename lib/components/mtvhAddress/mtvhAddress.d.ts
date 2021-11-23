import editForm from './mtvhAddress.form';
declare const mtvhAddress_base: any;
export default class mtvhAddress extends mtvhAddress_base {
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
    mtvhAddressReset(element: any): void;
    mtvhAddressResetData(element: any): void;
    mtvhAddressStage1(element: any, postCode: any): void;
    mtvhAddressStage2(element: any): void;
    mtvhAddressStage3(element: any): void;
    mtvhFormatAddress(array: any, postcode: any): string;
    mtvhGetAddresses(postcode: any): Promise<unknown>;
    mtvhInvalid(element: any, field: any, error: any): void;
    mtvhValid(element: any, field: any): void;
    mtvhValidatePostcode(input: any): boolean;
    detach(): any;
    destroy(): any;
    normalizeValue(value: any, flags?: {}): any;
    getValueAt(index: any): any;
    setValue(value: any, flags?: {}): any;
    setValueAt(index: any, value: any, flags?: {}): any;
}
export {};
