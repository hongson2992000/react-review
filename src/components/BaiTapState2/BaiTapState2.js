import React, { Component } from "react";

export default class BaiTapState2 extends Component {
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
        {
          imgSource = "./img/imgRedCar.jpg";
        };
        break;
      case "silver":
        {
          imgSource = "./img/imgSilverCar.jpg";
        };
        break;
      case "black":
        {
          imgSource = "./img/imgBlackCar.jpg";
        };
        
    }

    this.setState({
      img: imgSource,
    });
  };
  render() {
    const styleButton = {
      color: "#fff",
      marginRight: "5px",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src={this.state.img} width={400} height={200} />
          </div>
          <div className="col-md-5">
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
              className="btn"
              style={{ color: "#fff", background: "blue" }}
            >
              Black Color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
