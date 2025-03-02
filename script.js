document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, x: -50, duration: 1, delay: 0.3 });
    gsap.from(".hero img", { opacity: 0, scale: 0.8, duration: 1, delay: 0.6 });

    gsap.from(".feature", {
        scrollTrigger: ".features",
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
    });
});
