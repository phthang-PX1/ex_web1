function ganSuKienMenuJavascript() {
    const menuJavascript = document.getElementById("menuJavascript");
    const subMenuJavascript = document.getElementById("subMenuJavascript");

    function moMenuJavascript() {
        menuJavascript.classList.add("open");
    }

    function dongMenuJavascript() {
        menuJavascript.classList.remove("open");
    }

    function datTrangThaiHover(danhSachLink, linkDangHover) {
        danhSachLink.forEach((link) => {
            link.classList.toggle("active", link === linkDangHover);
        });
    }

    menuJavascript.addEventListener("mouseenter", moMenuJavascript);
    menuJavascript.addEventListener("mouseleave", () => {
        dongMenuJavascript();
        datTrangThaiHover(subMenuJavascript.querySelectorAll(".sub-link"), null);
    });

    subMenuJavascript.querySelectorAll(".sub-link").forEach((link) => {
        link.addEventListener("mouseenter", () => {
            datTrangThaiHover(subMenuJavascript.querySelectorAll(".sub-link"), link);
        });
        link.addEventListener("mouseleave", () => {
            link.classList.remove("active");
        });
    });
}

ganSuKienMenuJavascript();

