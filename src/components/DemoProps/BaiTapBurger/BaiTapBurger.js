import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";

class BaiTapBurger extends Component {
  renderBreadMid = () => {
    // console.log(this.props.burger);
    let { burger } = this.props;
    let content = [];
    for (let propBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propBurger]; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>);
      }
      content.push(breadMid);
    }
    return content;

    // return Object.entries(burger).map(([propBurger, value], index) => {
    //   let breadMid = [];
    //   for (let i = 0; i < value; i++) {
    //     breadMid.push(<div key={index} className={propBurger}></div>);
    //   }
    //   return breadMid;
    // });
  };
  renderMenu = () => {
    //Lấy prop từ redux về
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propMenu}</td>
          <td>
            <button
              onClick={() => {
                this.props.addBreadMid(propMenu, 1);
              }}
              className="btn btn-danger"
            >
              +
            </button>
            {burger[propMenu]}
            <button
              onClick={() => {
                this.props.addBreadMid(propMenu, -1);
              }}
              className="btn btn-success"
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propMenu] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Bai Tap Burger</h1>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh HemBurger</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>Thức ăn</tr>
                <tr></tr>
                <tr>Đơn Giá</tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tổng cộng</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      //Tạo ra action
      const action = {
        type: "ADD_BREADMID",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);
