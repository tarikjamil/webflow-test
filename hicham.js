gsap.registerPlugin(ScrollTrigger);

const paths = gsap.utils.toArray(".commitment-vector.is-1 svg path");
const totalLength = paths.reduce(
  (total, path) => total + path.getTotalLength(),
  0
);

let cumulativeLength = 0;

paths.forEach((path, i) => {
  const length = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: ".commitment-section",
      scrub: 1,
      start: "top center",
      end: "bottom bottom",
    },
  });

  animation.fromTo(
    path,
    {
      strokeDashoffset: length,
    },
    {
      strokeDashoffset: 0,
      ease: "none",
    },
    cumulativeLength / totalLength
  ); // start each path's animation at the proportionate point along the timeline

  cumulativeLength += length;
});
