gsap.registerPlugin(ScrollTrigger);

const paths = gsap.utils.toArray(".commitment-vector.is-1 svg path");
const totalLength = paths.reduce(
  (total, path) => total + path.getTotalLength(),
  0
);

let cumulativeLength = 0;

paths.forEach((path) => {
  const pathLength = path.getTotalLength();
  const start = (cumulativeLength / totalLength) * 100;
  const end = ((cumulativeLength + pathLength) / totalLength) * 100;

  gsap.set(path, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength > 0 ? pathLength : 0,
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: ".commitment-section",
      scrub: true,
      start: `${start}% center`,
      end: `${end}% center`,
      markers: true,
    },
  });

  cumulativeLength += pathLength > 0 ? pathLength : 0;
});
