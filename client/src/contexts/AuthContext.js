import React from 'react';

let reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: action.payload };
        default:
            return state;
    }
};

export let AuthContext = React.createContext();

export let AuthProvider = ({
    children
}) => {

    let [state, dispatch] = React.useReducer(reducer, { user: null })

    let getUser = (id, name, email) => {

        if (id === '62926423f378a92432513373') {
            dispatch({
                type: 'LOGIN',
                payload: { id, name, email, isAdmin: true }
            });
        } else if (id) {
            dispatch({
                type: 'LOGIN',
                payload: { id, name, email, isAdmin: false }
            });
        } else if (id === undefined) {
            dispatch({
                type: 'LOGOUT',
                payload: { id, name, email, isAdmin: false }
            });
        }

    }

    return (
        <AuthContext.Provider value={{ ...state, getUser }}>
            {children}
        </AuthContext.Provider>
    )
}
