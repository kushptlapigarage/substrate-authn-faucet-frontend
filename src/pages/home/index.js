import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import FaucetHero from '../../components/FaucetHero';
import HowDoesFaucetWork from '../../components/HowDoesFaucetWork';
import Disclaimer from '../../components/Disclaimer';

class Home extends Component {
  render() {
    return (
      <Container>
        <FaucetHero />
        <HowDoesFaucetWork />
        <Disclaimer />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
