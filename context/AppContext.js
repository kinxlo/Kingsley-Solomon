import React, { createContext, useEffect, useReducer, useState } from 'react'
import { AppReducer } from './reducers/AppReducer'
import { axiosInstance } from '../axios/global.js';

export const AppContext = createContext()
const initialState = {
    projects: [],
    toggleMapNotice: {
        showMap: false,
        showNotice: false,
        showBigMap: false
    },
    showResume: false
}

const AppContextProvider = ({ children }) => {
    // the array of data to hold the json data provided
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const [weatherInfo, setWeatherInfo] = useState(null)


    const showProjects = (language) => {
        dispatch({ type: 'SHOW_PROJECTS', payload: language })
    }

    const getResume = () => {
        dispatch({ type: 'SHOW_RESUME', payload: state.showResume })
    }

    const showMapOrNotice = (type) => {
        dispatch({ type: type, payload: true })
    }

    const getWeatherInfo = () => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        async function success(pos) {
            const crd = pos.coords;
            //   console.log(crd);
            const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${
                // (crd.longitude, crd.latitude)
                `Lagos`
                }`;
            const res = await axiosInstance.get(url);
            if (res.status === 200) {
                setWeatherInfo(res.data)
            }
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

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <AppContext.Provider value={{ ...state, weatherInfo, showProjects, showMapOrNotice, getResume }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider