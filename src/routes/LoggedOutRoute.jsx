import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import history from "../history";

const LoggedOutRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}) => {
    if (isAuthenticated === true) {
        history.push("/home");
        alert("this is a logged out route, you are logged in, redirected to home page");
    }
    return (
        <>
            <header>
                Logged Out Header
            </header>
            <Route
                render={otherProps => (
                    <>
                        <Component {...otherProps} />
                    </>
                )}
            />
            <footer>
                Logged Out Footer
            </footer>
        </>
    );
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated
});
export default connect(
    mapStateToProps
)(LoggedOutRoute);