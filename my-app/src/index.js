import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Real from './real';
import ProHeader from './사용 x/Header';
import Nav1 from './Nav1/Nav1';
import Nav2 from './Nav2/Nav2';
import Nav from './NavBody/Nav';
import Hole from './전체/통합 copy';
import Footer from './Footer/Footer';
import RealMain from './Body/BodyImage';
import BasicCard from './Body/test';
import Test from './Login&Register/test';
import App from './Login&Register/RRegister';
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
