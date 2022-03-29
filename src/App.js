import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Swiggy food delivery services</h1>
          <ul className="header">
            <li><a href="/orders">orders</a></li>
            <li><a href="/Menu">menu</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;