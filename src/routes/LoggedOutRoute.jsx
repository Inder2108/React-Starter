import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import history from "history.js";

const LoggedOutRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}) => {
    if (isAuthenticated === true) {
        history.push("/home");
        console.log("this is a logged out route, you are logged in, redirected to home page");
    }
    return (
        <Route
            render={otherProps => (
                <Component {...otherProps} />
            )}
        />
    );
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated
});
export default connect(
    mapStateToProps
)(LoggedOutRoute);