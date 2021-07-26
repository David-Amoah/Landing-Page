if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
const close = document.querySelector(".close");
const ads = document.querySelector(".ads");


close.addEventListener("click", () => {
    close.classList.toggle("active");
    ads.classList.toggle("active")
})

