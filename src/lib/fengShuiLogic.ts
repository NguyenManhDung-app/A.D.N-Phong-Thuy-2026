export type Gender = "Nam" | "Nữ";
export type Direction = "Bắc" | "Nam" | "Đông" | "Tây" | "Đông Bắc" | "Tây Bắc" | "Đông Nam" | "Tây Nam";

export interface FormData {
  fullName: string;
  day: string;
  month: string;
  year: string;
  gender: Gender;
  currentDirection: Direction;
}

export interface FengShuiResult {
  tongQuanBanMenh: {
    namSinh: string;
    gioiTinh: string;
    nhomMenh: string;
    nhomHuongPhuHop: string[];
    moTa: string;
  };
  danhGiaHuongNhaHienTai: {
    huongNha: string;
    mucDo: string;
    moTa: string;
    goiYDieuChinh: string;
  };
  huongBep: {
    huongDeXuat: string[];
    mucDo: string;
    moTa: string;
    luuY: string;
  };
  huongBanTho: {
    huongDeXuat: string[];
    mucDo: string;
    moTa: string;
    luuY: string;
  };
  huongCuaChinh: {
    huongDeXuat: string[];
    mucDo: string;
    moTa: string;
    luuY: string;
  };
  huongNhaVeSinh: {
    huongNenDat: string[];
    huongNenTranh: string[];
    mucDo: string;
    moTa: string;
    luuY: string;
  };
  mauSacChuDao: {
    tenMau: string;
    hex: string;
    yNghia: string;
    ungDung: string;
  }[];
  dinhHuongKhongGianSong: {
    moTaTongQuan: string;
    goiYBoTri: string[];
  };
  diemTongQuan: number;
  xepLoaiTongQuan: string;
  loiKhuyenChuyenGia: string;
}

const DONG_TU_MENH_HUONG = ["Bắc", "Nam", "Đông", "Đông Nam"];
const TAY_TU_MENH_HUONG = ["Tây", "Tây Bắc", "Tây Nam", "Đông Bắc"];

// Simplified Quai Menh calculation for demo purposes
function calculateNhomMenh(year: number, gender: Gender): "Đông tứ mệnh" | "Tây tứ mệnh" {
  // A real implementation would use the specific formula summing digits of the lunar year.
  // For this demo, we'll use a simplified modulo logic to simulate the result.
  const sum = year.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  let reduced = sum;
  while (reduced > 9) {
    reduced = reduced.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  
  let quaiSo = 0;
  if (gender === "Nam") {
    quaiSo = 11 - reduced;
    if (quaiSo === 5) quaiSo = 2; // Nam 5 -> 2
  } else {
    quaiSo = 4 + reduced;
    if (quaiSo > 9) quaiSo -= 9;
    if (quaiSo === 5) quaiSo = 8; // Nữ 5 -> 8
  }

  // Đông tứ mệnh: 1, 3, 4, 9
  // Tây tứ mệnh: 2, 6, 7, 8
  const dongTu = [1, 3, 4, 9];
  return dongTu.includes(quaiSo) ? "Đông tứ mệnh" : "Tây tứ mệnh";
}

export function generateFengShuiAnalysis(data: FormData): FengShuiResult {
  const year = parseInt(data.year);
  const nhomMenh = calculateNhomMenh(year, data.gender);
  const isDongTuMenh = nhomMenh === "Đông tứ mệnh";
  
  const nhomHuongPhuHop = isDongTuMenh ? DONG_TU_MENH_HUONG : TAY_TU_MENH_HUONG;
  const nhomHuongKhongHop = isDongTuMenh ? TAY_TU_MENH_HUONG : DONG_TU_MENH_HUONG;
  
  const isCurrentGood = nhomHuongPhuHop.includes(data.currentDirection);
  
  let diemTongQuan = isCurrentGood ? 85 : 60;
  // Add some randomness based on year to make it feel personalized
  diemTongQuan += (year % 10);
  if (diemTongQuan > 98) diemTongQuan = 98;
  
  let xepLoaiTongQuan = "";
  if (diemTongQuan >= 85) xepLoaiTongQuan = "Rất phù hợp";
  else if (diemTongQuan >= 70) xepLoaiTongQuan = "Khá phù hợp";
  else if (diemTongQuan >= 50) xepLoaiTongQuan = "Cần tối ưu thêm";
  else xepLoaiTongQuan = "Không ưu tiên";

  return {
    tongQuanBanMenh: {
      namSinh: data.year,
      gioiTinh: data.gender,
      nhomMenh: nhomMenh,
      nhomHuongPhuHop: nhomHuongPhuHop,
      moTa: `Xét theo năm sinh ${data.year} và giới tính ${data.gender}, gia chủ thuộc ${nhomMenh}. Nhóm mệnh này mang năng lượng tương hợp mạnh mẽ với các hướng ${nhomHuongPhuHop.join(", ")}.`
    },
    danhGiaHuongNhaHienTai: {
      huongNha: data.currentDirection,
      mucDo: isCurrentGood ? "Rất phù hợp" : "Cần tối ưu",
      moTa: isCurrentGood 
        ? `Hướng ${data.currentDirection} là một trong những hướng đón khí tốt nhất cho ${nhomMenh}, giúp gia đạo bình an, công việc thuận lợi.`
        : `Hướng ${data.currentDirection} hiện tại chưa phải là hướng tối ưu nhất cho bản mệnh của bạn. Tuy nhiên, trong kiến trúc hiện đại, điều này hoàn toàn có thể hóa giải bằng cách bố trí công năng bên trong.`,
      goiYDieuChinh: isCurrentGood
        ? "Tiếp tục duy trì sự thông thoáng ở khu vực cửa chính để đón trọn vượng khí."
        : "Có thể ưu tiên điều chỉnh khu vực bếp, bàn thờ và bảng màu nội thất để tăng mức độ hài hòa, cân bằng lại năng lượng."
    },
    huongBep: {
      huongDeXuat: nhomHuongPhuHop.slice(0, 2),
      mucDo: "Quan trọng",
      moTa: "Bếp là nơi giữ lửa và tài lộc. Hướng bếp (hướng lưng người nấu) nên quay về hướng tốt của gia chủ.",
      luuY: "Tránh đặt bếp đối diện trực tiếp cửa chính hoặc cửa nhà vệ sinh để bảo vệ sức khỏe và tài vận."
    },
    huongBanTho: {
      huongDeXuat: [nhomHuongPhuHop[0], nhomHuongPhuHop[1]],
      mucDo: "Rất quan trọng",
      moTa: "Không gian thờ cúng cần sự trang nghiêm, tĩnh lặng. Bàn thờ nên tọa cát hướng cát.",
      luuY: "Không gian thờ cúng nên đặt tại khu vực yên tĩnh, tránh giao cắt mạnh với luồng di chuyển chính."
    },
    huongCuaChinh: {
      huongDeXuat: nhomHuongPhuHop,
      mucDo: "Quan trọng",
      moTa: "Cửa chính là nơi nạp khí chính cho toàn bộ ngôi nhà.",
      luuY: "Nếu cửa chính không hợp hướng, có thể dùng thảm trải sàn màu sắc tương sinh để hóa giải."
    },
    huongNhaVeSinh: {
      huongNenDat: nhomHuongKhongHop.slice(0, 2),
      huongNenTranh: nhomHuongPhuHop,
      mucDo: "Cần lưu ý",
      moTa: "Nhà vệ sinh mang tính thủy và uế khí, nên đặt ở các hướng xấu (tọa hung) để trấn áp hung khí.",
      luuY: "Luôn giữ nhà vệ sinh sạch sẽ, thông thoáng, có thể thêm cây xanh nhỏ để lọc khí."
    },
    mauSacChuDao: isDongTuMenh ? [
      { tenMau: "Xanh Lục", hex: "#10B981", yNghia: "Sinh sôi, phát triển", ungDung: "Dùng cho mảng tường nhấn hoặc cây xanh trang trí" },
      { tenMau: "Xanh Biển", hex: "#3B82F6", yNghia: "Trí tuệ, bình an", ungDung: "Phù hợp cho rèm cửa, sofa hoặc thảm trải sàn" },
      { tenMau: "Đen", hex: "#1F2937", yNghia: "Quyền lực, vững chắc", ungDung: "Điểm xuyết ở các chi tiết kim loại, khung cửa" }
    ] : [
      { tenMau: "Vàng Đất", hex: "#F59E0B", yNghia: "Ổn định, bao dung", ungDung: "Màu sơn tường nền hoặc gạch lát sàn" },
      { tenMau: "Trắng", hex: "#F3F4F6", yNghia: "Tinh khiết, khởi đầu", ungDung: "Màu chủ đạo cho trần và tường giúp mở rộng không gian" },
      { tenMau: "Xám Bạc", hex: "#9CA3AF", yNghia: "Hiện đại, tinh tế", ungDung: "Sử dụng cho đồ nội thất, thiết bị bếp" }
    ],
    dinhHuongKhongGianSong: {
      moTaTongQuan: "Phong thủy hiện đại không chỉ là hướng, mà là sự tổ chức luồng khí, ánh sáng và công năng hợp lý. Dưới góc độ kiến trúc và nội thất, không gian của bạn cần sự cân bằng giữa tĩnh và động.",
      goiYBoTri: [
        "Nếu mặt bằng cho phép, nên tổ chức khu bếp theo hướng hỗ trợ tốt hơn cho bản mệnh để cân bằng năng lượng cho toàn bộ nhà.",
        "Khu sinh hoạt chung nên dùng bảng màu nền sáng dịu để tạo cảm giác rộng, thoáng và ổn định.",
        "Đảm bảo trục đón khí từ cửa chính không bị cản trở bởi đồ nội thất lớn.",
        "Nếu đang chuẩn bị xây mới, nên tích hợp phân tích phong thủy ngay từ giai đoạn bố trí mặt bằng để tối ưu hiệu quả tổng thể."
      ]
    },
    diemTongQuan,
    xepLoaiTongQuan,
    loiKhuyenChuyenGia: "Phong thủy là một lớp tham chiếu để tối ưu không gian sống, không tách rời công năng, thẩm mỹ, vật liệu và khả năng thi công. Hãy để đội ngũ kiến trúc sư của chúng tôi giúp bạn hiện thực hóa những định hướng này thành một bản thiết kế hoàn chỉnh."
  };
}
