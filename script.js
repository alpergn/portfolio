const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active");
    })


let typed = new Typed(".profession_text",{
        strings: ["Full Stack Developer"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
})

document.addEventListener("DOMContentLoaded", function() {
    const back_btn_top = document.querySelector(".btn-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 50) {
            back_btn_top.classList.add("active");
        } else {
            back_btn_top.classList.remove("active");
        }
    });
});
