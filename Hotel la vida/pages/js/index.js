const navBar = document.getElementById("navBar");
const unavailableContent = document.getElementByClassName("unavailable-content");

function showMobileNav() {
    if (navBar.className === "nav-bar") {
        navBar.className += " mobile";
        navClose.style.display = "none";
    } else {
        navBar.className = "nav-bar";
    }
}

function unavailable() {
    alert("Sorry this content is unavailable at the moment")
}

function replyToAddress() {
    alert("Your address has been received we'll get back to you shortly");
}