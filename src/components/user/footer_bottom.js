import React, { Component } from 'react';
export default class FooterBottom extends Component{
  render(){
    return(
      <div className="footer-bottom light-text" style={{backgroundColor: '#28282c', textAlign: 'center'}}>
        <div className="container" style={{ padding: 0}}>
          &copy; Copyright 2019 - Mo Bikes Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    );
  }
}
