gsap.registerPlugin(ScrollTrigger);

const paths = gsap.utils.toArray(".commitment-vector.is-1 svg path");
const totalLength = paths.reduce(
  (total, path) => total + path.getTotalLength(),
  0
);

let cumulativeLength = 0;

paths.forEach((path) => {
  const pathLength = path.getTotalLength();
  const start = cumulativeLength / totalLength;
  const end = (cumulativeLength + pathLength) / totalLength;

  gsap.set(path, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: ".commitment-section",
      scrub: true,
      start: "top center",
      end: "bottom center",
      markers: true,
    },
  });

  cumulativeLength += pathLength;
});
