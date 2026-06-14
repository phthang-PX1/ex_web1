function layGiaTri() {
    let a = parseFloat(document.getElementById("soA").value) || 0;
    let b = parseFloat(document.getElementById("soB").value) || 0;
    let c = parseFloat(document.getElementById("soC").value) || 0;
    return { a, b, c };
}

function hienThiKetQua(giaTri) {
    document.getElementById("ketQua").value = giaTri;
}

function tinhMax() {
    let { a, b, c } = layGiaTri();
    hienThiKetQua(Math.max(a, b, c));
}

function tinhMin() {
    let { a, b, c } = layGiaTri();
    hienThiKetQua(Math.min(a, b, c));
}

function tinhSin() {
    let { a } = layGiaTri();
    let radian = a * (Math.PI / 180);
    hienThiKetQua(Math.sin(radian));
}

function tinhCos() {
    let { a } = layGiaTri();
    let radian = a * (Math.PI / 180);
    hienThiKetQua(Math.cos(radian));
}

function tinhLuyThua() {
    let { a, b } = layGiaTri();
    hienThiKetQua(Math.pow(a, b));
}
