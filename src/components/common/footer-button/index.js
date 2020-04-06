import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonMD from '../buttons/button-md';

export default class FooterButton extends Component {
  render() {
    const {
      style, name, onClick, disabled, ...otherProps
    } = this.props;
    return (
      <div
        style={{
          // position: 'absolute',
          // top: '524px',
          alignSelf: 'center',
          justifyContent: 'center',
          right: '106.445px',
          display: 'flex',
          marginTop: '32px',
          ...style,
        }}
        {...otherProps}
      >
        <ButtonMD onClick={onClick} color="secondary" disabled={disabled}>{name}</ButtonMD>
      </div>
    );
  }
}

FooterButton.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  onClick: PropTypes.func,
};