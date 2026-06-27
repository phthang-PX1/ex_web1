var xmlData = null; // Lưu dữ liệu XML sau khi load

    // Gọi AJAX khi trang vừa tải xong
    window.onload = function () {
      loadXML();
    };

    function loadXML() {
      var xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          xmlData = xhr.responseXML;
          buildDroplist(xmlData);
          filterByTitle(); // Hiển thị ngay theo title đầu tiên
        }
      };

      xhr.open("GET", "employees.xml", true);
      xhr.send();
    }

    // Lấy danh sách title không trùng nhau → đưa vào droplist
    function buildDroplist(xml) {
      var employees = xml.getElementsByTagName("employee");
      var titles = [];

      for (var i = 0; i < employees.length; i++) {
        var title = employees[i].getAttribute("title");
        if (titles.indexOf(title) === -1) {
          titles.push(title);
        }
      }

      var select = document.getElementById("titleSelect");
      select.innerHTML = ""; // Xóa option cũ nếu có

      for (var j = 0; j < titles.length; j++) {
        var option = document.createElement("option");
        option.value = titles[j];
        option.text = titles[j];
        select.appendChild(option);
      }
    }

    // Lọc và hiển thị Employee theo title đang chọn
    function filterByTitle() {
      if (!xmlData) return;

      var selectedTitle = document.getElementById("titleSelect").value;
      var employees = xmlData.getElementsByTagName("employee");
      var table = document.getElementById("empTable");

      // Xóa các hàng dữ liệu cũ (giữ lại header)
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }

      for (var i = 0; i < employees.length; i++) {
        var title = employees[i].getAttribute("title");
        if (title === selectedTitle) {
          var id   = employees[i].getAttribute("id");
          var name = employees[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
          var phone= employees[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue;

          var row = table.insertRow(-1);
          row.insertCell(0).innerHTML = id;
          row.insertCell(1).innerHTML = name;
          row.insertCell(2).innerHTML = phone;
        }
      }

      table.style.display = "table";
    }