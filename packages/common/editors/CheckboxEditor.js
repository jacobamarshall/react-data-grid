const React = require('react');
import PropTypes from 'prop-types';
import { isMobile } from "react-device-detect";
require('../../../themes/react-data-grid-checkbox.css');

class CheckboxEditor extends React.Component {
  static propTypes = {
    value: PropTypes.bool,
    rowIdx: PropTypes.number,
    column: PropTypes.shape({
      key: PropTypes.string,
      onCellChange: PropTypes.func
    }),
    dependentValues: PropTypes.object
  };

  constructor(props) {
    super(props);
  };

  handleChange = (e) => {
    this.props.column.onCellChange(this.props.rowIdx, this.props.column.key, this.props.dependentValues, e);
  };

  handlePointerEnter = (e) => {
    this.props.column.onCellChange(this.props.rowIdx, this.props.column.key, this.props.dependentValues, e);
  };

  render() {
    const checked = this.props.value != null ? this.props.value : false;
    const checkboxName = 'checkbox' + this.props.rowIdx;
    //use onTouch if mobile, onclick if not mobile
    if (isMobile) {
      return (
        <div className="react-grid-checkbox-container checkbox-align"
             onPointerEnter={this.handlePointerEnter}
        >
          <input className="react-grid-checkbox" type="checkbox" name={checkboxName} checked={checked} readOnly />
          <label htmlFor={checkboxName} className="react-grid-checkbox-label"></label>
        </div>);
    }
    else {
      return (
        <div className="react-grid-checkbox-container checkbox-align"
          onClick={this.handleChange}
        >
          <input className="react-grid-checkbox" type="checkbox" name={checkboxName} checked={checked} readOnly />
          <label htmlFor={checkboxName} className="react-grid-checkbox-label"></label>
        </div>);
    }
  }
}

module.exports = CheckboxEditor;
