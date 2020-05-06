import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Router from './router';
// routes
import home from '../pages/home/home.routes';
import signup from '../pages/signup/signup.routes';
import signup2 from '../pages/signup2/signup.routes';

export const mapStateToProps = () => ({
  routes: [...home, ...signup, ...signup2]
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));
