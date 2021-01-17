import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import App from './App';
import { SpaceXProvider } from './store/SpaceXContext';

const rootElement = document.getElementById('root');

const state = window.__STATE__;
delete window.__STATE__;

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <SpaceXProvider data={state}>
        <App />
      </SpaceXProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <SpaceXProvider data={state}>
        <App />
      </SpaceXProvider>
    </React.StrictMode>,
    rootElement
  );
}


