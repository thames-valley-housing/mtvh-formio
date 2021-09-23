import ComponentForm from 'formiojs/components/_classes/component/Component.form';
import mtvhAddressEditDisplay from './editForm/mtvhAddress.edit.display';
import mtvhAddressEditData from './editForm/mtvhAddress.edit.data';
export default function(...extend) {
  return ComponentForm([
    {
      key: 'display',
      components: mtvhAddressEditDisplay
    },
    {
      key: 'data',
      components: mtvhAddressEditData
    }
  ], ...extend);
}