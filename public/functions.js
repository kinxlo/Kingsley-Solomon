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

export const activateFullscreen = (component) => {
    console.log(`fullScreen`);
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
    if (document.body.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.body.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.body.webkitExitFullscreen) {
        document.body.webkitExitFullscreen();
    }
};