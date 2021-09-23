var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Components from '../Components';
import HiddenEditDisplay from './editForm/Hidden.edit.display';
import HiddenEditData from './editForm/Hidden.edit.data';
export default function () {
    var extend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extend[_i] = arguments[_i];
    }
    return Components.baseEditForm.apply(Components, __spreadArrays([[
            {
                key: 'display',
                components: HiddenEditDisplay
            },
            {
                key: 'data',
                components: HiddenEditData
            },
            {
                key: 'validation',
                ignore: true
            },
            {
                key: 'conditional',
                ignore: true
            },
        ]], extend));
}
