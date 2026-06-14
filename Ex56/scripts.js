function layChuoi() {
    return document.getElementById("txtInput").value;
}

function ghiKetQua(noiDung) {
    document.getElementById("txtOutput").value = noiDung;
}

function laChuCai(kyTu) {
    return /\p{L}/u.test(kyTu);
}

function laChuHoa(kyTu) {
    return laChuCai(kyTu)
        && kyTu === kyTu.toLocaleUpperCase("vi-VN")
        && kyTu !== kyTu.toLocaleLowerCase("vi-VN");
}

function laChuThuong(kyTu) {
    return laChuCai(kyTu)
        && kyTu === kyTu.toLocaleLowerCase("vi-VN")
        && kyTu !== kyTu.toLocaleUpperCase("vi-VN");
}

function boDau(kyTu) {
    return kyTu.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
}

function tachNguyenAmPhuAm(chuoi) {
    const nguyenAm = [];
    const phuAm = [];

    for (const kyTu of chuoi) {
        if (!laChuCai(kyTu)) {
            continue;
        }

        const kyTuKhongDau = boDau(kyTu).toLowerCase();

        if ("aeiouy".includes(kyTuKhongDau)) {
            nguyenAm.push(kyTu);
        } else {
            phuAm.push(kyTu);
        }
    }

    return { nguyenAm, phuAm };
}

function nhapDuLieu() {
    const giaTri = prompt("Nhập chuỗi ký tự:");

    if (giaTri !== null) {
        document.getElementById("txtInput").value = giaTri;
        ghiKetQua("");
    }
}

function demKyTuHoa() {
    const chuoi = layChuoi();
    if (!chuoi) {
        ghiKetQua("Chưa có dữ liệu để đếm ký tự hoa.");
        return;
    }

    const danhSachKyTuHoa = Array.from(chuoi).filter(laChuHoa);
    ghiKetQua(`Số ký tự hoa: ${danhSachKyTuHoa.length}\nCác ký tự: ${danhSachKyTuHoa.join(", ")}`);
}

function inChuHoa() {
    const chuoi = layChuoi();
    if (!chuoi) {
        ghiKetQua("Chưa có dữ liệu để in chữ hoa.");
        return;
    }

    ghiKetQua(chuoi.toLocaleUpperCase("vi-VN"));
}

function inMoiTuTrenMoiDong() {
    const chuoi = layChuoi().trim();
    if (!chuoi) {
        ghiKetQua("Chưa có dữ liệu để tách từ.");
        return;
    }

    ghiKetQua(chuoi.split(/\s+/).join("\n"));
}

function inChuThuong() {
    const chuoi = layChuoi();
    if (!chuoi) {
        ghiKetQua("Chưa có dữ liệu để in chữ thường.");
        return;
    }

    ghiKetQua(chuoi.toLocaleLowerCase("vi-VN"));
}

function demSoTu() {
    const chuoi = layChuoi().trim();
    const soTu = chuoi ? chuoi.split(/\s+/).length : 0;
    ghiKetQua(`Số từ trong chuỗi: ${soTu}`);
}

function demSoKyTuThuong() {
    const chuoi = layChuoi();
    if (!chuoi) {
        ghiKetQua("Chưa có dữ liệu để đếm ký tự thường.");
        return;
    }

    const kyTuThuong = Array.from(chuoi).filter(laChuThuong);
    ghiKetQua(`Số ký tự thường: ${kyTuThuong.length}\nCác ký tự: ${kyTuThuong.join(", ")}`);
}

function inNguyenAmPhuAm() {
    const chuoi = layChuoi();
    if (!chuoi) {
        ghiKetQua("Chưa có dữ liệu để phân loại ký tự.");
        return;
    }

    const { nguyenAm, phuAm } = tachNguyenAmPhuAm(chuoi);
    ghiKetQua(
        `Nguyên âm (${nguyenAm.length}): ${nguyenAm.join(", ")}\nPhụ âm (${phuAm.length}): ${phuAm.join(", ")}`
    );
}

function xemW3C() {
    window.open("https://www.w3schools.com/js/js_string_methods.asp", "_blank");
}
