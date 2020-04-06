import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DarkDivider extends Component {
  static defaultProps = {
    backgroundColor: 'rgba(227, 227, 227, 1)'
  };

  render() {
    const { style, backgroundColor, ...otherProps } = this.props;

    return (
      <div
        style={{
          width: '30vw',
          height: '1px',
          backgroundColor,
          ...style,
        }}
        {...otherProps}
      />
    );
  }
}

DarkDivider.propTypes = {
  style: PropTypes.object
};