gsap.registerPlugin(ScrollTrigger);

const wheel = document.querySelector('img');

gsap.fromTo(
  wheel,
  {
    x: 0,
    rotation: 0,
  },
  {
    x: function (_, target) {
      return document.documentElement.clientWidth - target.offsetWidth;
    },
    rotation: function (_, target) {
      const r = target.offsetWidth / 2;
      const long = 2 * Math.PI * r;
      return (document.documentElement.clientWidth / long) * 360;
    },
    ease: 'none',
    scrollTrigger: {
      trigger: wheel,
      scrub: true,
      pin: true,
      start: 'center center',
    },
  }
);
