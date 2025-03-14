import express from 'express';
import { apiRouter } from './routers/apiRouter.ts';
import authenticateRouter from './routers/authenticateRouter.ts';
import cors from 'cors'
const PORT: number = 3000;

const app = express();


/**
 * handle parsing request body
 */
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
  preflightContinue: false,
}))
app.use(express.json()); //converts data brought in into Json format
app.use(express.urlencoded({ extended: true })); //ensures that there are header urls

app.use('/api', apiRouter);
app.use('/auth', authenticateRouter);

app.use((_req: express.Request, res: express.Response): void => {
  res
    .status(404)
    .json({ message: "This is not the page you're looking for..." });
  return;
});


app.use((err: express.ErrorRequestHandler, _req: express.Request, res: express.Response, _next: express.NextFunction): void => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
  return 
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
