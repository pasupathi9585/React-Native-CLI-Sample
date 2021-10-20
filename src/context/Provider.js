import React, {createContext, useReducer} from "react";
import auth from './reducers/auth'
import authInitialState from './initialState/authState'

export const GlobalContext = createContext();

const GlobalProvider = ( {children} ) => {
    const [authState, authDispatcher] = useReducer(auth, authInitialState)
    return <GlobalContext.Provider value={
        {authState}
    }>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider; 