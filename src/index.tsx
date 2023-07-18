import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WhatssapProvider } from './contexts/WhatssapGlobalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <WhatssapProvider>
    <App />
  </WhatssapProvider>
);
