import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Label from './components/label';
import InputError from './components/input-error';

import styles from './input.module.scss';

class Checkbox extends Component {
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
      color,
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
        <div className={`${styles.box} ${showError ? styles.error : ''} ${isDisabled ? styles.disabled : ''}`}>
          {value ? <FontAwesomeIcon icon={faCheck} /> : ''}
        </div>
        <div className={styles.content}>
          <Label id={id} label={label} color={color} />
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

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  value: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  forceValidation: PropTypes.bool,
  reset: PropTypes.bool,
  errorMessage: PropTypes.string,
  color: PropTypes.string
};

Checkbox.defaultProps = {
  forceValidation: false,
  isDisabled: false,
  isRequired: false,
  reset: false,
  errorMessage: '',
  color: 'white',
  className: ''
};

export default Checkbox;
