import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Navbar from './component/navbar';
import Header from './component/header';
import Definition from './component/definition';
import Testimonials from './component/testimonials';
import POV from './component/pov';
import Resource from './component/resources';
import Help from './component/help';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Definition />
    <Testimonials />
    <POV />
    <Resource />
    <Help />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
