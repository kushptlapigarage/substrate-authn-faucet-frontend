import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import Hero from '../../components/FaucetHero';

class Home extends Component {
  render() {
    return (
      <Container>
        <Hero />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
