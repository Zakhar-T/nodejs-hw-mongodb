import express from 'express';
import pino from 'pino';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT);

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

  app.listen(PORT, (error) => {
    if (error) {
      throw new Error(error);
    }

    console.log(`Server is running on port ${PORT}`);
  });
};
