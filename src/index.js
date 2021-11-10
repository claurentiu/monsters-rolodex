import React from 'react'; //main library of react
import ReactDOM from 'react-dom'; //web related application (react-native for mobile apps)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//StrictMode - warning for deprecated

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
