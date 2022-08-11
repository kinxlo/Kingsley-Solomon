import projects from '../../public/projects.js'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_PROJECTS':
            let newProjectList = projects.filter((project) => {
                return project.language === action.payload
            })

            state = { ...state, projects: newProjectList }
            return state

        case 'SHOW_MAP':
            return {
                ...state, toggleMapNotice: {
                    showMap: action.payload,
                    showNotice: false
                }
            }

        case 'SHOW_NOTICE':
            return {
                ...state, toggleMapNotice: {
                    showMap: false,
                    showNotice: action.payload
                }
            }
    }
}