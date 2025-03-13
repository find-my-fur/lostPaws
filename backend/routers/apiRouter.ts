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
  async (req: express.Request, res: express.Response) => {
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

// handles user location
apiRouter.post(
  '/PostPreferences',
  apiController.updatePets, // have a user controller
  async (req: Request, res: Response) => {
    console.log('in apiRouter', req.body);
    const { Address, Name, State, City, Zip, Phone } = req.body;

    const values: (string | number)[] = [
      Address,
      Name,
      State,
      City,
      Zip,
      Phone,
    ];
    console.log('the values:', values);

    await pool.query(
      `Insert into userdata(address, name, state, city, zip, phone)
                      values($1, $2, $3, $4, $5, $6)`,
      values
    );

    res.status(200).json('success');
  }
);

// handles adding pet preferences to Database
apiRouter.post(
  '/PetPreferences',
  async (req: express.Request, res: express.Response) => {
    console.log('in apiRouter Pet Preferences', req.body);
    const userId: number = 18;
    const { Breed, Age, Size, Gender } = req.body;

    const values: (string | number)[] = [userId, Breed, Age, Size, Gender];
    console.log('the values:', values);

    let result = await pool.query('SELECT * FROM userpreference WHERE user_id = $1', [userId])

    if (result.rows.length === 1) {
      await pool.query(`UPDATE userpreference SET breed = $1, age = $2, size = $3, gender = $4
                        WHERE user_id = $5`, [Breed, Age, Size, Gender, userId])

    } else {
      await pool.query(
      `Insert into userpreference(user_id, breed, age, size, gender)
                      values($1, $2, $3, $4, $5)`,
      values
    );
    }

    res.status(200).json('success');
  }
);
