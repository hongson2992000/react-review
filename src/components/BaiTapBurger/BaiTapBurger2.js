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
    let { menu } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return <tr key={index}>
          <td>{propsMenu}</td>
          <td></td>
          <td>{price}</td>
      </tr>;
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
          <div className="col-4">
            <h3>Menu</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Mon </th>
                  <th>So Luong</th>
                  <th>Don Gia</th>
                </tr>
              </thead>
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
export default connect(mapStateToProps, null)(BaiTapBurger2);
