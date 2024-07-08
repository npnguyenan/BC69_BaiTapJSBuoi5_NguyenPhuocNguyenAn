// Bài tập quản lý tuyển sinh
function quanLyTuyenSinh() {
  let diemChuan = document.getElementById("txtDiemChuan").value;
  let doiTuongUuTien = document.getElementById("doiTuongUuTien").value;
  let khuVucUuTien = document.getElementById("khuVucUuTien").value;
  let diem1 = document.getElementById("txtDiem1").value;
  let diem2 = document.getElementById("txtDiem2").value;
  let diem3 = document.getElementById("txtDiem3").value;
  let tongDiem = 0;
  let ketQua = "";
  let thongBao = document.getElementById("txtKetQuaTuyenSinh");
  if (diemChuan >= 0 && diemChuan < 35) {
    if (diem1 >= 0 && diem1 <= 10) {
      if (diem2 >= 0 && diem2 <= 10) {
        if (diem3 >= 0 && diem3 <= 10) {
          tongDiem =
            diem1 * 1 +
            diem2 * 1 +
            diem3 * 1 +
            doiTuongUuTien * 1 +
            khuVucUuTien * 1;
          if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
            ketQua = "rớt";
            thongBao.innerHTML = `Tổng điểm là ${tongDiem}, có điểm liệt, thí sinh ${ketQua}`;
          } else if (tongDiem >= diemChuan) {
            ketQua = "đậu";
            thongBao.innerHTML = `Tổng điểm là ${tongDiem}, thí sinh ${ketQua}`;
          } else {
            ketQua = "rớt";
            thongBao.innerHTML = `Tổng điểm là ${tongDiem}, thí sinh ${ketQua}`;
          }
        } else {
          alert("Điểm môn thứ ba không hợp lệ");
        }
      } else {
        alert("Điểm môn thứ hai không hợp lệ");
      }
    } else {
      alert("Điểm môn thứ nhất không hợp lệ");
    }
  } else {
    alert("Điểm chuẩn không hợp lệ");
  }
  console.log(diem1);
}

// Bài tập tính tiền điện
function tinhTienDien() {
  let ten = document.getElementById("txtTenHoGiaDinh").value;
  let soKw = document.getElementById("txtKw").value * 1;
  let tongTien = 0;
  if (ten == "" || soKw == "") {
    alert("Không được để trống");
  } else {
    if (soKw < 0) {
      alert("Số Kw không hợp lệ");
    } else if (soKw >= 0 && soKw <= 50) {
      tongTien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
      tongTien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw > 100 && soKw <= 200) {
      tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw > 200 && soKw <= 350) {
      tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
      tongTien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
  }
  document.getElementById(
    "txtKetQuaTienDien"
  ).innerHTML = `Tiền điện của hộ gia đình ${ten} là ${tongTien} vnđ`;
}

// Vài tập tính thuế thu nhập cá nhận
function thuThuNhapCaNhan() {
  let hoTen = document.getElementById("txtHoTen").value;
  let tongThuNhap = document.getElementById("txtTongThuNhap").value * 1;
  let soNguoiPhuThuoc = document.getElementById("txtSoNguoiPhuThuoc").value * 1;
  let tienThue = 0;
  let thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
  if (hoTen == "") {
    alert("Vui lòng nhập họ tên");
  } else {
    if (tongThuNhap == "") {
      alert("Vui lòng nhập tổng thu nhập");
    } else {
      if (tongThuNhap < 4000000) {
        alert("Tổng thu nhập không hợp lệ");
      } else {
        if (soNguoiPhuThuoc < 0) {
          alert("Số người phụ thuộc không hợp lệ");
        } else {
          if (thuNhapChiuThue <= 60000000) {
            tienThue = thuNhapChiuThue * (5 / 100);
          } else if (
            thuNhapChiuThue > 60000000 &&
            thuNhapChiuThue <= 120000000
          ) {
            tienThue = thuNhapChiuThue * (10 / 100);
          } else if (
            thuNhapChiuThue > 120000000 &&
            thuNhapChiuThue <= 210000000
          ) {
            tienThue = thuNhapChiuThue * (15 / 100);
          } else if (
            thuNhapChiuThue > 210000000 &&
            thuNhapChiuThue <= 384000000
          ) {
            tienThue = thuNhapChiuThue * (20 / 100);
          } else if (
            thuNhapChiuThue > 384000000 &&
            thuNhapChiuThue <= 624000000
          ) {
            tienThue = thuNhapChiuThue * (25 / 100);
          } else if (
            thuNhapChiuThue > 624000000 &&
            thuNhapChiuThue <= 960000000
          ) {
            tienThue = thuNhapChiuThue * (30 / 100);
          } else {
            tienThue = thuNhapChiuThue * (35 / 100);
          }
        }
      }
    }
  }
  document.getElementById(
    "txtKetQuaThue"
  ).innerHTML = `Tiền thuế thu nhập cá nhân của ${hoTen} là ${tienThue} vnđ`;
}

// Bài tập tính tiền cáp
document.getElementById("loaiKhachHang").oninput = function () {
  if (document.getElementById("loaiKhachHang").value == "nd") {
    document.getElementById("txtSoKetnoi").disabled = true;
  }
  if (document.getElementById("loaiKhachHang").value == "dn") {
    document.getElementById("txtSoKetnoi").disabled = false;
  }
};
function tinhTienCap() {
  let maKh = document.getElementById("txtMaKhachHang").value;
  let loaiKh = document.getElementById("loaiKhachHang").value;
  let soKenhCaoCap = document.getElementById("txtSoKenhCaoCap").value * 1;
  let soKetnoi = document.getElementById("txtSoKetnoi").value * 1;
  let tongTien = 0;
  if (maKh == "") {
    alert("Vui lòng nhập mã khách hàng");
  } else {
    if (soKenhCaoCap < 0) {
      alert("Số kênh cao cấp không hợp lệ");
    } else {
      if (loaiKh == "dn") {
        if (soKetnoi < 0) {
          alert("Số kết nối không hợp lệ");
        } else {
          if (soKetnoi <= 10) {
            tongTien = 15 + 75 * soKetnoi + 50 * soKenhCaoCap;
          } else {
            tongTien = 15 + 75 * 10 + (soKetnoi - 10) * 5 + 50 * soKenhCaoCap;
          }
        }
      } else if (loaiKh == "nd") {
        tongTien = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
      }
    }
    document.getElementById(
      "txtTienCap"
    ).innerHTML = `Tổng tiền cáp là ${tongTien}$`;
  }
  console.log(soKenhCaoCap);
}
