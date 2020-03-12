import * as React from "react";
import { Switch } from "react-router-dom";
import Home from "components/Home/Home";
import LogIn from "components/Login/Login.jsx";
import LoggedInRoute from "./LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";
const Pages = () => {
    return (
        <Switch>
            <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
            <LoggedInRoute path="/home" exact={true} component={Home} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    );
};
export default Pages;