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
    
    let savingsGoal = this.props.budget.budget.data.goalAmount;
    let monthlyAmount = this.calculateMonthlySavings()
    let monthsToSave = (savingsGoal / this.calculateMonthlySavings())
    console.log ("months to hit goal is ", monthsToSave)
    
    let graphData = []
    let graphXAxis = []
         
    for (var j = 0; j < (monthsToSave + 1); j++) {
        let graphLine = (monthlyAmount * j)
        graphData.push(graphLine)
        graphXAxis.push(j)
        }
  //  console.log("graph data is ", graphData)

    let budgetData = {
      labels: graphXAxis,
       //labels: this.props.budget.budget.data.expenses.map((category, index) => index),
      datasets: [{
        label: ["Savings Timeline"],
        data: graphData,
        // this.props.,
        fill: true,
        borderColor: "#1b42df",
        backgroundColor: [
          "#36cf3c",

          ],
      }]
    }
    return budgetData;
  }

  calculateMonthlySavings() {
    let income = this.props.budget.budget.data.incomeAmount;
    let savingsGoal = this.props.budget.budget.data.goalAmount;

    // console.log("income is ", income)
    // console.log("goal is ", savingsGoal)
    
    let expenseTotal = 0;
    for (var i = 0; i < this.props.budget.budget.data.expenses.length; i++) {
          let expenseAmount = Number(this.props.budget.budget.data.expenses[i].amount)
          if (expenseAmount > 0) {
            expenseTotal += expenseAmount;
          }
        }
        debugger
        // console.log("total of expenses ", expenseTotal)

    let cashToSave = (income - expenseTotal)
    // console.log("cash to save ", cashToSave)
     
    return cashToSave
  }

  renderGraph() {
    let data = this.props.budget.budget.data;
    let budgetOptions = {
      title: {
      display: true,
      // text: "Savings Timeline",
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

  // renderCheckbox() {
  //   for (var k = 0; k < this.props.budget.budget.data.expenses.length; k++) {
  //     let expenseAmount = Number(this.props.budget.budget.data.expenses[k].amount)
  //     if (expenseAmount > 0) {
  //       return <div class="form-check">
  //               <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  //               <label class="form-check-label" for="defaultCheck1">
  //                 {this.props.budget.budget.data.expenses[0].category}
  //               </label>
  //             </div>
  //     }
  //   }
  // }
  
  renderChecklist() {
    let data = this.props.budget.budget.data;

    if (data) {
      return  <div className="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[0].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[1].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[2].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[3].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[4].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[5].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[6].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[7].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[8].category}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    {this.props.budget.budget.data.expenses[9].category}
                  </label>
                </div>
              </div>
    } else {
      return <h5>Loading....</h5>
    }
  }

  
  
  render() {
    console.log("hopefully data ", this.props)
    return (
      <div> 
        <h3>Cash Flow</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm">
               {this.renderGraph()}
            </div>
            <div className="col-sm">
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
