import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/assets/styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

if (import.meta.env.MODE === 'development') {
  import('./tests/mocks/browser').then(({ worker }) => {
    // Start the worker.
    worker.start();
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
