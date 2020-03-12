import React from 'react';
import { Route, Router } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import NavContainer from "./components/Nav/NavContainer";
import Pages from "./routes/Pages";
import { checkAuthentication } from "./reducers/AuthDuck";

import './App.css';

const App = ({
    checkAuthenticationConnect,
    isAuthenticated
}) => {

    // TODO: Check why required
    React.useEffect(() => {
        checkAuthenticationConnect();
    }, []);

    const app = isAuthenticated !== null ? (
        <Router history={history}>
            <NavContainer />
            <Route component={Pages} />
        </Router>
    ) : null;
    return (
        <div className="App">
            {app}
        </div>
    );
}

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
