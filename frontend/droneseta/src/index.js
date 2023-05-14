import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MyRouter from './routes/MyRouter';

// Estilo geral
import "./assets/css/main.css";

// FontAwesome
// Todos os icons utilizados precisam ser adicionados aqui
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faDoorOpen);
library.add(faMagnifyingGlass);
library.add(faCartShopping);
library.add(faUser);
library.add(faCalendarDay);
library.add(faEyeSlash);
library.add(faBoxOpen);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faTicket);
library.add(faPaperPlane);
library.add(faCircleInfo);
library.add(faCashRegister);
library.add(faClock);
library.add(faShirt);
library.add(faChartPie);
library.add(faImages);
library.add(faPenToSquare);
library.add(faCircleXmark);

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
