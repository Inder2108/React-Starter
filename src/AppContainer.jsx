import { connect } from "react-redux";
import App from "./App";
import { checkAuthentication } from "./reducers/AuthDuck";

const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated
});

const mapDispatchToProps = {
    checkAuthenticationConnect: checkAuthentication
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);