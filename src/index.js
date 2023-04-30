import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'; // Login sayfasını import edin
import reportWebVitals from './reportWebVitals';
import Dashboard from './components/Dashboard';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Login sayfasını render edin */}

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
