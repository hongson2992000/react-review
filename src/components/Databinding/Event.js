import React, { Component } from 'react'

export default class Event extends Component {


    handleShowMessage =(message)=>{
        alert(message)
    }
    render() {

        let message ="Hello Son"
        return (
            <div >

                {/* Truyền giá trị k có đóng mở ngoặc */}
                {/* <button onClick={this.handleShowMessage.bind(this,message)}>Show message</button> */}
                
                <button onClick={()=>this.handleShowMessage(message)}></button>
            </div>
        ) 
    }
}
