import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MyHeader from './pages/HeaderFooter/header';
import MyFooter from './pages/HeaderFooter/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyHeader />

    <MyFooter />
  </React.StrictMode>
);

