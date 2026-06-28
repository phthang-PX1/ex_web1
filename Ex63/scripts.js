// Tự động tải ngày, tháng, năm lên dropdownlist khi trang tải xong
window.onload = function() {
    let ngaySelect = document.getElementById("ngay");
    for (let i = 1; i <= 31; i++) {
        let val = i < 10 ? "0" + i : i;
        ngaySelect.options.add(new Option(val, val));
    }

    let thangSelect = document.getElementById("thang");
    for (let i = 1; i <= 12; i++) {
        let val = i < 10 ? "0" + i : i;
        thangSelect.options.add(new Option(val, val));
    }

    let namSelect = document.getElementById("nam");
    for (let i = 1950; i <= 2026; i++) {
        let opt = new Option(i, i);
        if (i === 1970) opt.selected = true; // Mặc định chọn 1970 giống hình
        namSelect.options.add(opt);
    }
};

// Xử lý khi nhấn nút Đăng ký
function dangKy() {
    let tenInput = document.getElementById("ten");
    let emailInput = document.getElementById("email");
    let ten = tenInput.value.trim();
    let email = emailInput.value.trim();

    // Kiểm tra Tên không được bỏ trống
    if (ten === "") {
        alert("Vui lòng nhập Tên!");
        tenInput.focus();
        return;
    }

    // Kiểm tra Email hợp lệ
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ!");
        emailInput.focus();
        return;
    }

    // Lấy Giới tính
    let gioiTinh = document.querySelector('input[name="gioiTinh"]:checked').value;

    // Lấy Ngày sinh
    let ngay = document.getElementById("ngay").value;
    let thang = document.getElementById("thang").value;
    let nam = document.getElementById("nam").value;
    let namSinh = `${ngay}/${thang}/${nam}`;

    // Lấy Sở thích
    let soThichArr = [];
    document.querySelectorAll('input[name="soThich"]:checked').forEach((cb) => {
        soThichArr.push(cb.value);
    });
    let soThich = soThichArr.join(", ");

    // Lấy Màu yêu thích
    let mauYeuThich = document.querySelector('input[name="mauYeuThich"]:checked').value;

    // Thêm dòng mới vào Table
    let tbody = document.getElementById("tableBody");
    let tr = document.createElement("tr");
    
    // Gán sự kiện mouse over và mouse out cho dòng mới
    tr.onmouseover = function() { rowOver(this); };
    tr.onmouseout = function() { rowOut(this); };

    tr.innerHTML = `
        <td>${ten}</td>
        <td>${email}</td>
        <td>${gioiTinh}</td>
        <td>${namSinh}</td>
        <td>${soThich}</td>
        <td>${mauYeuThich}</td>
    `;

    tbody.appendChild(tr);
}

// Xử lý khi nhấn nút Tiếp
function tiepTuc() {
    document.getElementById("regForm").reset();
    document.getElementById("ten").focus();
}

// Hàm xử lý sự kiện Mouse Over cho dòng trong Table
function rowOver(row) {
    row.style.backgroundColor = "yellow";
}

// Hàm xử lý sự kiện Mouse Out cho dòng trong Table
function rowOut(row) {
    row.style.backgroundColor = "white";
}
