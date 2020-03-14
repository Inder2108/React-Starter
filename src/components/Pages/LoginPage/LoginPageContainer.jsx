import { connect } from "react-redux";
import { logIn } from "reducers/AuthDuck.js";
import LoginPage from "./LoginPage";

const mapDispatchToProps = {
    logInConnect: logIn
};

export default connect(
    null,
    mapDispatchToProps,
)(LoginPage);