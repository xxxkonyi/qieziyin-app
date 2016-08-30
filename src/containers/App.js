import "react-mdl/extra/css/material.green-deep_purple.min.css";
import "../components/css/qieziyin.css";
import "react-mdl/extra/material.js";
import React from "react";
import NavigationLayout from "../components/Layout/NavigationLayout";
import Home from "./Home";

export default React.createClass({
  render() {
    return (
      <div>
        <NavigationLayout children={this.props.children || <Home/>}/>
      </div>
    )
  }
})
