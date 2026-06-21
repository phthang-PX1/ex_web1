function dinhDangNgay(ngay) {
    return `${ngay.getDate()}/${ngay.getMonth() + 1}/${ngay.getFullYear()}`;
}

function khoiTaoForm() {
    document.getElementById("today").value = dinhDangNgay(new Date());
    document.getElementById("firstName").focus();
    tinhTongDiem();
}

function layDanhSachDiem() {
    return document.querySelectorAll(".score-input:not(#totalScore)");
}

function laDiemHopLe(giaTri) {
    return giaTri === "0" || giaTri === "1" || giaTri === "2";
}

function kiemTraDiem(oNhap) {
    if (oNhap.value === "") {
        oNhap.value = "0";
        tinhTongDiem();
        return true;
    }

    if (!laDiemHopLe(oNhap.value)) {
        alert("Score must be 0, 1, or 2. Please enter again.");
        oNhap.value = "0";
        tinhTongDiem();
        oNhap.focus();
        oNhap.select();
        return false;
    }

    return true;
}

function tinhTongDiem() {
    let tong = 0;

    layDanhSachDiem().forEach((oNhap) => {
        if (laDiemHopLe(oNhap.value)) {
            tong += Number(oNhap.value);
        }
    });

    document.getElementById("totalScore").value = tong;
}

function kiemTraBacSi() {
    const bacSi = document.getElementById("physician");
    const bacSiKhac = document.getElementById("otherPhysician");

    if (bacSi.value === "other" && bacSiKhac.value.trim() === "") {
        alert("Please enter Name.");
        bacSiKhac.focus();
        return false;
    }

    return true;
}

function dangKy() {
    if (!kiemTraBacSi()) {
        return;
    }

    for (const oNhap of layDanhSachDiem()) {
        if (!kiemTraDiem(oNhap)) {
            return;
        }
    }

    if (!document.getElementById("parentalConsent").checked) {
        alert("Parental Consent is required.");
        document.getElementById("parentalConsent").focus();
        return;
    }

    alert("Register successfully!");
}

function taiLaiTrang() {
    location.reload();
}
