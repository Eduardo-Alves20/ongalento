import express from 'express';
import type { ExampleType } from '@ongalento/types';

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (_req, res) => {
  const payload: ExampleType = {
    id: 'health-check',
    createdAt: new Date(),
  };

  res.json({ status: 'ok', payload });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on port ${port}`);
});
