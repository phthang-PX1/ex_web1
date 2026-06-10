// Hàm xử lý logic giải phương trình bậc 2 (ax^2 + bx + c = 0)
function giaiPhuongTrinh() {
    // Lấy giá trị từ các ô input và chuyển sang kiểu số thực
    let a = parseFloat(document.getElementById("heSoA").value);
    let b = parseFloat(document.getElementById("heSoB").value);
    let c = parseFloat(document.getElementById("heSoC").value);
    let oKetQua = document.getElementById("ketQua");

    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        oKetQua.innerText = "Vui lòng nhập đầy đủ các hệ số!";
        return;
    }

    // Trường hợp a = 0: Trở thành phương trình bậc 1 (bx + c = 0)
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                oKetQua.innerText = "Phương trình vô số nghiệm";
            } else {
                oKetQua.innerText = "Phương trình vô nghiệm";
            }
        } else {
            let x = -c / b;
            oKetQua.innerText = "Phương trình có 1 nghiệm x = " + x;
        }
        return;
    }

    // Trường hợp a khác 0: Tính Delta
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        oKetQua.innerText = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        oKetQua.innerText = "Nghiệm kép x1=x2=" + x;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        oKetQua.innerText = "Có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
    }
}

// Hàm xử lý khi nhấn nút "Tiếp" để xóa dữ liệu cũ và chuẩn bị nhập lượt mới
function lamTiep() {
    document.getElementById("heSoA").value = "";
    document.getElementById("heSoB").value = "";
    document.getElementById("heSoC").value = "";
    document.getElementById("ketQua").innerText = "";
    // Đưa con trỏ chuột về ô hệ số a để người dùng tiện nhập tiếp
    document.getElementById("heSoA").focus();
}
