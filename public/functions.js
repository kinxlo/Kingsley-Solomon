import { MdOutlineLocationOn, MdBluetooth, MdOutlineWbSunny, MdBatteryFull, MdFullscreen } from 'react-icons/md';
import { BiScreenshot } from 'react-icons/bi'

export const functions = [
    {
        id: 1,
        name: `Location`,
        icon: MdOutlineLocationOn
    },
    {
        id: 2,
        name: `Fullscreen`,
        icon: MdFullscreen
    },
    {
        id: 3,
        name: `Screen capture`,
        icon: BiScreenshot
    },
    {
        id: 4,
        name: `Notification`,
        icon: MdFullscreen
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


