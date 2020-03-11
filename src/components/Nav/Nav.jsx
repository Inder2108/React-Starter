import * as React from "react";
import { connect } from "react-redux";
import history from '../../history';

let navLinkJSX = (link, text) => (
    <li class="nav-item">
        <a class="nav-link" onClick={e => { e.preventDefault(); history.push(link); }}>{text}</a>
    </li>
);

const Nav = ({ isAuthenticated, uuid }) => {
    const logInOut = isAuthenticated ? navLinkJSX("/log-out", "Log Out") : navLinkJSX("/log-in", "Log In");
    const mainLinks = isAuthenticated ? navLinkJSX("/home", "Home") : (
        <>
            {navLinkJSX("/", "Landing")}
            {navLinkJSX("/about", "About")}
        </>
    );
    return (
        <div class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <p></p>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link">Auth state: {isAuthenticated ? `Logged in user: ${uuid}` : "Logged out"}</a>
                </li>
                {mainLinks}
                {navLinkJSX("/terms", "Terms")}
                {navLinkJSX("/broken-link", "Broken Link")}
                {logInOut}
            </ul>
        </div>
    );
};
const mapStateToProps = (state) => ({
    uuid: state.uuid,
    isAuthenticated: state.authState.isAuthenticated,
});
export default connect(
    mapStateToProps,
)(Nav);