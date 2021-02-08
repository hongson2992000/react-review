import React, { Component } from "react";

export default class ModelGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ maxWidth: "800px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Ma SP</td>
                    <td>Hình Ảnh</td>
                    <td>Tên SP</td>
                    <td>Số Lượng</td>
                    <td>Đơn Giá</td>
                    <td>Thành Tiền</td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGioHang, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGioHang.maSP}</td>
                        <td>
                          <img src={spGioHang.hinhAnh} width={30} height={50} />
                        </td>
                        <td>{spGioHang.tenSP}</td>
                        <td>
                          <button
                            onClick={() =>
                              tangGiamSoLuong(spGioHang.maSP, true)
                            }
                          >
                            +
                          </button>
                          {spGioHang.soLuong}
                          <button
                            onClick={() =>
                              tangGiamSoLuong(spGioHang.maSP, false)
                            }
                          >
                            -
                          </button>
                        </td>
                        <td>{spGioHang.giaBan}</td>
                        <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
                        <td>
                          {" "}
                          <button
                            className="btn btn-danger"
                            onClick={() => xoaGioHang(spGioHang.maSP)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <td colSpan="5"></td>
                  <td>Tong Tien</td>
                  <td>
                    {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                      return (tongTien += spGioHang.soLuong * spGioHang.giaBan);
                    }, 0)}
                  </td>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
