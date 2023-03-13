import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authorRouter from '../router/author';
import bookRouter from '../router/book';

const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/author', authorRouter);
  app.use('/book', bookRouter);
  // app.use('/author', authorRouter);
  // app.use('/book', bookRouter);

  return app;
}

export default createServer;
