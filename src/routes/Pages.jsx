import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePageContainer from "components/Pages/HomePage/HomePageContainer";
import LogInPageContainer from "components/Pages/LoginPage/LoginPageContainer.jsx";
import LoggedInRoute from "./LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";
import NotFoundPage from "components/Pages/NotFoundPage";

const Pages = () => {
    return (
        <Switch>
            <LoggedOutRoute path="/" exact={true} component={LogInPageContainer} />
            <LoggedOutRoute path="/log-in" exact={true} component={LogInPageContainer} />
            <LoggedInRoute path="/home" exact={true} component={HomePageContainer} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
export default Pages;