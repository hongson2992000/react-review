import React, { Component } from "react";

export default class Demoif extends Component {
  constructor(props) {
    super(props);
    //this.state là thuộc tính có sẵn của component, chứa các thuộc tính có khả năng thya đổi bởi 1 sự kiện nào đó của component
    this.state = {
        isLogin : false,
        userName:""
        

    };
  }
  //thuoc tinh
  isLogin = false;
  userName = "";

  login = () => {
    //this.setState(): là phương thức kế thừa từ class component=> thya đổi giá trị state và gọi hàm render=> render lại giao diện
    //setState là 1 phương thức bất đồng bộ
    this.setState({
        isLogin:true,
        userName:"Son"
    },()=>{
        console.log(this.state)
    })
  };
  logout = ()=>{
      this.setState({
          isLogin:false,
          userName:""
      })
  }
  //   renderContent =()=>{
  //       if(this.isLogin)//islogin ===true
  //       {
  //           return(
  //               <div>Hello Son<button>Login</button></div>

  //           )
  //       }
  //       return(
  //           <div>Son</div>)
  //   }
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            Hello Son<button onClick={this.logout}>Logout</button>
          </div>
        ) : (
          <button onClick={this.login}>Login</button>
        )}
      </div>
    );
  }
}
