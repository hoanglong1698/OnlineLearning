import React, { useReducer } from 'react'
import { reducer } from './../reducer/authentication-reducer';
import { login } from './../action/authentication-action';

const AuthenticationContext = React.createContext();

const initialState = {
    isAuthenticated: null,
    userInfo: null,
    token: null,
}

const AuthenticationProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthenticationContext.Provider value={{ state, login: login(dispatch) /*register: register() */ }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext }