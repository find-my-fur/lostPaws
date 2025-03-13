import express from 'express';

import 'dotenv/config';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const URL = 'https://api.petfinder.com/v2/oauth2/token/';

//types for the controller
interface ApiController {
  getPets: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
  updatePets: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
}

interface TokenResponse {
  token_type: string;
  access_token: string;
  expires_in?: number;
}

export const apiController: ApiController = {
  getPets: async (req, res, next) => {
    //header for the fetch request
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    //body for fetch request
    const body: string = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    //COLLECTS THE TOKEN TO THEN USE FOR API
    try {
      //response from api
      console.log(URL);
      const response: Response = await fetch(URL, {
        method: 'POST',
        headers: headers,
        body: body,
      });
      const data = (await response.json()) as TokenResponse;
      res.locals.access_token = data.access_token;

      console.log(data);
    } catch (err) {
      console.log('error:', err);
    }

    //COLLECTS THE DATA FROM THE API
    try {
      //authorization header for fetch request
      const header = `Authorization: Bearer ${res.locals.access_token}`;

      const response: Response = await fetch();
      const data = response.json();
    } catch (err) {
      console.log('error:', err);
    }

    return next();
  },

  updatePets: async (req, res, next) => {
    return next();
  },
};
