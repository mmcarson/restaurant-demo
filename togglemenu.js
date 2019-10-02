function toggleMenu() {
    if (document.getElementById("main-nav").style.height == "0px") {
        document.getElementById("main-nav").style.height = "100vh";
        document.getElementById("burger").classList.add("open");
    } else {
        document.getElementById("main-nav").style.height = "0px";
        document.getElementById("burger").classList.remove("open");
    }
}