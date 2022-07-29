import React from 'react';

export let AuthContext = React.createContext();

export let AuthProvider = ({
    children
}) => {

    let [user, setUser] = React.useState({
        id: '',
        name: '',
        email: '',
    })

    let getUser = (id, name, email) => {
        setUser({id, name, email});
    }

    return (
        <AuthContext.Provider value={{user, getUser}}>
            {children}
        </AuthContext.Provider>
    )
}
