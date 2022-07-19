import React from 'react';
import ReactDOM from 'react-dom';
import InfinityScroll from './Body/무한스크롤/InfinityScroll';
import reportWebVitals from './reportWebVitals';
import App from './Search/info-json';
import TagBox1 from './Search/TagBox1';
import Hole from './전체/통합 copy';
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
