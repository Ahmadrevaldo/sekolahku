const scrollup = document.querySelector('.scroll-up');

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollup.classList.add("scroll-active");
    } else {
        scrollup.classlist.remove("scroll-active");
    }
})

