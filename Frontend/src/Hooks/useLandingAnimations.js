import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function useLandingAnimations() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 4,
      effects: true,
    });

    ScrollTrigger.matchMedia({
      "(min-width: 991px)": function () {
        // === Section animations ===
        gsap.to("#headphone", {
          scrollTrigger: {
            trigger: "#section2",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
          y: "100vh",
          x: "20vw",
          width: "30vw",
          rotate: 0,
          ease: "none",
          immediateRender: false,
        });
      },
    });

    ScrollTrigger.matchMedia({
      "(min-width: 991px)": function () {
        // === Section animations ===
        gsap.to("#headphone", {
          scrollTrigger: {
            trigger: "#middle-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          y: "460vh",
          x: "0vw",
          width: "25vw",
          rotate: 0,
          opacity: 0.1,
          ease: "none",
          immediateRender: false,
        });
      },
    });
    // Section 3
    gsap.to("#headphone", {
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      y: "550vh",
      x: "30vw",
      width: "30vw",
      ease: "none",
      opacity: 1,
      immediateRender: false,
    });

    // Section 4
    gsap.to("#headphone", {
      scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      y: "640vh",
      x: "-35vw",
      width: "42vw",
      ease: "none",
      opacity: 0.2,
      immediateRender: false,
    });

    // Section 5
    gsap.to("#headphone", {
      scrollTrigger: {
        trigger: "#section5",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
      y: "650vh",
      x: "0vw",
      width: "300px",
      opacity: 0,
      ease: "none",
      immediateRender: false,
    });
    // content animation

    gsap.from("#section2 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section2",
        start: "-50% bottom",
        end: "center center",
        scrub: true,
      },
      y: "50%",
      ease: "power1.inOut",
    });

    gsap.from("#section3 .heading", {
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: "140%",
      ease: "power1.inOut",
    });

    gsap.from("#section4 img", {
      scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      width: 0,
      opacity: 0,
      ease: "power1.inOut",
    });

    gsap.from("#section6 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section6",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y: "40%",
      duration: 2,
      ease: "power1.inOut",
    });

    // hero section text animation
    let split = SplitText.create("#section1 .heading", {
      type: "chars, words, lines",
      mask: "lines",
    });

    gsap.from(split.chars, {
      yPercent: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-30, 30),
      autoAlpha: 0,
      ease: "back.out(1.5)",
      stagger: {
        amount: 0.5,
        from: "random",
      },
      duration: 1.5,
    });

    gsap.from("#headphone", {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 1,
      ease: "power1.inOut",
    });
  }, []);
}
