import projects from '../../public/projects'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_PROJECTS':
            let newProjectList = projects.filter((project) => {
                if (project.language.includes(action.payload)) {
                    return project
                }
            })

            state = {
                ...state, projects: newProjectList,
                language: action.payload,
                switchView: `projects`
            }
            return state

        case 'SHOW_MAP':
            return {
                ...state, toggleMapNotice: {
                    showMap: action.payload,
                    showNotice: false,
                    showBigMap: false
                }
            }

        case 'SHOW_RESUME':
            return {
                ...state, showResume: !action.payload
            }

        case 'SHOW_CONTROLS':
            return {
                ...state, showControls: !action.payload
            }

        case 'SHOW_BIG_MAP':
            return {
                ...state, toggleMapNotice: {
                    showMap: false,
                    showNotice: true,
                    showBigMap: action.payload
                }
            }

        case 'SHOW_NOTICE':
            return {
                ...state, toggleMapNotice: {
                    showMap: false,
                    showNotice: action.payload,
                    showBigMap: false
                }
            }
        case 'SWITCH_VIEW':
            return {
                ...state, switchView: action.payload
            }
        case 'SET_SKILL_STICKER':
            return {
                ...state, skillStickerName: action.payload
            }

    }
}