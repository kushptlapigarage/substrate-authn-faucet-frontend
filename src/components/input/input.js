// Frameworks & Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// External Helper Functions
import TextField from '@material-ui/core/TextField';
import { getCurrentError } from './helpers';
import inputErrors from '../../utils/input-errors';

// Components
// import DefaultInput from './components/default-input.js';
// import Label from './components/label.js';
import InputError from './components/input-error';

// Styles
import styles from './input.module.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: props.isRequired
        ? [inputErrors.required].concat(props.extraErrors)
        : props.extraErrors,
      currentError: false,
      hasBlurred: false,
      isVirgin: true
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { reset, forceValidation, value } = props;
    const { errors } = state;

    if (reset) {
      return {
        ...state,
        hasBlurred: false,
        isVirgin: true,
        currentError: false
      };
    }

    if (forceValidation) {
      return {
        ...state,
        currentError: getCurrentError(value, errors),
        isVirgin: false,
        hasBlurred: true
      };
    }

    return state;
  }

  handleBlur() {
    const { value, onInputChange } = this.props;
    const { errors } = this.state;

    const error = getCurrentError(value, errors);
    this.setState({
      hasBlurred: true,
      isVirgin: false,
      currentError: error
    });
    onInputChange(value, error);
  }

  handleChange(value) {
    const { onInputChange } = this.props;
    const { errors } = this.state;

    const error = getCurrentError(value, errors);
    this.setState({ currentError: error });
    onInputChange(value.target.value, error);
  }

  render() {
    const {
      className,
      id,
      label,
      // labelColor,
      isDisabled,
      type,
      value,
      placeholder,
      variant,
      ...otherProps
    } = this.props;

    const { hasBlurred, isVirgin, currentError, errors } = this.state;
    const showError = hasBlurred && !isVirgin && currentError ? true : false;

    return (
      <div className={`${className}`}>
        {/* <Label id={id} label={label} /> */}
        <TextField
          {...otherProps}
          id={id}
          disabled={isDisabled}
          type={type}
          value={value}
          variant={variant}
          showError={showError}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder={placeholder}
          label={label}
          className={`${styles.textfield} ${isDisabled ? styles['input-disabled'] : ''}`}
          margin="normal"
        />
        {showError && (
          <InputError errors={errors} currentError={currentError} />
        )}
      </div>
    );
  }
}

Input.displayName = 'Input';
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any,
  labelColor: PropTypes.oneOf(['black', 'white']),
  value: PropTypes.string,
  variant: PropTypes.string,
  onInputChange: PropTypes.func,
  type: PropTypes.oneOf([
    'text',
    'email',
  ]),
  className: PropTypes.string,
  forceValidation: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  reset: PropTypes.bool,
  extraErrors: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      message: PropTypes.string,
      isError: PropTypes.func
    })
  ),
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  forceValidation: false,
  isDisabled: false,
  isRequired: true,
  reset: false,
  variant: 'filled',
  extraErrors: [],
  className: '',
  placeholder: '',
};

export default Input;
