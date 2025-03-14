import express from 'express';
// import path from 'path';
import { apiRouter } from './routers/apiRouter.ts';
import authenticateRouter from './routers/authenticateRouter.ts';
import cookieParser from 'cookie-parser';
// import { VercelRequest, VercelResponse } from '@vercel/node';

const PORT: number = 3000;

const app = express();

//server STATIC FILES FOR FRONTEND
// app.use(express.static(path.join(__dirname, '../dist'))); // This points to the dist directory
// console.log(path.join(__dirname, '../dist'));
/**
 * handle parsing request bodyve
 */
app.use(cookieParser());
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

// app.use((err: , _req: Request, res: Response, _next: NextFunction) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ): void => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);

    console.log(errorObj.log); // Log the error for debugging

    // Respond to the client with the error
    res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// export default (req: VercelRequest, res: VercelResponse) => {
//   app(req, res); // Handle each request using Express
// };
