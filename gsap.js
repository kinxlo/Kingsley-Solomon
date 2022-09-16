
import { gsap } from 'gsap';

export const profileAnimation = () => {

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
}

export const productivity = () => {

}
