import React, { createContext, useReducer } from 'react'
import { AppReducer } from './reducers/AppReducer'
import projects from '../public/projects'

export const AppContext = createContext()


const initialState = {
    projects: [...projects],
    toggleMapNotice: {
        showMap: false,
        showNotice: false,
        showBigMap: false
    },
    weatherData: null,
    switchView: 'profile',
    showResume: false,
    showControls: false,
    isActive: { name: `profile`, active: true },
    language: '',
    projectInfo: {},
    mousePos: {
        codX: 0,
        codY: 0,
        opacity: 0
    },
    BotMessage: ``
}


const AppContextProvider = ({ children }) => {
    // the array of data to hold the json data provided
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const showProjects = (language) => {
        dispatch({ type: 'SHOW_PROJECTS', payload: language })
    }
    const getResume = () => {
        dispatch({ type: 'SHOW_RESUME', payload: state.showResume })
    }
    const showMapOrNotice = (type) => {
        dispatch({ type: type, payload: true })
    }
    const toggleControls = (type) => {
        dispatch({ type: 'SHOW_CONTROLS', payload: state.showControls })
    }
    const switchContent = (display) => {
        dispatch({ type: 'SWITCH_VIEW', payload: display })
    }
    const setProjectInfo = (info) => {
        dispatch({ type: 'SET_PROJECT_INFO', payload: info })
    }
    const handleMouseEnter = (event) => {
        dispatch({ type: 'HANDLE_MOUSE_ENTER', payload: event })
    }
    const handleMouseLeave = (event, arg) => {
        dispatch({ type: 'HANDLE_MOUSE_LEAVE', payload: { event, arg } })
    }

    return (
        <AppContext.Provider value={{ ...state, showProjects, showMapOrNotice, getResume, switchContent, toggleControls, setProjectInfo, handleMouseEnter, handleMouseLeave }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider