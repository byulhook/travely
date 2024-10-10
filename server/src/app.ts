import * as dotenv from 'dotenv';
import express, { json, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  //! DB 연결 함수 호출은 여기에 추가해주세요
  // await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
};

async function bootstrap() {
  const app = await startServer();

  app.use(json());
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(json());
  app.use(
    cors({
      origin: '*',
    }),
  );

  //! 테트용 라우터
  app.get('/', (_req, res) => {
    res.send('test server hello world');
  });

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
