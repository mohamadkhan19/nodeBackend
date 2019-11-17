import { Router } from 'express';
import UserDataExt from './extensions/userData-ext';

export default () => {
  let api = Router();

  // '/v1/user/register'
  api.post('/register', (req, res) => {
    UserDataExt.findUserByEmail(req.body.email, (err, userData) => {
      if (err) {
        res.status(409).json({ 
          message: 'An error occured',
          error: err
        });
      } else if (userData) {
        res.status(300).json({ 
          message: `Email ${req.body.email} is already registered`
        });
      }
      else {
        UserDataExt.createUser(req, (err, result) => {
          console.log("req",req);
          if(err) {
            res.status(500).json({ 
              error: err.message
            });
          }
          else {
            res.status(201).json({
              message: 'User created',
              obj: result
            });
          }
        })
       }
    });
  });

  api.delete('/', (req, res) => {
    UserDataExt.findUserByID(req.body.id, (err, userData) => {
      if (err) {
        res.status(409).json({ 
          message: 'An error occured',
          error: err
        });
      } else if (!userData) {
        res.status(300).json({ 
          message: `No User to delete.`
        });
      }
      else {
        UserDataExt.deleteUser(userData, (err, result) => {
          console.log("req",req);
          if(err) {
            res.status(500).json({ 
              error: err.message
            });
          }
          else {
            res.status(201).json({
              message: 'User deleted',
              obj: result
            });
          }
        })
       }
    });
  });

  return api;
}
