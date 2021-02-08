import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        let {dt}=this.props;
        return (
            <div className="card col-4" >
            <img className="card-img-top" src={dt.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{dt.tenSP}</h4>
              <p className="card-text">{dt.giaBan}</p>
              <button className="btn btn-danger" onClick={()=>this.props.xemSanPham(dt)}>Xem Chi Tiet</button>
            </div>
          </div>
        );
    }
}

export default SanPham;