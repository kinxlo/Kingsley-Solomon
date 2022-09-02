import React, { createContext, useReducer } from 'react'
import { AppReducer } from './reducers/AppReducer'
import { axiosInstance } from '../axios/global.js';
import useSWR from 'swr';
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
    showControls: true,
    isActive: { name: `profile`, active: true },
    language: '',
    skillStickerName: 'Skills'
}

const weatherFetcher = async () => {
    const result = null
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${`Lagos`
        }`;
    const res = await axiosInstance.get(url);
    if (res.status === 200) {
        result = res.data
        return result
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );
};

const AppContextProvider = ({ children }) => {
    // the array of data to hold the json data provided
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const { data, error } = useSWR('weatherApp', weatherFetcher)
    state.weatherData = data

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
    const setSkillStickerName = (name) => {
        dispatch({ type: 'SET_SKILL_STICKER', payload: name })
    }

    return (
        <AppContext.Provider value={{ ...state, showProjects, showMapOrNotice, getResume, switchContent, toggleControls, setSkillStickerName }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider