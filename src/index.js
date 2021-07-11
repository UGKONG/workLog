import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: inherit;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html, body, #root, #App {
    width: 100%;
    height: 100%;
    position: relative;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  #root {
    padding: 20px;
  }
  button {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #eee;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    height: 2px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
