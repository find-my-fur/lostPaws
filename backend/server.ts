import express from 'express';
import { apiRouter } from './routers/apiRouter.ts';
import authenticateRouter from './routers/authenticateRouter.ts';
import cookieParser from 'cookie-parser';
const PORT: number = 3000;

const app = express();

/**
 * handle parsing request body
 */
app.use(cookieParser());
app.use(express.json()); //converts data brought in into Json format
app.use(express.urlencoded({ extended: true })); //ensures that there are header urls

app.use('/api', apiRouter);
app.use('/auth', authenticateRouter);

app.use((req: express.Request, res: express.Response): void => {
  res
    .status(404)
    .json({ message: "This is not the page you're looking for..." });
  return;
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
