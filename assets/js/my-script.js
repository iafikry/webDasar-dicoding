function menu(e) {
    e.style.width = "0px";
    e.style.transition = "1s";
}

function openMenu() {
    document.getElementById("header").style.backgroundColor = "#1B1717";
    document.getElementById("header").style.transition = "all 0.8s"
    document.getElementById("header-menu").style.transition= "all 0.8s";
    document.getElementById("header-menu").style.height = "200px";
    document.getElementById("btn-open").style.transition= "all 0.8s";
    document.getElementById("btn-open").style.color = "#1b1717";
    document.getElementById("btn-open").style.display = "none";
    document.getElementById("btn-close").style.transition = "all 0.8s";
    document.getElementById("btn-close").style.display = "inline-block";
    document.getElementById("btn-close").style.color = "#fff";
}
function closeMenu() {
    window.onscroll = function () {
        let currScrollPos = window.pageYOffset;
        if (currScrollPos > 100) {
             document.getElementById("header").style.backgroundColor = "#1B1717";
        }else {
            document.getElementById("header").style.backgroundColor = "transparent";
        }
    }
    document.getElementById("header-title").style.color = "#fff";
    document.getElementById("header-menu").style.height = "0px";
    document.getElementById("btn-open").style.display = "inline-block";
    document.getElementById("btn-open").style.color = "#fff";
    document.getElementById("btn-close").style.display = "none";
}
function openProfile() {
    document.getElementById("aside-menu").style.width = "100%";
    console.log("kebuka");
}
function closeProfile() {
    document.getElementById("aside-menu").style.width = "0px";
    console.log("tutup");
}