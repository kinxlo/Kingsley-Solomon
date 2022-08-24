import { RiMap2Line, RiFullscreenLine, RiScreenshot2Line, RiNotification2Line } from "react-icons/ri";

export const functions = [
    {
        id: 1,
        name: `Location`,
        icon: RiMap2Line
    },
    {
        id: 2,
        name: `Fullscreen`,
        icon: RiFullscreenLine
    },
    {
        id: 3,
        name: `Capture`,
        icon: RiScreenshot2Line
    },
    {
        id: 4,
        name: `Notification`,
        icon: RiNotification2Line
    },
]

// Fullscreen API
export const activateFullscreen = (component) => {
    if (component.requestFullscreen) {
        component.requestFullscreen();
    }
    else if (component.mozRequestFullScreen) {
        component.mozRequestFullScreen();     // Firefox
    }
    else if (component.webkitRequestFullscreen) {
        component.webkitRequestFullscreen();  // Safari
    }
    else if (component.msRequestFullscreen) {
        component.msRequestFullscreen();      // IE/Edge
    }
}

export const deactivateFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
};


