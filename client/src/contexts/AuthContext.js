import React from 'react';

export let AuthContext = React.createContext();

export let AuthProvider = ({
    children
}) => {

    let [userContext, setUserContext] = React.useState({
        id: '',
        name: '',
        email: '',
        isAdmin: false,
    })

    let getUser = (id, name, email) => {
        if (id === undefined) {
            setUserContext({
                id: '',
                name: '',
                email: '',
                isAdmin: false,
            });
        }

        if (id === '62926423f378a92432513373') {
            setUserContext({ id, name, email, isAdmin: true });
        } else {
            setUserContext({ id, name, email, isAdmin: false });
        }
        
    }

    return (
        <AuthContext.Provider value={{ userContext, getUser }}>
            {children}
        </AuthContext.Provider>
    )
}
