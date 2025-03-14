import express from 'express';
import pool from '../modal.ts';

interface AuthenticationController {
  authenticate: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
  signOut: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
}

const authenticationController: AuthenticationController = {
  authenticate: async (req, res, next) => {
    const { email, password } = req.body;

    const results = await pool.query(
      `SELECT * FROM userdata WHERE username = $1 AND password = $2`,
      [email, password]
    );
    
    console.log(email)
    console.log(results.rows.length === 0);
    console.log(results.rows)
    if (results.rows.length === 0) {
      res.locals = {result: false}
    } else  {
      res.locals = {result: true}
    }

   

    console.log('in controller');

    return next();
  },

  signOut: async (_req, _res, next) => {
    return next();
  },
};

export default authenticationController;
