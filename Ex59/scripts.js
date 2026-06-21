function layNgayNoel(ngayHienTai) {
    const nam = ngayHienTai.getMonth() === 11 && ngayHienTai.getDate() > 25
        ? ngayHienTai.getFullYear() + 1
        : ngayHienTai.getFullYear();

    return new Date(nam, 11, 25);
}

function tinhSoNgayConLai(ngayHienTai, ngayNoel) {
    const mocHienTai = new Date(
        ngayHienTai.getFullYear(),
        ngayHienTai.getMonth(),
        ngayHienTai.getDate()
    );
    const mocNoel = new Date(
        ngayNoel.getFullYear(),
        ngayNoel.getMonth(),
        ngayNoel.getDate()
    );
    const motNgay = 24 * 60 * 60 * 1000;

    return Math.round((mocNoel - mocHienTai) / motNgay);
}

function khoiTaoTrang() {
    const ngayHienTai = new Date();
    const ngayNoel = layNgayNoel(ngayHienTai);
    const soNgayConLai = tinhSoNgayConLai(ngayHienTai, ngayNoel);
    const dinhDangNgay = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric"
    });

    document.getElementById("todayText").textContent = `Today is ${dinhDangNgay.format(ngayHienTai)}`;
    document.getElementById("countdownText").textContent = `Only ${soNgayConLai} days until Christmas`;
}

