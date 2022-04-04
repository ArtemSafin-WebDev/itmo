import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
 
  const pageHeader = document.querySelector(".header");
  if (!pageHeader) return;

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      console.log('Hello')
      ScrollTrigger.create({
        trigger: pageHeader,
        start: 'top top+=10',
        end: 999999999,
        pin: true,
        pinSpacing: false,
        markers: false
      })
    },
  });
};
