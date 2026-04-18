const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");

if (menuToggle && navPanel) {
    menuToggle.addEventListener("click", () => {
        navPanel.classList.toggle("is-open");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navPanel.classList.remove("is-open");
        });
    });

    document.addEventListener("click", (event) => {
        const clickedInsideMenu =
            navPanel.contains(event.target) || menuToggle.contains(event.target);

        if (!clickedInsideMenu) {
            navPanel.classList.remove("is-open");
        }
    });
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});