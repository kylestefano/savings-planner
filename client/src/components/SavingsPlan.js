import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";
import { getBudget } from "../actions/index.js";
import { bindActionCreators } from "redux";
import {Pie, Doughnut, Line} from 'react-chartjs-2';

let categories = [];

class SavingsPlan extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
          expenses: [],
          userId: localStorage.getItem('my_user_id'),
      }
    }

  
    componentDidMount() { 
  
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      };
      const userId = localStorage.getItem('my_user_id')
      
      if (!userId) {
        localStorage.setItem('my_user_id', getRandomInt(100000))
      };
      console.log("initial budget ", this.props.budget)
    
      this.props.getBudget(userId)
      
    }
  
    componentDidUpdate() {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      };
      const userId = localStorage.getItem('my_user_id')
      
      if (!userId) {
        localStorage.setItem('my_user_id', getRandomInt(100000))
      };
      
      console.log("new budget ", this.props.budget)
      
    //   this.props.getBudget(userId)
    }

    
    
    buildBudgetData() {
        
        console.log("this is this.props ", this.props)
            
      let graphDataRender = []
      let graphXAxisRender = []
      
      for (let i = 0; i < this.props.updatedBudget.graphXAxis.length; i++) {
        graphXAxisRender.push(this.props.updatedBudget.graphXAxis[i])
      }

      for (let i = 0; i < this.props.updatedBudget.graphData.length; i++) {
        graphDataRender.push(this.props.updatedBudget.graphData[i])
      }

    
  
      let budgetData = {
        labels: graphXAxisRender,
         //labels: this.props.budget.budget.data.expenses.map((category, index) => index),
        datasets: [{
          label: ["Savings Growth"],
          data: graphDataRender,
          // this.props.,
          fill: true,
          borderColor: "#1b42df",
          backgroundColor: "#36cf3c"
        }]
      }
      return budgetData;
    }
  
  
      
    renderGraph() {
      
      let data = this.props.budget;
      let budgetOptions = {
        title: {
        display: true,
        text: "Savings Timeline (Months)",
        fontSize:18
        },
        maintainAspectRatio: false,
        responsive: false
      }
      
      
        return <Line data={this.buildBudgetData()} options={budgetOptions} height={400} width={400} />;
      
    
    }
    
    

    toggleExpense(e) {
    //   if (this.props.budget.expenses) {
  
    //   console.log("this is the target ", e.target.value)

    let categories = this.state.expenses

      if (categories.includes(e.target.value)) {
        categories = categories.filter(category => category.category !== e.target.value)
        this.setState({expenses: categories}, () => {
            console.log("This is the state WE is looking for", this.state)
        })
        } else {
            categories.push({category: e.target.value})
            this.setState({expenses: categories}, () => {
                console.log("This is the state WE is looking for #2", this.state)
        })
        console.log(categories)

    }
  
    }

    submitState (e) {
        e.preventDefault()

        this.props.getBudget(this.state.userId, this.state.expenses)
    }
  
    renderChecklist() {
      
     
  
      let data = this.props;
  
    //   console.log("this would be our props ", data)
      
      
        return  (
                <div className="form-group">
                  
                  <div className="form-check">
                    <label className="form-check-label" >
                      <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[0].category} id="defaultCheck1" onChange={event => {this.toggleExpense(event)}}/>
                      {this.props.updatedBudget.budget.expenses[0].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[1].category} id="defaultCheck2" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[1].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[2].category} id="defaultCheck3" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[2].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[3].category} id="defaultCheck4" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[3].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[4].category} id="defaultCheck5" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[4].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[5].category} id="defaultCheck6" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[5].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[6].category} id="defaultCheck7" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[6].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[7].category} id="defaultCheck8" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[7].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[8].category} id="defaultCheck9" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[8].category}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.props.updatedBudget.budget.expenses[9].category} id="defaultCheck10" onChange={event => {this.toggleExpense(event)}}/>
                    <label className="form-check-label" >
                    {this.props.updatedBudget.budget.expenses[9].category}
                    </label>
                  </div>
                <br></br>
                  <button id="tag-submit" type="button" className="btn btn-dark" onClick={event => {this.submitState(event)}}>Submit</button>
                </div>
        )
      
    
    }
    
    
    render() {

      

      

      if(!this.props.updatedBudget) {
        return (
          <h2>Loading..</h2>
        )
      } else {
        console.log("this is updated x axis", this.props.updatedBudget.graphXAxis.length) 
      
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
            <div className="graph-header">
                <h3>Your Savings Plan</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                
                        <div className="savings-graph">
                            {this.renderGraph()}
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="checklist-header">
                            <br></br>
                            <h6>Select an expense to remove and see how your savings plan changes</h6>
                        </div>
                        <br></br>
                        <div className="expenses-checlist"></div>
                            {this.renderChecklist()}
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="savings-summary">
                            <h6 className="summary-text">With a monthly income of $<span className="income">{this.props.updatedBudget.budget.incomeAmount}</span>, and monthly expenses of $<span className="expences">{this.props.updatedBudget.expenseTotal}</span>, you will reach your savings goal of $<span className="goal">{this.props.updatedBudget.budget.goalAmount}</span> in <span className="months">{this.props.updatedBudget.monthsToSave}</span> months.</h6>
                        </div>
                    </div>
          
            </div>
        </div>
        
      );
      
      }
    }
  }
  
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators ( {getBudget}, dispatch);
    
  }
  
  function mapStateToProps(state) {
    return {
      budget: state.budget,
      updatedBudget: state.updatedBudget
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SavingsPlan);