import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MyRouter from './routes/MyRouter';

import "./assets/css/main.css";     // Estilo geral

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

library.add(faDoorOpen)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
