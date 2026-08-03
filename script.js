window.onload = function () {
    console.log("Welcome to Rae Medye Official Website!");

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        });

        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    const hero = document.querySelector(".hero");
    hero.style.opacity = "0";
    hero.style.transition = "opacity 1.5s ease";

    setTimeout(() => {
        hero.style.opacity = "1";
    }, 300);
};
