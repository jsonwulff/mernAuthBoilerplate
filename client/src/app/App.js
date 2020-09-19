import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux"
import store from "../store"

import Header from "./common/Header"
import AuthLogin from "./auth/AuthLogin"
import UsersContainer from "./userPlaceholder/user"
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Header />
        <Switch>
          <UsersContainer />
          {/* <Route exact path="/login" component={AuthLogin} />
          <Route path="*"></Route> 404 no match */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
