import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import history from "../history";

const LoggedInRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}) => {
    if (isAuthenticated === false) {
        history.push("/log-in");
        alert("this is a logged in route, you are logged out, redirected to log in");
    }
    return (
        <>
            <header>
                Logged In Header
            </header>
            <Route
                render={otherProps => (
                    <>
                        <Component {...otherProps} />
                    </>
                )}
            />
            <footer>
                Logged In Footer
            </footer>
        </>
    );
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated
});
export default connect(
    mapStateToProps
)(LoggedInRoute);