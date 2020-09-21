import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './common/Header';
import Login from './login/Login';
// import UsersContainer from './userPlaceholder/user';
import SignUp from './signup/SignUp';

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/users" component={UsersContainer} /> */}
        <Route exact path="/login" component={Login} />
        <Route path="*"></Route> 404 no match
      </Switch>
    </Router>
  );
}

export default App;
