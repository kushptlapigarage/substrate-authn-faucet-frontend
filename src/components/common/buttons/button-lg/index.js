import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import './styles.scss';

class ButtonLG extends Component {
  static defaultProps = {
    disabled: false,
    color: 'primary'
  };

  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary'])
  };

  render() {
    const { className, color, ...otherProps } = this.props;
    const buttonLGClassNames = classNames({
      [`button-lg-${color}`]: true
    });
    return (
      <div className={buttonLGClassNames}>
        <Button
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          {...otherProps}
        >
          {this.props.children}
        </Button>
      </div>
    );
  }
}

ButtonLG.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default ButtonLG;
