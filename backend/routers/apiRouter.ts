import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/', async (req: express.Request, res: express.Response) => {
  res.status(200).json('success');
  return
});

apiRouter.post('/', async (req: express.Request, res: express.Response) => {
  res.status(200).json('success');
});

export default apiRouter;
