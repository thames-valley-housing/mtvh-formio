declare const _default: {
    components: {
        mtvhAddress: typeof import("./components/mtvhAddress/mtvhAddress").default;
        mtvhContactDetail: typeof import("./components/mtvhContactDetail/mtvhContactDetail").default;
    };
    templates: {
        bootstrap: {
            label: {
                form: string;
            };
            field: {
                form: string;
            };
            wizardNav: {
                form: string;
            };
            wizard: {
                form: string;
                builder: string;
            };
            wizardHeader: {
                form: string;
            };
            mtvhAddress: {
                form: string;
                html: string;
            };
            mtvhContactDetail: {
                form: string;
                html: string;
            };
        };
    };
    options: {
        builder: {
            builder: {
                custom: {
                    title: string;
                    weight: number;
                };
            };
        };
    };
};
export default _default;
