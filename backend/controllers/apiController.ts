import express from 'express';
//import { Request, Response, Nextfunction } from 'express'

interface ApiController {
  getPets: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
  updatePets: (rreq: express.Request, res: express.Response, next: express.NextFunction) => void;
}

export const apiController: ApiController = {
  getPets: async (req, res, next) => {
    return next();
  },

  updatePets: async (req, res, next) => {
    return next();
  },
};
