import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NativeSelect from '@material-ui/core/NativeSelect';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

class DropDown extends Component {
  render() {
    const {
      classes, options, value, onChange
    } = this.props;
    return (
      <div style={{
        // position: 'absolute',
        marginLeft: '16px',
      }}>
        <NativeSelect
          className={classes.test}
          classes={{
            root: classes.root,
            select: classes.select,
            icon: classes.icon,
          }}
          onChange={onChange}
          value={value.value}
          disableUnderline
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </NativeSelect>
      </div>
    );
  }
}


DropDown.propTypes = {
  classes: PropTypes.object,
  options: PropTypes.array,
  value: PropTypes.object,
  onChange: PropTypes.func,
};

export default withStyles(styles)(DropDown);
