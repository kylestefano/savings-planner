import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";
import { getBudget, updateBudget } from "../actions/index.js";
import { bindActionCreators } from "redux";
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
import {Pie, Doughnut, Line} from 'react-chartjs-2';


// styling imports
import "../index.css";


class BudgetPlanner extends Component {

  constructor(props) {
    super(props);
    this.renderExpenses = this.removeExpenses.bind(this);
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
    
    console.log("these are the props we want ", this.props);

    // this.renderChart();
  }

  // componentDidUpdate() {
  //   function getRandomInt(max) {
  //     return Math.floor(Math.random() * Math.floor(max));
  //   };
  //   const userId = localStorage.getItem('my_user_id')
    
  //   if (!userId) {
  //     localStorage.setItem('my_user_id', getRandomInt(100000))
  //   };
  //   this.props.updateBudget(userId)
  // }


  buildBudgetData() {

    // if (this.props.budget.expenses) {
    
    // console.log("expense data ", this.props.budget);
    
    // let savingsGoal = this.props.budget.goalAmount;
    // let monthlyAmount = this.calculateMonthlySavings()
    // let monthsToSave = (savingsGoal / this.calculateMonthlySavings())
    // console.log ("months to hit goal is ", monthsToSave)
    
    let graphData = []
    let graphXAxis = []
         
    // for (var j = 0; j < (monthsToSave + 1); j++) {
    //     let graphLine = (monthlyAmount * j)
    //     graphData.push(graphLine)
    //     graphXAxis.push(j)
    //     }


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


  // calculateMonthlySavings() {
    // let income = this.props.budget.incomeAmount;
    // let savingsGoal = this.props.budget.goalAmount;

    // // console.log("income is ", income)
    // // console.log("goal is ", savingsGoal)
    
    // let expenseTotal = 0;
    // for (var i = 0; i < this.props.budget.expenses.length; i++) {
    //       let expenseAmount = Number(this.props.budget.expenses[i].amount)
    //       if (expenseAmount > 0) {
    //         expenseTotal += expenseAmount;
    //       }
    //     }
    //     // debugger
    //     // console.log("total of expenses ", expenseTotal)

    // let cashToSave = (income - expenseTotal)
    // // console.log("cash to save ", cashToSave)
     
    // return cashToSave
  // }

  

   

  renderGraph() {
    if (this.props.budget.expenses) {
    let data = this.props.budget;
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
  }
  
 
  removeExpenses(e) {
    if (this.props.budget.expenses) {

    console.log("this is the target ", e.target.value)
    e.preventDefault()
    let category = e.target.value
    let newData = this.props.budget.expenses.filter(expenses => expenses.category !== category )
    this.props.updateBudget(newData, () => {
      console.log('hello')
    })
  }
  }

  renderChecklist() {
    
    // function functionTest() {
    //   console.log("this was checked")
    // }    
    console.log("line 164", this.props.budget)
    
    if (this.props.budget.expenses) {

    let data = this.props;

    console.log("this would be our props ", data)
    
    if (data) {
      return  (
              <div className="form-group">
                <h1>Hello World</h1>
                <div className="form-check">
                  <label className="form-check-label" >
                    <input className="form-check-input" type="checkbox" value={this.props.budget.expenses[0].category} id="defaultCheck1" onChange={this.removeExpenses} />
                    {this.props.budget.expenses[0].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[1].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[2].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[3].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[4].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[5].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck7" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[6].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck8" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[7].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck9" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[8].category}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck10" />
                  <label className="form-check-label" >
                    {this.props.budget.expenses[9].category}
                  </label>
                </div>
              </div>
      )
    } else {
      return <h5>Loading....</h5>
    }
  } else {
    return <h1>why am I returned?</h1>
  }
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
        {/* <h3>Cash Flow</h3> */}
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="graph-header text-center">
               <h3>Savings Plan</h3>
              </div>
              <div className="savings-graph text-center" align="center">
               {this.renderGraph()}
              </div>
            </div>
            <div className="col-sm">
              <div className="checklist-header">
               <h6>Select an expense to remove and see how your savings plan changes</h6>
              </div>
              <div className="expenses-checlist"></div>
                {this.renderChecklist()}
            </div>
          </div>
          <div className="row">
            <div className="savings-summary">
              <h6>With an income of {this.props.budget.incomeAmount}, and monthly expenses of {}, you will reach your savings goal of {} in {} months.</h6>
            </div>
          </div>
        
         </div>
    </div>
      
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators ( {getBudget, updateBudget}, dispatch);
  
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPlanner);
