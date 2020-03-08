
export const AUTHENTICATE = "AUTHENTICATE"
export function authenticate() {
    return {
        type: AUTHENTICATE,
    };
}

export const UNAUTHENTICATE = "UNAUTHENTICATE"
export function unauthenticate() {
    return {
        type: UNAUTHENTICATE,
    };
}

export function logIn() {
    return async (dispatch) => {
        await window.localStorage.setItem("authenticated", "true");
        dispatch(authenticate());
    };
}

export function logOut() {
    return async (dispatch) => {
        await window.localStorage.setItem("authenticated", "false");
        dispatch(unauthenticate());
    };
}

export function checkAuthentication() {
    return async (dispatch) => {
        const auth = await window.localStorage.getItem("authenticated");
        const formattedAuth = typeof auth === "string" ? JSON.parse(auth) : null;
        formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
    };
}

let initialState = {
    uuid: null,
    isAuthenticated: true,
};

export default function authState(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return { ...state, uuid: "placeholder-uuid", isAuthenticated: true };
        case UNAUTHENTICATE:
            return { uuid: null, isAuthenticated: false }
        default:
            return state
    }
}