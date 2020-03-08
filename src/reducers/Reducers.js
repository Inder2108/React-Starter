import { combineReducers } from "redux";
import authState from "./AuthDuck";

const appReducer = combineReducers({
    authState
});

const rootReducer = (state, action) => {
    // if (action.type === RESET_STATE) {
    //     state = undefined;
    // }
    return appReducer(state, action);
};

export default rootReducer;