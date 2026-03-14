import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, day, month, year, gender, currentDirection } = req.body;

    if (!year || !gender || !currentDirection) {
      return res.status(400).json({ error: "Thiếu dữ liệu đầu vào" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Thiếu GEMINI_API_KEY trên Vercel" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Bạn là chuyên gia phong thủy và kiến trúc nội thất.

Hãy phân tích phong thủy cho khách hàng với dữ liệu sau:
- Họ tên: ${fullName || ""}
- Ngày sinh: ${day || ""}/${month || ""}/${year}
- Giới tính: ${gender}
- Hướng nhà hiện tại: ${currentDirection}

Trả về DUY NHẤT JSON hợp lệ, không thêm markdown, không thêm giải thích ngoài JSON.

Cấu trúc JSON phải đúng như sau:
{
  "tongQuanBanMenh": {
    "namSinh": "string",
    "gioiTinh": "string",
    "nhomMenh": "string",
    "nhomHuongPhuHop": ["string"],
    "moTa": "string"
  },
  "danhGiaHuongNhaHienTai": {
    "huongNha": "string",
    "mucDo": "string",
    "moTa": "string",
    "goiYDieuChinh": "string"
  },
  "huongBep": {
    "huongDeXuat": ["string"],
    "mucDo": "string",
    "moTa": "string",
    "luuY": "string"
  },
  "huongBanTho": {
    "huongDeXuat": ["string"],
    "mucDo": "string",
    "moTa": "string",
    "luuY": "string"
  },
  "huongCuaChinh": {
    "huongDeXuat": ["string"],
    "mucDo": "string",
    "moTa": "string",
    "luuY": "string"
  },
  "huongNhaVeSinh": {
    "huongNenDat": ["string"],
    "huongNenTranh": ["string"],
    "mucDo": "string",
    "moTa": "string",
    "luuY": "string"
  },
  "mauSacChuDao": [
    {
      "tenMau": "string",
      "hex": "string",
      "yNghia": "string",
      "ungDung": "string"
    }
  ],
  "dinhHuongKhongGianSong": {
    "moTaTongQuan": "string",
    "goiYBoTri": ["string"]
  },
  "diemTongQuan": 0,
  "xepLoaiTongQuan": "string",
  "loiKhuyenChuyenGia": "string"
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      console.error("Gemini raw response:", text);

      return res.status(500).json({
        error: "Gemini không trả về JSON hợp lệ",
        raw: text,
      });
    }

    return res.status(200).json(parsed);
  } catch (error) {
    console.error("Gemini full error:", error);
    console.error("Gemini error message:", error?.message);
    console.error("Gemini error stack:", error?.stack);

    return res.status(500).json({
      error: "Không thể phân tích phong thủy bằng AI",
      details: error?.message || String(error),
    });
  }
}