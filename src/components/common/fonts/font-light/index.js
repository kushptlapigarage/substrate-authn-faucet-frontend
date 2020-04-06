import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FontLight extends PureComponent {
  render() {
    const { style, text, ...otherProps } = this.props;
    return (
      <div
        style={{
          fontFamily: 'Roboto-Light',
          ...style,
        }}
        {...otherProps}
      >
        {text}
      </div>
    );
  }
}

FontLight.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};