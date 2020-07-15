import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";

import { Container } from "react-bootstrap";

import InputForm from "./InputForm";
import BudgetPlanner from "./BudgetPlanner";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};
  
const userId = localStorage.getItem('my_user_id')

if (!userId) {
  localStorage.setItem('my_user_id', getRandomInt(100000))
};

const App = () => {
    return (
      <div>
        <Header />
        <Container id="app_view">
          <Switch>
            <Route exact path={"/"} component={InputForm} />
            <Route path={"/events/:budgetId"} component={BudgetPlanner} />

          </Switch>
        </Container>
      </div>
    );
  };
  
  export default App;