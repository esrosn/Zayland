import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import '../node_modules/tachyons/css/tachyons.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './Components';

const client = Client.buildClient({
  storefrontAccessToken: 'd178c1baf5dc2f134fd6bc13b1ce61fa',
  domain: 'zayland-store.myshopify.com',
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App client={client} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
