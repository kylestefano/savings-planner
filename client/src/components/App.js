import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";

import { Container } from "react-bootstrap";

import InputForm from "./InputForm";

const App = () => {
    return (
      <div>
        <Header />
        <Container id="app_view">
          <Switch>
            <Route exact path={"/"} component={InputForm} />
            
          </Switch>
        </Container>
      </div>
    );
  };
  
  export default App;