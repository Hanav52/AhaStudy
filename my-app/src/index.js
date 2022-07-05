import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import SignUp from './Login&Register/Register';
import Hole from './전체/통합 copy';
import SignIn from './Login&Register/Login copy';
import Join from './Login&Register/Join';
import Test from './Login&Register/test';
import Users from './Login&Register/ttest';
import RealMain from './Body/BodyImage';
ReactDOM.render(
  <React.StrictMode>
    <Hole/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
