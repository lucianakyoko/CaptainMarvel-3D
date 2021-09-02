//Parallax effect using scrollTrigger library:
gsap.to('[data-ship]', {
  scrollTrigger: {
    scrub: true
  },
  x: 1000,
  y: 200,
  scale: 4
});

gsap.to('[data-captain]', {
  scrollTrigger: {
    scrub: true
  },
  x: 0,
  y: -1800,
  scale: 2
});
