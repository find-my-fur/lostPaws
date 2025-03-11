import express, { Request, Response } from 'express';
import { authenticationController } from '../controllers/authenticationController';

//any authentication related steps will be handled here
export const authenticateRouter = express.Router();

//any request to authenticate will go through this route
authenticateRouter.get(
  '/',
  authenticationController.authenticate,
  async (req: Request, res: Response) => {
    res.status(200).json('success');
  }
);

//any request to signout will go here
authenticateRouter.post(
  '/',
  authenticationController.signOut,
  async (req: Request, res: Response) => {
    res.status(200).json('success');
  }
);
