import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let {sp,themGioHang}=this.props;
        return (
            <div className="card col-4 " >
            <div className="card">
            <img className="card-img-top" src={sp.hinhAnh} alt width={250} height={300} />
            <div className="card-body" style={{backgroundColor:"gray"}}>
              <h4 className="card-title">{sp.tenSP}</h4>
              <p className="card-text">{sp.giaBan}</p>
              <button className="btn btn-success" onClick={()=>this.props.xemChiTiet(sp)}>Xem Chi Tiet</button>
              <button className="btn btn-danger" style={{margin:"20px"}} onClick={()=>themGioHang(sp)}>Them San Pham</button>
            </div>
          </div>
        </div>
        )
    }
}

