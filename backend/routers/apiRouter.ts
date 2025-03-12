import express from 'express';
//import { Request, Response } from 'express';
import { apiController } from '../controllers/apiController.ts';
import pool from '../modal.ts';

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

apiRouter.post(
  '/PostPreferences',
  apiController.updatePets,// have a user controller 
  async (req: Request, res: Response) => {
    console.log('in apiRouter',req.body)
    const {Address, Name, State, City, Zip, Phone} = req.body



    const values: (string | number)[] = [Address, Name, State, City, Zip, Phone]
    console.log('the values:', values)
  
    await pool.query(`Insert into userdata(address, name, state, city, zip, phone)
                      values($1, $2, $3, $4, $5, $6)`, values)

    res.status(200).json('success');
  }
);
