import React, { Component } from "react";

export default class BaiTapCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgRedCar.jpg",
    };
  }

  changeColor = (color) => {
    let imgSource = "";
    switch (color) {
      case "red":
        imgSource = "./img/imgRedCar.jpg";
        break;
      case "silver":
        imgSource = "./img/imgSilverCar.jpg";
        break;

      default:
        imgSource = "./img/imgBlackCar.jpg";
        break;
    }
    this.setState({
        img:imgSource
    })
  };

  

  render() {
    const styleButton = {
      color: "#fff",
      marginRight: "5px",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            {/* Hiển thị hình của xe */}
            <h3>Please your choose</h3>
            <img src={this.state.img} alt="" width={200} height={150} />
          </div>
          <div className="col-sm-5">
            <h3>Change Color</h3>
            <button
              onClick={() => this.changeColor("red")}
              className="btn btn-danger"
              style={styleButton}
            >
              Red Color
            </button>
            <button
              onClick={() => this.changeColor("silver")}
              className="btn btn-dark"
              style={styleButton}
            >
              Silver Color
            </button>
            <button
              onClick={() => this.changeColor("black")}
              className="btn btn-dark"
              style={{ color: "#fff", backgroundColor: "#000" }}
            >
              Black Color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
