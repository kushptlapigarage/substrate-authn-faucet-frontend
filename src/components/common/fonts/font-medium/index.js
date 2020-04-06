import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FontMedium extends PureComponent {
  render() {
    const { text, style, ...otherProps } = this.props;
    return (
      <div
        style={{
          fontFamily: 'Roboto-Medium',
          ...style,
        }}
        {...otherProps}
      >
        {text}
      </div>
    );
  }
}

FontMedium.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};