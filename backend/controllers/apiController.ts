import express from 'express';

import 'dotenv/config';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const endpoint = 'https://api.petfinder.com/v2/oauth2/token';

interface ApiController {
  getPets: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
  updatePets: (req: Request, res: Response, next: NextFunction) => void;
}

export const apiController: ApiController = {
  getPets: async (req, res: Response, next) => {
    const URL =
      endpoint +
      `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    try {
      const response = await fetch(URL);
      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log('error:', err);
    }

    return next();
  },

  updatePets: async (req: Request, res: Response, next) => {
    return next();
  },
};
