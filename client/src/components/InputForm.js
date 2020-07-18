import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
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
      expenseCategoryThree: "",
      expenseAmountThree: "",
      expenseCategoryFour: "",
      expenseAmountFour: "",
      expenseCategoryFive: "",
      expenseAmountFive: "",
      expenseCategorySix: "",
      expenseAmountSix: "",
      expenseCategorySeven: "",
      expenseAmountTSeven: "",
      expenseCategoryEight: "",
      expenseAmountEight: "",
      expenseCategoryNine: "",
      expenseAmountNine: "",
      expenseCategoryTen: "",
      expenseAmountTen: "",
      goalAmount: "",
    }
  }
  
  submitForm() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
    const userId = localStorage.getItem('my_user_id')
    
    if (!userId) {
      localStorage.setItem('my_user_id', getRandomInt(100000))
    };
        if (this.state.incomeAmount && this.state.goalAmount && this.state.expenseCategoryOne && this.state.expenseAmountOne) {
            const budgetData = {
                incomeAmount: this.state.incomeAmount,
                expenses: [
                    {category: this.state.expenseCategoryOne, amount: this.state.expenseAmountOne},
                    {category: this.state.expenseCategoryTwo, amount: this.state.expenseAmountTwo},
                    {category: this.state.expenseCategoryThree, amount: this.state.expenseAmountThree},
                    {category: this.state.expenseCategoryFour, amount: this.state.expenseAmountFour},
                    {category: this.state.expenseCategoryFive, amount: this.state.expenseAmountFive},
                    {category: this.state.expenseCategorySix, amount: this.state.expenseAmountSix},
                    {category: this.state.expenseCategorySeven, amount: this.state.expenseAmountSeven},
                    {category: this.state.expenseCategoryEight, amount: this.state.expenseAmountEight},
                    {category: this.state.expenseCategoryNine, amount: this.state.expenseAmountNine},
                    {category: this.state.expenseCategoryTen, amount: this.state.expenseAmountTen},
                ],
                goalAmount: this.state.goalAmount,
                userId: userId,
            }
          this.props.createBudget(budgetData, () => {
            
            this.props.history.push(`/budget/budgetPlanner`);

          });
            console.log(budgetData)
        } else alert("Please fill out income, expenses and goal");
      }


    renderForm(data) {
      return (
        <div>
       <form className="search-form">
         <div className="form-group">
         <Row className="mb-6 justify-content-md-center">

            <div className="input-group">
            <div className="justify-content-md-center">
                <h4 id="income-item" >Monthly Income ($):  </h4>
            </div>
            <div className= "col-md-4">
                <input type="number" id="income-input" className="form-control" placeholder="" onChange= {event => {this.setState({ incomeAmount: event.target.value })}}></input>
            </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryOne: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number"  id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountOne: event.target.value })}}></input>
            </div>
            </div>
            
             
            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryTwo: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountTwo: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryThree: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountThree: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryFour: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountFour: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryFive: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountFive: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategorySix: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountSix: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategorySeven: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountSeven: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryEight: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountEight: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryNine: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountNine: event.target.value })}}></input>
            </div>
            </div>


            <div className="input-group">
            <div>
                <h4 id="expense-item" >Expense:  </h4>
            </div>
            <div className= "col-md-4">
                <input type="text" id="category-input" className="form-control" placeholder="e.g. Mortgage, Loan, Utilities, Cell Phone, etc" onChange= {event => {this.setState({ expenseCategoryTen: event.target.value })}}></input>
            </div>
            <div>
                <h4 id="expense-amount" >Amount ($):  </h4>
            </div>
            <div className= "col-md-2">
                <input type="number" id="amount-input" className="form-control" placeholder="" defaultValue= "0" onChange= {event => {this.setState({ expenseAmountTen: event.target.value })}}></input>
            </div>
            </div>

                       
            
            <br></br>
            <br></br>
            <br></br>

            <div className="input-group">
            <div className="justify-content-md-center">
                <h4 id="savings-item" >Target Savings Amount ($):  </h4>
                </div>
            <div className= "col-md-4">
                <input type="number" id="item-input" className="form-control" placeholder="" value = {this.state.goal} onChange= {event => {this.setState({ goalAmount: event.target.value })}}></input>
                </div>
            </div>

        </Row>
        
                     
        </div>
        
            <button id="tag-submit" type="button" className="btn btn-dark" onClick= {this.submitForm.bind(this)}>Submit</button>
        

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
  