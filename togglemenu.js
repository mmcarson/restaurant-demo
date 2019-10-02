function toggleMenu() {
    if (document.getElementById("main-nav").style.display == "none") {
        document.getElementById("main-nav").style.display = "inline-block";
        document.getElementById("burger").classList.add("open");
    } else {
        document.getElementById("main-nav").style.display = "none";
        document.getElementById("burger").classList.remove("open");
    }
}