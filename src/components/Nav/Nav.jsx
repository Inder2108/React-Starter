import * as React from "react";
import history from 'history.js';

let navLinkJSX = (link, text) => (
    <li class="nav-item">
        <a class="nav-link" onClick={e => { e.preventDefault(); history.push(link); }}>{text}</a>
    </li>
);

const Nav = ({ isAuthenticated, uuid, logOut }) => {
    const links = isAuthenticated ? (
        <>
            {navLinkJSX("/home", "Home")}
            {
                <li class="nav-item">
                    <a class="nav-link" onClick={e => { e.preventDefault(); logOut(); }}>Log Out</a>
                </li>
            }
        </>
    ) : (
            <>
                {navLinkJSX("/about", "About")}
                {navLinkJSX("/log-in", "Log In")}
            </>
        );
    return (
        <div class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">Site Title</a>
            <ul class="navbar-nav mr-auto">
                {links}
                <li class="nav-item active">
                    <a class="nav-link">Auth state: {isAuthenticated ? `Logged in user: ${uuid}` : "Logged out"}</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;