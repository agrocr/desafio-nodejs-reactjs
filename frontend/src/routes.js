import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Person from "./pages/person";
import CreatePerson from "./pages/createPerson";
import UpdatePerson from "./pages/updatePerson";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/person/:id" component={Person} />
      <Route path="/create/person" component={CreatePerson} />
      <Route path="/update/person/:id" component={UpdatePerson} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
