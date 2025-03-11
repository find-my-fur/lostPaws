import express, { Request, Response } from 'express';

const apiRouter = express.Router();

apiRouter.get('/', async (req: Request, res: Response) => {
  res.status(200).json('success');
});

apiRouter.post('/', async (req: Request, res: Response) => {
  res.status(200).json('success');
});
