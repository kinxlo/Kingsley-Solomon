import { gsap } from 'gsap';

const fps = 120;

export const productivity = () => {
    gsap.to('.pbox', {
        scale: 1, duration: 1,  stagger: {
            ease: `power1.out`,
            amount: 1,
            grid: [4, 3]
        }
    });
    setTimeout(() => {
        requestAnimationFrame(productivity);
    }, 1000 / fps);

}