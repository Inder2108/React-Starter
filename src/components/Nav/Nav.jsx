import * as React from "react";
import history from 'history.js';

let navLinkJSX = (link, text) => (
    <li className="nav-item">
        <div className="nav-link" onClick={e => { e.preventDefault(); history.push(link); }}>{text}</div>
    </li>
);

const Nav = ({ isAuthenticated, uuid, logOut }) => {
    const links = isAuthenticated ? (
        <>
            {navLinkJSX("/home", "Home")}
            {
                <li className="nav-item">
                    <div className="nav-link" onClick={e => { e.preventDefault(); logOut(); }}>Log Out</div>
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
        <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="navbar-brand" href="#">Site Title</div>
            <ul className="navbar-nav mr-auto">
                {links}
                <li className="nav-item active">
                    <div className="nav-link">Auth state: {isAuthenticated ? `Logged in user: ${uuid}` : "Logged out"}</div>
                </li>
            </ul>
        </div>
    );
};

export default Nav;