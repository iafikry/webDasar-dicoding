function menu(e) {
    e.style.width = "0px";
    e.style.transition = "1s";
}

function openMenu() {
    document.getElementById("header").style.backgroundColor = "#1B1717";
    document.getElementById("header").style.transition = "all 0.8s"
    document.getElementById("header-menu").style.transition= "all 0.8s";
    document.getElementById("header-menu").style.height = "260px";
    document.getElementById("btn-open").style.transition= "all 0.8s";
    document.getElementById("btn-open").style.color = "#1b1717";
    document.getElementById("btn-open").style.display = "none";
    document.getElementById("btn-close").style.transition = "all 0.8s";
    document.getElementById("btn-close").style.display = "inline-block";
    document.getElementById("btn-close").style.color = "#fff";
}
function closeMenu() {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header-title").style.color = "#fff";
    document.getElementById("header-menu").style.height = "0px";
    document.getElementById("btn-open").style.display = "inline-block";
    document.getElementById("btn-open").style.color = "#fff";
    document.getElementById("btn-close").style.display = "none";
}