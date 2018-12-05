import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Drizzle conf
import { DrizzleProvider } from 'drizzle-react'
import Election from './contracts/Election.json';

import App from './App';
import { LoadingContainer } from 'drizzle-react-components'


const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545',
    },
  },
  contracts: [
    Election,
  ],
  polls: {
    accounts: 1500,
  },
  events: {},
};

// eslint-disable-next-line
ReactDOM.render((
  <DrizzleProvider options={options}>
    <LoadingContainer>
      <App />
    </LoadingContainer>
  </DrizzleProvider>
),
  document.getElementById('root')
);
