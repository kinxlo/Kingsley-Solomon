import { MdOutlineLocationOn, MdBluetooth, MdOutlineWbSunny, MdBatteryFull, MdFullscreen } from 'react-icons/md';

export const functions = [
    {
        id: 1,
        name: `Location`,
        icon: MdOutlineLocationOn
    },
    {
        id: 2,
        name: `Bluetooth`,
        icon: MdBluetooth
    },
    {
        id: 3,
        name: `Night light`,
        icon: MdOutlineWbSunny
    },
    {
        id: 4,
        name: `Battery level`,
        icon: MdBatteryFull
    },
    {
        id: 5,
        name: `Fullscreen`,
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


