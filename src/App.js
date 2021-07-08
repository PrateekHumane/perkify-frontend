import { AuthProvider } from "./Auth";
import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import Home from './Home';
import React from "react";
import Console from "./Console";
import Login from "./Login";
import SignUp from "./SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "./DashBoard";
import ManagePeople from "./ManagePeople";
import ManageGroups from "./ManageGroups";
import createGroup from "./CreateGroup";
import GettingStarted from "./gettingStarted";

function App() {
  return (
           <Home />
  );    
}

export default App;
