import ComponentForm from 'formiojs/components/_classes/component/Component.form';
import mtvhContactDetailEditDisplay from './editForm/mtvhContactDetail.edit.display';
import mtvhContactDetailEditData from './editForm/mtvhContactDetail.edit.data';
export default function(...extend) {
  return ComponentForm([
    {
      key: 'display',
      components: mtvhContactDetailEditDisplay
    },
    {
      key: 'data',
      components: mtvhContactDetailEditData
    }
  ], ...extend);
}
