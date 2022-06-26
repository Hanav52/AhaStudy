import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Footer from './Footer/footer';
import reportWebVitals from './reportWebVitals';
import IndexMain from './Body/indexMain';
import SideBar from './SideBar/SideBarMenu';
import GongMuWon from './공무원/공무원';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GongMuWon/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
