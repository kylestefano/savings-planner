import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";

import { Container } from "react-bootstrap";

import InputForm from "./InputForm";
import BudgetPlanner from "./BudgetPlanner";


  


const App = () => {
    return (
      <div>
        <Header />
        <Container id="app_view">
          <Switch>
            <Route exact path={"/"} component={InputForm} />
            <Route path={"/budget/budgetPlanner"} component={BudgetPlanner} />

          </Switch>
        </Container>
      </div>
    );
  };
  
  export default App;