function loadXML() {
      var xhr;

      // Tạo đối tượng XMLHttpRequest
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); // Trình duyệt hiện đại
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP"); // IE cũ
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          displayData(xhr.responseXML);
        }
      };

      xhr.open("GET", "cd_catalog.xml", true);
      xhr.send();
    }

    function displayData(xml) {
      var cds = xml.getElementsByTagName("CD");
      var table = document.getElementById("cdTable");

      // Xóa các hàng cũ (giữ lại header)
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }

      // Duyệt qua từng CD và thêm hàng vào bảng
      for (var i = 0; i < cds.length; i++) {
        var artist = cds[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
        var title  = cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = artist;
        cell2.innerHTML = title;
      }

      table.style.display = "table";
    }