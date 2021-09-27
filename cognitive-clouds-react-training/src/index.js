import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import List from './list.js';
import GroceryList from './grocerylist';
import UserForm from './UserForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/grocery">GroceryList</Link>
            </li>
            <li>
              <Link to="/userform">UserForm</Link>
            </li>
          </ul>
        </nav>
      <Switch>
          <Route exact path = "/" component = {List} /> 
         <Route path = "/list"  component = {List} />
         <Route path = "/grocery" component = {GroceryList} />
         <Route path = "/userform" component = {UserForm} />
      </Switch>
      </div>
   </Router>
  </React.StrictMode>,
  
  document.getElementById('main')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
