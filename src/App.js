import React from 'react';
import { Route, Router } from "react-router-dom";
import history from "./history";
import Pages from "./routes/Pages";
import './App.css';

const App = ({
    checkAuthenticationConnect,
    isAuthenticated
}) => {

    // TODO: Check why required
    React.useEffect(() => {
        checkAuthenticationConnect();
    }, []);

    return isAuthenticated !== null ? (
        <Router history={history}>
            <Route component={Pages} />
        </Router>
    ) : null;
};

export default App;
