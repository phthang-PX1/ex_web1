function layTien(phanTu) {
    return Number(phanTu.textContent.replace("$", ""));
}

function dinhDangTien(giaTri) {
    return `${giaTri}$`;
}

function tinhThanhTienDong(oNhap) {
    const dong = oNhap.closest(".product-row");
    const gia = layTien(dong.querySelector(".price"));
    const soLuong = Math.max(0, Math.floor(Number(oNhap.value) || 0));

    oNhap.value = soLuong;
    dong.querySelector(".subtotal").value = dinhDangTien(gia * soLuong);
}

function tinhTongCong() {
    const danhSachDong = document.querySelectorAll(".product-row");
    let tong = 0;

    danhSachDong.forEach((dong) => {
        const gia = layTien(dong.querySelector(".price"));
        const soLuong = Number(dong.querySelector(".quantity").value) || 0;
        const thanhTien = gia * soLuong;

        dong.querySelector(".subtotal").value = dinhDangTien(thanhTien);
        tong += thanhTien;
    });

    document.getElementById("totalPrice").value = dinhDangTien(tong);
}
