const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "dao hong son",
      soDienThoai: "0344656937",
      email: "hongson@gmail.com",
    },
  ],
};
export const QuanLiSinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN":
      {
        //thêm dử liệu sinh viên vào mangSinhVien
        const mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
        state.mangSinhVien = mangSVUpdate;
        return { ...state };
      };
      break;
    default: {
      return { ...state };
    }
  }
};
