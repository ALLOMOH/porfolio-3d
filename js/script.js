gsap.fromTo("#loading-page", { opacity: 1 }, { opacity: 0, display:'none', duration: 1, delay: 2 });

gsap.fromTo("#name-logo",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
    }
)