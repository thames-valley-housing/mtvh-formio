import ComponentForm from 'formiojs/components/_classes/component/Component.form';
import mtvhContactDetailEditDisplay from './editForm/mtvhContactDetail.edit.display';
import mtvhContactDetailEditData from './editForm/mtvhContactDetail.edit.data';
import mtvhContactDetailEditValidation from './editForm/mtvhContactDetail.edit.validation';
export default function(...extend) {
  return ComponentForm([
    {
      key: 'display',
      components: mtvhContactDetailEditDisplay
    },
    {
      key: 'data',
      components: mtvhContactDetailEditData
    },
    {
      key: 'validation',
      components: mtvhContactDetailEditValidation
    },
  ], ...extend);
}
