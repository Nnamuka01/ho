// const navBar = document.getElementById("navBar");
// const unavailableContent = document.getElementByClassName("unavailable-content");

// function showMobileNav() {
//     if (navBar.className === "nav-bar") {
//         navBar.className += " mobile";
//         navClose.style.display = "none";
//     } else {
//         navBar.className = "nav-bar";
//     }
// }

// function unavailable() {
//     alert("Sorry this content is unavailable at the moment")
// }

// function replyToAddress() {
//     alert("Your address has been received we'll get back to you shortly");
// }

function showMobileNav(){
    navUl = document.getElementById("nav-links")
    closeMenu = document.getElementById("menu-close")
    openMenu = document.getElementById("menu-btn")

    navUl.classList.remove("animate__slideOutRight"); //remove closing animation
    navUl.classList.add("animate__slideInRight"); //add opening animation

    openMenu.style.display="none"
    navUl.style.display="block"
    closeMenu.style.display="block"
}

function closeMobileNav(){
    navUl = document.getElementById("nav-links")
    closeMenu = document.getElementById("menu-close")
    openMenu = document.getElementById("menu-btn")

    navUl.classList.remove("animate__slideInRight"); //remove opening animation
    navUl.classList.add("animate__slideOutRight"); //add closing animation


    // Apply display operation with a slight delay, to give time for it to close
    setTimeout(() => {
        openMenu.style.display="block"
        navUl.style.display="none"
        closeMenu.style.display="none"
    }, 700);
} 