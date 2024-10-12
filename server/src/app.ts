import * as dotenv from 'dotenv';
import express, { json, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { connectDatabase } from './db/connect';

dotenv.config();

const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
  });

  return app;
};

async function bootstrap() {
  const app = await startServer();

  // middlewares
  app.use(json());
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(
    cors({
      origin: '*',
    }),
  );

  // global Error handler
  app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
    console.error(`Error ${err.message} | URL: ${req.url} | Method: ${req.method}`);
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  return app;
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
