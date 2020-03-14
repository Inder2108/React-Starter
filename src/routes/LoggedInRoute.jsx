import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import history from "history.js";

const LoggedInRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}) => {
    if (isAuthenticated === false) {
        history.push("/log-in");
        console.log("this is a logged in route, you are logged out, redirected to log in");
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
)(LoggedInRoute);