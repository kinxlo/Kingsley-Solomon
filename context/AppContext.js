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
    projectInfo: {
        // id: 1,
        // title: `audiophile`,
        // language: [`html`, `scss`, `react`],
        // colorCode: [`#f0652950`, `#e389b950`, `#61dbfb50`],
        // values: [1.5, 49.9, 48.6],
        // imageDesktop: `https://res.cloudinary.com/kingsleysolomon/image/upload/w_500,f_auto,q_auto/v1662843704/portfolio/mobile_13_wkwb2j.webp`,
        // imageMobile: `https://res.cloudinary.com/kingsleysolomon/image/upload/w_200,f_auto,q_auto/v1662843702/portfolio/mobile_12_d1cz7e.webp`,
        // image: 'https://res.cloudinary.com/kingsleysolomon/image/upload/w_500,f_auto,q_auto/v1629540936/hng/audiophile_rjzmca.webp',
        // url: `https://k-audiophile.netlify.app`,
        // github: `https://github.com/kinxlo/audiophile`,
        // desc: `An ecommerce frontend mentor challenge...implemented with the react technology.`,
        // category: `E-Commerce`
    },
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
    const handleMouseEnter = (event, arg) => {
        dispatch({ type: 'SET_POSITION', payload: { event, arg } })
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