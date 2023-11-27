import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './contextApi/ContextShare';
import TokenAuth from './contextApi/TokenAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <ContextShare>
   <TokenAuth> <App/></TokenAuth>
   </ContextShare>
    </BrowserRouter>
  </React.StrictMode>
);

