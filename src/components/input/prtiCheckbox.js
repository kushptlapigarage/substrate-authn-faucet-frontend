import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Label from './components/label.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputError from './components/input-error';

import styles from './input.module.scss';

class PRTICheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVirgin: true
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { reset, forceValidation } = props;

    if(reset) {
      return {
        ...state,
        isVirgin: true
      };
    }

    if(forceValidation) {
      return {
        ...state,
        isVirgin: false
      };
    }

    return state;
  }

  handleCheckboxChange() {
    const { isRequired, value, onCheckboxChange } = this.props;

    this.setState({
      isVirgin: false
    });

    onCheckboxChange(!value, isRequired ? value : false);
  }

  render() {
    const {
      id,
      label,
      // color,
      value,
      className,
      isRequired,
      isDisabled,
      errorMessage
    } = this.props;
    const { isVirgin } = this.state;
    const showError = !isVirgin && isRequired && !value;

    return (
      <div
        id={id}
        className={`${styles['checkbox']} ${className} ${isDisabled ? styles.disabled : ''}`}
        onClick={this.handleCheckboxChange}
      >
        <FormControlLabel
          control={
            <Checkbox
              disabled={isDisabled}
              checked={value}
              onChange={this.handleCheckboxChange}
              value={value}
              classes={{
                root: styles.root,
                checked: styles.checked,
              }}
            />
          }
          label={label}
        />
        <div className={styles.content}>
          {/* <Label id={id} label={label} color={color} /> */}
          {showError && (
            <InputError
              errors={[
                {
                  key: 'check-mandatory',
                  message: errorMessage
                }
              ]}
              currentError={'check-mandatory'}
            />
          )}
        </div>
      </div>
    );
  }
}

PRTICheckbox.displayName = 'Checkbox';
PRTICheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  value: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  forceValidation: PropTypes.bool,
  reset: PropTypes.bool,
  errorMessage: PropTypes.string,
  color: PropTypes.string
};

PRTICheckbox.defaultProps = {
  forceValidation: false,
  isDisabled: false,
  isRequired: false,
  reset: false,
  errorMessage: '',
  color: 'white',
  className: ''
};

export default PRTICheckbox;
