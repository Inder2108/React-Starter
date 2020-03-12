import * as React from "react";
import { connect } from "react-redux";
import { logIn } from "reducers/AuthDuck.js";

const LogIn = ({ logInConnect }) => (
    <>
        <p>Login page</p>
        <button onClick={logInConnect}>log me in</button>
    </>
);

const mapDispatchToProps = {
    logInConnect: logIn
};

export default connect(
    null,
    mapDispatchToProps,
)(LogIn);