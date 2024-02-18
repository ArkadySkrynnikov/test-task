import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </>
);
