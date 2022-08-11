import React, { createContext, useReducer } from 'react'
import { AppReducer } from './reducers/AppReducer'

export const AppContext = createContext()
const initialState = {
    projects: [],
    toggleMapNotice: {
        showMap: false,
        showNotice: false
    }
}

const AppContextProvider = ({ children }) => {
    // the array of data to hold the json data provided
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const showProjects = (language) => {
        dispatch({ type: 'SHOW_PROJECTS', payload: language })
    }

    const showMapOrNotice = (type) => {
        dispatch({ type: type, payload: true })
    }

    return (
        <AppContext.Provider value={{ ...state, showProjects, showMapOrNotice }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider