import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";
import { getBudget } from "../actions/index.js";
import { bindActionCreators } from "redux";
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
import {Pie, Doughnut, Line} from 'react-chartjs-2';

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
    console.log("expense data ", this.props.budget.budget.data.expenses[0].category);
    let budgetData = {
      labels: ["0", "1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12"],
       //labels: this.props.budget.budget.data.expenses.map((category, index) => index),
      datasets: [{
        label: ["Savings Timeline"],
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        // this.props.,
        fill: true,
        borderColor: "#1b42df",
        backgroundColor: [
          "#696565",

          ],
      }]
    }
    return budgetData;
  }

  renderGraph() {
    let data = this.props.budget.budget.data;
    let budgetOptions = {
      title: {
      display: true,
      text: "Expenses",
      fontSize:20
      },
      maintainAspectRatio: false,
      responsive: false
    }
    
    if (data) {
      return <Line data={this.buildBudgetData()} options={budgetOptions} height={400} width={400} />;
    } else {
      return <h5>Loading....</h5>
    }
  }

  renderChecklist() {
    let data = this.props.budget.budget.data;

    if (data) {
      return  <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={this.props.budget.budget.data.expenses[0].category} />
              </Form.Group>
    } else {
      return <h5>Loading....</h5>
    }
  }

  
  
  render() {
    console.log("hopefully data ", this.props)
    return (
      <div> 
        <h3>Cash Flow</h3>
        <div class="container">
          <div class="row">
            <div class="col-sm">
               {this.renderGraph()}
            </div>
            <div class="col-sm">
              {this.renderChecklist()}
            </div>
          
        
          </div>
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
