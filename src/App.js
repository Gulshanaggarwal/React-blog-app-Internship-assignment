import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/index";
import Login from "./Components/LoginRegister/login";
import Register from "./Components/LoginRegister/register";
import AuthProvider from "./Components/store/authProvider";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <div className="font-serif">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard" exact component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
