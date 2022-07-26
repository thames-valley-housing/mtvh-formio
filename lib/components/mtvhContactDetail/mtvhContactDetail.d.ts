import editForm from './mtvhContactDetail.form';
declare const mtvhContactDetail_base: any;
export default class mtvhContactDetail extends mtvhContactDetail_base {
    static schema(...extend: any[]): any;
    static editForm: typeof editForm;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    get defaultSchema(): any;
    renderElement(value: any, index: any): any;
    attach(element: any): any;
    mtvhContactDetailInitiate(element: any): void;
    switchToContactDetailFreetext(element: any): void;
    switchToContactDetailDropdown(element: any): void;
    getDropdownData(): any;
    getSelected(): any;
    populateDropdown(): boolean;
}
export {};
