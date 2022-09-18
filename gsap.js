
import { gsap } from 'gsap';

export const profileAnimation = () => {
    gsap.set(`.slide-in`, {
        y: `2rem`, opacity: 0,
    });
    gsap.set(`.action-btn`, { scale: 0, opacity: 0 })
    let tl = gsap.timeline({ delay: 1.5, duration: 0.1 });
    tl.to(`#profileBox`, { width: 1, ease: "power3.out" });
    tl.to(`.slide-in`, {
        y: `initial`, opacity: 1, stagger: {
            each: 0.2,
            from: "end",
            grid: "auto",
            ease: "power2.inOut",
        }
    });
    tl.to(`.action-btn`, { scale: 1, opacity: 1, ease: "elastic.out", duration: 1, stagger: 0.1 })
    tl.to(`#scroll`, {
        delay: 0.5, opacity: 1, yoyo: true, repeat: 5, duration: 2, onComplete: function () {
            tl.to(`#scroll`, { opacity: 1 })
        },
    })
}

export const projectAnimation = () => {
    gsap.set(`#profileBox`, { width: `100%` });
    // gsap.set(`#project-image`, { y: `3rem`, opacity: 0, });
    gsap.set(`.slide-project`, {
        y: `2rem`, opacity: 0,
    });

    let tl = gsap.timeline({ delay: 0.1, duration: 0.1 });
    // tl.to(`#project-image`, { opacity: 1, y: `initial`, duration: 1 })
    tl.to(`#profileBox`, { width: 1, ease: "power3.out" });
    tl.to(`.slide-project`, {
        y: `initial`, opacity: 1, stagger: {
            each: 0.2,
            from: "end",
            grid: "auto",
            ease: "power2.inOut",
        }
    });
}

export const productivity = () => {
    gsap.set(`.pbox`, { scale: 0, opacity: 0 })
    gsap.set(`#map`, { opacity: 0 })
    let tl = gsap.timeline({ delay: 0.1, duration: 0.1 });
    tl.to(`.pbox`, { scale: 1, opacity: 1, ease: "elastic.out", duration: 1, stagger: 0.1 })
    tl.to(`#map`, { opacity: 1, duration: 5 })
}
