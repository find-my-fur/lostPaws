import { Request, Response, NextFunction } from 'express';

interface AuthenticationController {
  authenticate: (req: Request, res: Response, next: NextFunction) => void;
  signOut: (req: Request, res: Response, next: NextFunction) => void;
}

export const authenticationController: AuthenticationController = {
  authenticate: async (req, res: Response, next) => {
    return next();
  },

  signOut: async (req: Request, res: Response, next) => {
    return next();
  },
};
