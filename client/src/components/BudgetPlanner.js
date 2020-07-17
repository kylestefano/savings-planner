import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";
import { getBudget } from "../actions/index.js";
import { bindActionCreators } from "redux";
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
import {Pie, Doughnut} from 'react-chartjs-2';

// styling imports
import "../index.css";


class BudgetPlanner extends Component {

  constructor(props) {
    super(props);
  
  }

  componentDidMount() { 

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
    const userId = localStorage.getItem('my_user_id')
    
    if (!userId) {
      localStorage.setItem('my_user_id', getRandomInt(100000))
    };

    this.props.getBudget(userId)
    console.log("these are the props ", this.props);

    // this.renderChart();
  }

  buildBudgetData() {
    console.log("expense data ", this.props.budget.budget.data);
    let budgetData = {
      // labels: this.props.budget.budget.data.expenses.map((category, index) => index),
      datasets: [{
        label: "Expense Items",
        data: [65, 59, 80, 81, 56],
        // this.props.,
        fill: true,
        borderColor: "#1b42df",
        backgroundColor: "#36cf3c"
      }]
    }
    return budgetData;
  }

  
  
  render() {
    let budgetOptions = {
      title: {
      display: true,
      text: "Expenses",
      fontSize:30
      },
      maintainAspectRatio: false,
      responsive: false
    }
    console.log("hopefully data ", this.props)
    return (
      <div> 
        <h1>Hello World!</h1>
      
      <div>
        <Pie data={this.buildBudgetData()} options={budgetOptions} height={400} width={400} /> 
      </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ( {getBudget}, dispatch);
  
}

function mapStateToProps(state) {
  return {
    budget: state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPlanner);
