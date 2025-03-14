import express from 'express';
import authenticationController from '../controllers/authenticationController.ts';

//any authentication related steps will be handled here
const authenticateRouter = express.Router();

//any request to authenticate will go through this route
authenticateRouter.post(
  '/verify',
  authenticationController.authenticate,
  async (_req: express.Request, res: express.Response) => {
    console.log('res.local', res.locals);
    if (res.locals.result === false) {
      res.status(200).json({ message: false });
    } else {
      res.status(200).json({ message: true });
    }
  }
);

//IMPLEMENT LATER
//any request to signout will go here
// authenticateRouter.post(
//   '/createuser',
//   authenticationController.signOut,
//   async (req: express.Request, res: express.Response) => {
//     res.status(200).json('successAuth');
//   }
// );

export default authenticateRouter;
