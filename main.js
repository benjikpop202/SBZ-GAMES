document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".apartado");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);

            sections.forEach(section => {
                section.style.display = "none";
            });

            links.forEach(navLink => {
                navLink.parentElement.classList.remove("active");
            });

            const targetSection = document.getElementById(targetId);
            console.log(targetSection);
            if (targetSection) {
                targetSection.style.display = "flex";
                e.target.parentElement.classList.add("active");
            }
        });
    });
    links[0].classList.add( "active");
    sections[0].style.display = "flex";

});
