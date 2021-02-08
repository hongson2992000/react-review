import React, { Component } from "react";
import "./BaiTapBurger.css";
import { connect } from "react-redux";
class BaiTapBurger2 extends Component {
  renderBurger = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propsBurger}></div>);
      }
      return breadMid;
    });

    //Cach 2
    // let content = [];

    // for (let propsBurger in burger) {
    //   let breadMid = [];
    //   for (let i = 0; i < burger[propsBurger]; i++) {
    //     breadMid.push(<div key={i} className={propsBurger}></div>);
    //   }
    //   content.push(breadMid);
    // }
    // return content;
  };

  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button className="btn btn-primary" onClick={()=>this.props.addBreadMid(propsMenu,1)}>+</button>
            {burger[propsMenu]}
            <button className="btn btn-primary" onClick={()=>this.props.addBreadMid(propsMenu,-1)}>-</button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Bai Tap Burger</h3>
        <div className="row">
          <div className="col-7">
            <h3>Burger</h3>
            <div className="breadTop"></div>
            {this.renderBurger()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3>Menu</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Mon </th>
                  <th>So Luong</th>
                  <th>Don Gia</th>
                  <th>Thanh Tien</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Total</td>
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
    addBreadMid: (propBurger, amount) => {
      const action = {
        type: "ADD_BREAD",
        propBurger,
        amount,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger2);
