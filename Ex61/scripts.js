function layGiaTriHex(id) {
    return document.getElementById(id).value.trim().toUpperCase();
}

function laHexHopLe(giaTri) {
    return /^[0-9A-F]{2}$/.test(giaTri);
}

function layMaMau(prefix) {
    const thanhPhan = [
        layGiaTriHex(`${prefix}Red`),
        layGiaTriHex(`${prefix}Green`),
        layGiaTriHex(`${prefix}Blue`)
    ];

    if (thanhPhan.some((giaTri) => !laHexHopLe(giaTri))) {
        return null;
    }

    return `#${thanhPhan.join("")}`;
}

function apDungMau() {
    const mauNen = layMaMau("bg");
    const mauChu = layMaMau("text");

    if (!mauNen || !mauChu) {
        alert("Please enter hex values from 00 to FF.");
        return;
    }

    document.getElementById("previewPanel").style.backgroundColor = mauNen;
    document.getElementById("previewPanel").style.color = mauChu;
}

function taiLaiTrang() {
    location.reload();
}

