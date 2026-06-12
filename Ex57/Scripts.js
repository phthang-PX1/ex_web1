// 1. Hàm tự động tính Thành tiền cho TỪNG DÒNG khi người dùng thay đổi số lượng
function tinhThanhTienDong(inputElement) {
    // Tìm đến hàng (tr) chứa ô input đang nhập liệu
    let row = inputElement.closest(".product-row");
    
    // Lấy giá trị của thuộc tính 'data-value' từ ô chứa giá sản phẩm
    let gia = parseFloat(row.querySelector(".price").getAttribute("data-value"));
    
    // Lấy số lượng từ ô input người dùng nhập vào
    let soLuongText = inputElement.value;
    let soLuong = parseInt(soLuongText);

    // KIỂM TRA TÍNH HỢP LỆ CỦA DỮ LIỆU
    // Nếu để trống, nhập số âm hoặc nhập ký tự không hợp lệ
    if (soLuongText === "" || isNaN(soLuong) || soLuong < 0) {
        row.querySelector(".subtotal").value = "0$";
        return;
    }

    // Nếu người dùng nhập số thập phân (ví dụ: 2.5), ép về số nguyên hợp lệ
    if (soLuong !== parseFloat(soLuongText)) {
        soLuong = Math.floor(parseFloat(soLuongText));
        inputElement.value = soLuong; 
    }

    // Tính thành tiền của dòng hiện tại và gán lại vào ô thành tiền tương ứng
    let thanhTien = gia * soLuong;
    row.querySelector(".subtotal").value = thanhTien + "$";
}

// 2. Hàm xử lý riêng khi bấm nút "TongCong" để hiển thị tổng số tiền vào ô Total
function tinhTongCong() {
    let tatCaDong = document.querySelectorAll(".product-row");
    let tongTien = 0;

    // Duyệt qua từng dòng sản phẩm để cộng dồn thành tiền
    tatCaDong.forEach(function(row) {
        let thanhTienText = row.querySelector(".subtotal").value;
        // Loại bỏ ký tự '$' để lấy phần số để tính toán
        let thanhTienValue = parseFloat(thanhTienText.replace("$", "")) || 0;
        tongTien += thanhTienValue;
    });

    // Hiển thị kết quả cuối cùng vào ô Total
    document.getElementById("totalPrice").value = tongTien + "$";
}
