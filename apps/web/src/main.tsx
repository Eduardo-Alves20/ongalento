import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@ongalento/ui';
import type { ExampleType } from '@ongalento/types';
import './styles.css';

const example: ExampleType = {
  id: 'web-app',
  createdAt: new Date(),
};

const App = () => (
  <main>
    <h1>Ongalento Web</h1>
    <p>
      Example from shared types: <strong>{example.id}</strong>
    </p>
    <Button label="Click me" onClick={() => alert('Hello from UI package!')} />
  </main>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
