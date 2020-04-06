import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './header.module.scss';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  } 

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  keyPress(e){
    if(e.keyCode == 13){
      const { searchRequest } = this.props;
      console.log('value', e.target.value);
      if(e.target.value !== '') {
        searchRequest(e.target.value);
      }
    }
  }


  render() {
    return (
      <header className={styles.root}>
        <AppBar position="static" style={{ background: '#2D3C45' }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={styles['menu-button']}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={styles.title} variant="h6" noWrap>
            DApp UI
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}


Header.propTypes = {
  login: PropTypes.object,
  searchRequest: PropTypes.func
};


export default Header;
