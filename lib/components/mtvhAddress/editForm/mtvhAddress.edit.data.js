export default [
    {
        key: 'multiple',
        ignore: true
    },
    {
        key: 'clearOnHide',
        ignore: true
    },
    {
        key: 'allowCalculateOverride',
        ignore: true
    },
    {
        type: 'textfield',
        label: 'getaddress.io API Key',
        key: 'gaIoApiKey',
        input: true,
        weight: 1,
        placeholder: '',
        tooltip: 'Enter the getaddress.io API Key',
        validate: {
            required: true
        }
    }
];
