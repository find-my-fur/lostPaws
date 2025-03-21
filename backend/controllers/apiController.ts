import express from 'express';
import pool from '../modal.ts';

import 'dotenv/config';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const TOKEN_URL = 'https://api.petfinder.com/v2/oauth2/token';

//types for the controller
interface ApiController {
  getPets: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
  // updatePets: (
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) => void;
  favoritePets: (
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

//Animal interface
interface Animal {
  name: string;
  photos: { small: string; medium: string; large: string }[]; // Assuming photos is an array of objects with different sizes
  url: string;
  id: string;
}
//follows for each animal the structure from above
interface PetfinderResponse {
  animal: Animal;
}

export const apiController: ApiController = {
  getPets: async (_req, res, next) => {
    const results = await pool.query(
      `SELECT * FROM userpreference WHERE user_id=18;`
    );

    const { age, size, gender } = results.rows[0];
    // console.log('breed:', breed);
    // console.log('age:', age);
    // console.log('size:', size);
    // console.log('gender:', gender);

    //API REQUEST TO BE MADE BELOW
    //header for the fetch request
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    //body for fetch request
    const body: string = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    //COLLECTS THE TOKEN TO THEN USE FOR API
    try {
      //response from api
      // console.log(URL);
      const response: Response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: headers,
        body: body,
      });
      const data = (await response.json()) as TokenResponse;
      //saves the token received in res.locals to be used for later fetch request
      res.locals.access_token = data.access_token;

      // console.log('token:', data);
    } catch (err) {
      console.log('error:', err);
    }

    //COLLECTS THE DATA FROM THE API
    try {
      //authorization header for fetch request
      //console.log('testing token:', res.locals.access_token);
      //BASE URL CALL
      const URL = 'https://api.petfinder.com/v2/animals';

      const authorizationHeader = `Bearer ${res.locals.access_token}`;

      const fetchAnimalsUrl: string =
        URL +
        `?status=adoptable&age=${age}&gender=${gender}&size=${size}&limit=100&organization=ON591,LA398,IL947,KY527,VA788,IN738,MI1075,TX2369,FL1618,OK473,FL1628,FL1579,TX2309,ME162,IL916`;
      const response: Response = await fetch(fetchAnimalsUrl, {
        headers: {
          Authorization: authorizationHeader,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      // console.log(data);
      res.locals.animalsFetched = data;
      return next();
    } catch (err) {
      console.log('error:', err);
    }

    return next();
  },

  // updatePets: async (req, res, next) => {
  //   return next();
  // },
  favoritePets: async (_req, res, next) => {
    interface favoriteAnimal {
      name: string;
      photos: { small: string; medium: string; large: string }[]; // Assuming photos is an array of objects with different sizes
      url: string;
      id: string;
    }
    const allAnimals: favoriteAnimal[] = [];

    const results = await pool.query(
      `SELECT * FROM favoritepet WHERE user_id=18;`
    );

    const allFavoritePets: number[] = [];
    const petID: number = results.rows.length;

    for (let i = 0; i < petID; i++) {
      allFavoritePets.push(Number(results.rows[i].pets));
    }

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    //body for fetch request
    const body: string = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    //COLLECTS THE TOKEN TO THEN USE FOR API
    try {
      //response from api
      // console.log(URL);
      const response: Response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: headers,
        body: body,
      });

      const data = (await response.json()) as TokenResponse;
      //saves the token received in res.locals to be used for later fetch request
      res.locals.access_token = data.access_token;

      // console.log('token:', data);
    } catch (err) {
      console.log('error:', err);
    }

    try {
      //authorization header for fetch request
      //console.log('testing token:', res.locals.access_token);
      //BASE URL CALL
      const URL = 'https://api.petfinder.com/v2/animals/';
      const authorizationHeader = `Bearer ${res.locals.access_token}`;

      for (const elem of allFavoritePets) {
        const fetchAnimalsUrl: string = URL + `${elem}`;
        const response: Response = await fetch(fetchAnimalsUrl, {
          headers: {
            Authorization: authorizationHeader,
            'Content-Type': 'application/json',
          },
        });

        const data = (await response.json()) as PetfinderResponse;
        //console.log(data.animal)
        allAnimals.push({
          name: data.animal.name,
          photos: data.animal.photos,
          url: data.animal.url,
          id: data.animal.id,
        });
      }

      res.locals.animalsFetched = allAnimals;

      return next();
    } catch (err) {
      console.log(err);
    }
  },
};
