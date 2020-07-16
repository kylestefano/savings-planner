import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";
import { createBudget } from "../actions/index.js";
import { bindActionCreators } from "redux";

class InputForm extends Component {
    constructor(props) {
      super(props);
      
        this.state = {
            incomeAmount: "",
            expenseCategoryOne: "",
            expenseAmountOne: "",
            expenseCategoryTwo: "",
            expenseAmountTwo: "",
            goalAmount: "",
        }
    }
   
    submitForm() {
        if (this.state.incomeAmount && this.state.goalAmount && this.state.expenseCategoryOne && this.state.expenseAmountOne) {
            const budgetData = {
                incomeAmount: this.state.incomeAmount,
                expenses: [
                    {category: this .state.expenseCategoryOne,
                     amount: this.state.expenseAmountOne},
                    {category: this .state.expenseCategoryTwo,
                     amount: this.state.expenseAmountTwo}
                ],
                goalAmount: this.state.goalAmount,
            }
          this.props.createBudget(budgetData);

        } else alert("Please fill out income, expenses and goal");
      }


    renderForm(data) {
      return (
        <div>
       <form class="search-form">
         <div class="form-group">
         <Row className="mb-6 justify-content-md-center">

            <div class="input-group">
            <div className="justify-content-md-center">
                <h4 id="income-item" >Monthly Income ($):  </h4>
            </div>
            <div class= "col-md-4">
                <input type="number" id="income-input" class="form-control" placeholder="" onChange= {event => {this.setState({ incomeAmount: event.target.value })}}></input>
            </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div class="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div class= "col-md-4">
                <input type="text" id="category-input" class="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryOne: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div class= "col-md-2">
                <input type="number" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ expenseAmountOne: event.target.value })}}></input>
            </div>
            </div>
            
             
            <div class="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div class= "col-md-4">
                <input type="text" id="category-input" class="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryTwo: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div class= "col-md-2">
                <input type="number" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ expenseAmountTwo: event.target.value })}}></input>
            </div>
            </div>

                       
            
            <br></br>
            <br></br>
            <br></br>

            <div class="input-group">
            <div className="justify-content-md-center">
                <h4 id="savings-item" >Target Savings Amount ($):  </h4>
                </div>
            <div class= "col-md-4">
                <input type="number" id="item-input" class="form-control" placeholder="" value = {this.state.goal} onChange= {event => {this.setState({ goalAmount: event.target.value })}}></input>
                </div>
            </div>

        </Row>
        
                     
        </div>
            <button id="tag-submit" type="button" class="btn btn-dark" onClick= {this.submitForm.bind(this)}>Submit</button>
                     
       </form>
     </div>
      );
    }
  
    render() {
     
      return (
        <div>
          <Container>
            <Row className="mb-4 justify-content-md-center">
              <h3 id="form-title">Get Started With Your Budget</h3>
            </Row>
            <Row> {this.renderForm()} </Row>
          </Container>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createBudget }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
  