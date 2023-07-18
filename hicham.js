gsap.registerPlugin(ScrollTrigger);

const paths = gsap.utils.toArray(".commitment-vector.is-1 svg path");

paths.forEach((path, i) => {
  // Reset and prepare the path for animation
  const length = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  gsap.to(path, {
    scrollTrigger: {
      trigger: ".commitment-section",
      start: `top${window.innerHeight / 2}`, // when the top of .commitment-section hits the center of the screen
      end: "bottom bottom", // when the bottom of .commitment-section hits the bottom of the screen
      scrub: true,
    },
    strokeDashoffset: 0,
    duration: 2, // duration for each path's animation
    delay: i * 2, // delay each path by index * duration to create sequential animation
  });
});
