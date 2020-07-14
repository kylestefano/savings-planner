import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";

class InputForm extends Component {
    constructor(props) {
      super(props);
    }
  
   
  
    renderForm(data) {
      return (
        <div>
       <form class="search-form">
         <div class="form-group">
         <Row className="mb-6 justify-content-md-center">

            <div class="input-group">
            <div className="justify-content-md-center"><h4 id="income-item" >Monthly Income:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>
            
             
            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>

            <div class="input-group">
            <div><h4 id="expense-item" >Expense:  </h4></div>
            <div class= "col-md-4"><input type="text" id="item-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            <div><h4 id="expense-amount" >Amount:  </h4></div>
            <div class= "col-md-2"><input type="text" id="amount-input" class="form-control" placeholder="" onChange= {event => {this.setState({ search: event.target.value})}}></input></div>
            </div>
        </Row>
                     
        </div>
            <button id="search-button" type="button" class="btn btn-dark" onClick= {event=> {this.handleClickEvent(event)}}>Submit</button>
                     
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
    
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
  