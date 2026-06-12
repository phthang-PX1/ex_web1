// ─── Helpers ───────────────────────────────────────────────────────────────
function inp() {
  return document.getElementById('txtInput').value;
}

function out(val) {
  document.getElementById('txtOutput').value = val;
}

function isUpperCaseViet(c) {
  return 'ÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ'.includes(c);
}

function isLowerCase(c) {
  return 'abcdefghijklmnopqrstuvwxyzáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ'.includes(c);
}

// ─── 1. Nhập dữ liệu ───────────────────────────────────────────────────────
function nhapDuLieu() {
  var val = prompt('Nhập chuỗi ký tự:');
  if (val !== null) {
    document.getElementById('txtInput').value = val;
    out('');
  }
}

// ─── 2. Đến ký tự hoa ─────────────────────────────────────────────────────
function denKyTuHoa() {
  var s = inp();
  if (!s) return;
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if ((c >= 'A' && c <= 'Z') || isUpperCaseViet(c)) {
      out('Ký tự hoa đầu tiên: "' + c + '" tại vị trí ' + i);
      return;
    }
  }
  out('Không tìm thấy ký tự hoa trong chuỗi.');
}

// ─── 3. In chữ Hoa ────────────────────────────────────────────────────────
function inChuHoa() {
  var s = inp();
  if (!s) return;
  out(s.toUpperCase());
}

// ─── 4. In mỗi từ trên mỗi dòng ───────────────────────────────────────────
function inMoiTuTrenMoiDong() {
  var s = inp();
  if (!s) return;
  var words = s.trim().split(/\s+/);
  out(words.join('\n'));
}

// ─── 5. In chữ thường ─────────────────────────────────────────────────────
function inChuThuong() {
  var s = inp();
  if (!s) return;
  out(s.toLowerCase());
}

// ─── 6. Đếm số từ ─────────────────────────────────────────────────────────
function demSoTu() {
  var s = inp().trim();
  if (!s) { out('0'); return; }
  var count = s.split(/\s+/).length;
  out('Số từ trong chuỗi: ' + count);
}

// ─── 7. Đếm số ký tự thường ───────────────────────────────────────────────
function demSoKyTuThuong() {
  var s = inp();
  if (!s) return;
  var count = 0;
  var chars = [];
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (isLowerCase(c)) {
      count++;
      chars.push(c);
    }
  }
  out('Số ký tự thường: ' + count + '\nCác ký tự: ' + chars.join(', '));
}

// ─── 8. In Nguyên âm, Phụ âm ──────────────────────────────────────────────
function inNguyenAmPhuAm() {
  var s = inp().toLowerCase();
  if (!s) return;
  var nguyenAmBase = 'aeiouáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ';
  var nguyen = [];
  var phu = [];
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (c === ' ') continue;
    if (nguyenAmBase.indexOf(c) !== -1) {
      nguyen.push(c);
    } else if (/[a-záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ]/.test(c)) {
      phu.push(c);
    }
  }
  out('Nguyên âm (' + nguyen.length + '): ' + nguyen.join(', ') +
      '\nPhụ âm (' + phu.length + '): ' + phu.join(', '));
}

// ─── 9. Xem W3C ───────────────────────────────────────────────────────────
function xemW3C() {
  window.open('https://www.w3schools.com/js/js_string_methods.asp', '_blank');
}