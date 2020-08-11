import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./components/Login/login"
import Logout from "./components/Logout/logout"
import Messages from "./components/Messages/messages"
import Signup from "./components/Signup/signup"
import Home from "./components/Home/home"

function App() {
  return (
 <Router>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/signup" component={Signup} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/logout" component={Logout} />
     <Route exact path="/messages" component={Messages} />
   </Switch>
 </Router>
  );
}

export default App;
