import { connect } from 'react-redux';
import SecureRoute from './secure-route';

export const mapStateToProps = state => ({
  authReducer: state.authReducer
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecureRoute);
