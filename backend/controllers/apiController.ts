import { Request, Response, NextFunction } from 'express';
import { configDotenv } from 'dotenv';


interface ApiController {
  getPets: (req: Request, res: Response, next: NextFunction) => void;
  updatePets: (req: Request, res: Response, next: NextFunction) => void;
}

export const apiController: ApiController = {
  getPets: async (req, res: Response, next) => {
    return next();
  },

  updatePets: async (req: Request, res: Response, next) => {
    return next();
  },
};
