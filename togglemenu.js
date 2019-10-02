function toggleMenu() {
    if (document.getElementById("main-nav").style.height == "0px") {
        var numChildren = document.getElementById("main-nav").childNodes.length;
        document.getElementById("main-nav").style.height = (numChildren * 1.5) + "em";
        document.getElementById("burger").classList.add("open");
    } else {
        document.getElementById("main-nav").style.height = "0px";
        document.getElementById("burger").classList.remove("open");
    }
}