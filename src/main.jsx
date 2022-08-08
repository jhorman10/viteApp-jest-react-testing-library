import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWordApp } from './HelloWordApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola, soy Goku!" subTitle="soy un subtitulo" name="juan perez"/> */}
    <CounterApp value={2} />
  </React.StrictMode>
);
