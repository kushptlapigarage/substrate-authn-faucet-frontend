import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FontRegular extends PureComponent {
  render() {
    const { style, text, ...otherProps } = this.props;
    return (
      <div
        style={{
          ...style,
        }}
        {...otherProps}
      >
        {text}
      </div>
    );
  }
}

FontRegular.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};