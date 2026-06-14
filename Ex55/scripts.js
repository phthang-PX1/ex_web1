function giaiPhuongTrinh() {
    let a = parseFloat(document.getElementById("heSoA").value);
    let b = parseFloat(document.getElementById("heSoB").value);
    let c = parseFloat(document.getElementById("heSoC").value);
    let oKetQua = document.getElementById("ketQua");

    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        oKetQua.innerText = "Vui lòng nhập đầy đủ các hệ số!";
        return;
    }

    
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

    
    let delta = Math.pow(b, 2) - 4 * a * c;

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


function lamTiep() {
    document.getElementById("heSoA").value = "";
    document.getElementById("heSoB").value = "";
    document.getElementById("heSoC").value = "";
    document.getElementById("ketQua").innerText = "";
    document.getElementById("heSoA").focus();
}
