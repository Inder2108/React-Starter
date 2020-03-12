import * as React from "react";
import { connect } from "react-redux";
import { logOut } from "reducers/AuthDuck.js";

const LogOut = ({ logOutConnect }) => (
    <>
        <p>Logout page</p>
        <button onClick={logOutConnect}>log me out</button>
    </>
);

const mapDispatchToProps = {
    logOutConnect: logOut
};

export default connect(
    null,
    mapDispatchToProps,
)(LogOut);