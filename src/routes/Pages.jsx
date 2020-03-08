import * as React from "react";
// import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import About from "../components/pages/About";
import Home from "../components/Home/Home";
// import Landing from "../components/pages/Landing";
import LogIn from "../components/Login/Login";
import LogOut from "../components/Logout/Logout";
// import NotFound from "../components/pages/NotFound";
// import Terms from "../components/pages/Terms";
import LoggedInRoute from "./LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";
const Pages = () => {
    return (
        <Switch>
            {/* <LoggedOutRoute path="/" exact={true} component={Landing} /> */}
            {/* <LoggedOutRoute path="/about" exact={true} component={About} /> */}
            <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
            <LoggedInRoute path="/log-out" exact={true} component={LogOut} />
            <LoggedInRoute path="/home" exact={true} component={Home} />
            {/* <Route path="/terms" exact={true} component={Terms} /> */}
            {/* <Route component={NotFound} /> */}
        </Switch>
    );
};
export default Pages;