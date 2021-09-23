var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
var Input = Components.components.input;
import editForm from './CheckMatrix2.form';
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var CheckMatrix2 = /** @class */ (function (_super) {
    __extends(CheckMatrix2, _super);
    function CheckMatrix2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    public checks: Array<Array<any>>;
    constructor(component, options, data) {
      super(component, options, data);
      this.checks = [];
    }
    */
    CheckMatrix2.schema = function () {
        return Input.schema({
            type: 'checkmatrix2',
            tableView: true,
            inputType: 'text'
        });
    };
    Object.defineProperty(CheckMatrix2.prototype, "defaultSchema", {
        /*
        get tableClass() {
          let tableClass = 'table ';
          ['striped', 'bordered', 'hover', 'condensed'].forEach((prop) => {
            if (this.component[prop]) {
              tableClass += `table-${prop} `;
            }
          });
          return tableClass;
        }
      
        renderCell(row, col) {
          return this.renderTemplate('input', {
            input: {
              type: 'input',
              ref: `${this.component.key}-${row}`,
              attr: {
                id: `${this.component.key}-${row}-${col}`,
                class: 'form-control',
                type: 'checkbox',
              }
            }
          });
        }
      
        public render(children) {
          return super.render(this.renderTemplate('checkmatrix2', {
            tableClass: this.tableClass,
            renderCell: this.renderCell.bind(this)
          }));
        }
        */
        /**
         * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
         * elements to attach functionality to.
         *
         * @param element
         * @returns {Promise}
         */
        /*
        attach(element) {
          const refs = {};
      
          for (let i = 0; i < this.component.numRows; i++) {
            refs[`${this.component.key}-${i}`] = 'multiple';
          }
      
          this.loadRefs(element, refs);
      
          this.checks = [];
          for (let i = 0; i < this.component.numRows; i++) {
            this.checks[i] = Array.prototype.slice.call(this.refs[`${this.component.key}-${i}`], 0);
      
            // Attach click events to each input in the row
            this.checks[i].forEach(input => {
              this.addEventListener(input, 'click', () => this.updateValue())
            });
          }
      
          // Allow basic component functionality to attach like field logic and tooltips.
          return super.attach(element);
        }
        */
        get: function () {
            return CheckMatrix2.schema();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckMatrix2.prototype, "skipInEmail", {
        /*
        get inputInfo() {
          const info = super.elementInfo();
          info.type = 'input';
          info.attr.type = 'hidden';
          info.changeEvent = 'change';
          return info;
        }
        */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    CheckMatrix2.editForm = editForm;
    CheckMatrix2.builderInfo = {
        title: 'Check Matrix 2',
        group: 'basic',
        icon: 'fa fa-table',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: CheckMatrix2.schema()
    };
    return CheckMatrix2;
}(Input));
export default CheckMatrix2;
