import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

export const renderField = ({
  input,
  label,
  type,
  meta: { error, touched, warning }
}) => (
  <div className={touched && error ? styles.dverror : styles.div}>
    {label && <label className={styles.label}>{label}</label>}
    <div>
      <input
        className={styles.inputeffect}
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <div className={styles.error}>{error}</div>) ||
          (warning && <div>{warning}</div>))}
    </div>
  </div>
);
renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};
