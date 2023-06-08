import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header_again';
import BlogList from './map.js';
import Footer from './Footer';
import data from './data';
import { List } from './map.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    {List}
    <Footer></Footer>
  </div>
);
//cleaned yayyyy
//EXCEPT THE NIRVANA PICTURE and maybe some general styling stuff

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
