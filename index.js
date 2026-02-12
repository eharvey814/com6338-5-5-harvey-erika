// Select elements
var hamburgerBtn = document.querySelector(".hamburger-btn");
var menu = document.querySelector(".hamburger-menu");

// Menu open - aria attribute true
function openMenu() {
    menu.classList.add("show-menu");
    hamburgerBtn.setAttribute("aria-expanded", "true");
}

// Menu close - aria attribute false
function closeMenu() {
    menu.classList.remove("show-menu");
    hamburgerBtn.setAttribute("aria-expanded", "false");
}

// Toggle menu when clicking the hamburger button
hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (menu.classList.contains("show-menu")) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close menu when clicking outside of it
document.addEventListener("click", (e) => {
    var clickedInsideMenu = menu.contains(e.target);
    var clickedButton = hamburgerBtn.contains(e.target);

    if (!clickedInsideMenu && !clickedButton) {
        closeMenu();
    }
});

// Clicking inside does not close it
menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Close menu with Escape key
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        closeMenu();
        hamburgerBtn.focus();
    }
};