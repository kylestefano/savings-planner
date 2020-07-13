import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";

class Header extends Component {
  render() {
    
      return (
        <div id="header">
          
            <h4>Savings Planner</h4>
          
        </div>
      );
    
  }
}

function mapStateToProps(state) {
    
  }
  


export default connect(mapStateToProps)(Header);