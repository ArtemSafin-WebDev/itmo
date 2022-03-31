import gsap from "gsap";
import startAnim from './startAnim';

export default () => {
  const preloader = document.querySelector(".preloader");
  const preloaderLogo = document.querySelector(".preloader__logo");
  const timeline = gsap.timeline();

  timeline
    .to(preloaderLogo, {y: '-2rem', autoAlpha: 0, duration: 0.3})
    .to(preloader, {
      yPercent: -100,
      duration: 0.7
    }, '-=0.1')
    .to(preloader, {autoAlpha: 0, onComplete: startAnim() });
};
