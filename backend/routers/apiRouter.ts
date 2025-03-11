import express, { Request, Response } from 'express';
import { apiController } from '../controllers/apiController.ts';

//any routes to api will be handled here
export const apiRouter = express.Router();

//handles retrieval of data from our API
apiRouter.get(
  '/',
  apiController.getPets,
  async (req: Request, res: Response) => {
    res.status(200).json('success');
  }
);

//handles updating any data to our database
apiRouter.post(
  '/',
  apiController.updatePets,
  async (req: Request, res: Response) => {
    res.status(200).json('success');
  }
);
