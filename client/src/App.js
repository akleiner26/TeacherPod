import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/login";
import Messages from "./components/Messages/messages";
import Signup from "./components/Signup/signup";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Profile from "./components/Profile/profile";
import FAQ from "./components/FAQ/faq";
import Notifications from "react-notify-toast";

function App() {
  return (
    <>
    <Notifications options={{zIndex: 2000, top: "50px"}}/>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
