import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';

const PORT = getEnvVar('PORT');

export const setupServer = () => {
  const app = express();

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(cors());

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.get('/students', (req, res) => {
    res.json({
      message: 'List of students',
    });
  });

  app.use('', (req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, (error) => {
    if (error) {
      throw new Error(error);
    }
    console.log(`Server is running on port ${PORT}`);
  });
};
