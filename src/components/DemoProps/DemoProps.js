import React, { Component } from 'react'
import data from "../../data/data.json";
// import SanPham_RFC from "./SanPham_RFC";
import SanPham_RCC from "./SanPham_RCC";

export default class DemoProps extends Component {
    constructor(props){
        super(props);
        this.state={
            mangPhim:data
        }
    }
    renderPhim =()=>{
        return this.state.mangPhim.map((phim,index)=>{
            return(
            <div className="col-4">key={index}
            {/* <SanPham_RFC phim_input={phim} /> */}
            <SanPham_RCC phim_input ={phim}/>
            </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhim()}
                </div>
               
            </div>
        )
    }
}
