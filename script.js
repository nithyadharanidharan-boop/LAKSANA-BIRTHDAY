/* =========================================================
   LAKSANA BIRTHDAY
   PAGE REVEAL SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }

            });

        },
        {
            threshold: 0.65
        }
    );


    pages.forEach((page) => {
        observer.observe(page);
    });


    const firstPage = document.querySelector(".page-1");

    if (firstPage) {
        setTimeout(() => {
            firstPage.classList.add("show");
        }, 300);
    }

}); 