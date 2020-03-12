import { connect } from "react-redux";
import Nav from "./Nav";
import { logOut } from "reducers/AuthDuck.js";

const mapStateToProps = (state) => ({
    uuid: state.uuid,
    isAuthenticated: state.authState.isAuthenticated,
});

const mapDispatchToProps = {
    logOut: logOut
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);