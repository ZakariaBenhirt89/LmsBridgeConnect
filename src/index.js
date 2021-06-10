import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import Example from "./components/Landing";
import Signup from "./components/forms/Signup";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Signup/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
