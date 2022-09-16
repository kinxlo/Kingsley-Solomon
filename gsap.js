import { gsap } from 'gsap';

export const profileAnimation = () => {
    let tl = gsap.timeline({ delay: 1.5, duration: 0.1 });
    tl.to('#profileBox', { width: 1, ease:"power3.out" });
    requestAnimationFrame(profileAnimation);
}

export const productivity = () => {
    let tl = gsap.timeline();

    requestAnimationFrame(productivity);
}