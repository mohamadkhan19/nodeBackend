import { Router } from 'express';
import UserService from './../service/user';
import ChatService from './../service/chat';

export default () => {
  let api = Router();

  // '/v1/user/register'
  api.post('/register', (req, res) => {
    UserService.findUserByEmail(req.body.email, (err, userData) => {
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
        UserService.createUser(req, (err, user) => {
          if(err) {
            res.status(500).json({ 
              error: err.message
            });
          }
          else {
            res.status(200).json({
              message: 'User created',
              obj: {
                user
              }
            });
          }
        })
       }
    });
  });

  api.get('/', (req, res) => {
    UserService.findAllUsers((err, user) => {
      if (err) {
        res.status(409).json({ 
          message: 'An error occured',
          error: err
        });
      }
      else {
        res.status(200).json({
          message: 'Users fetched',
          obj: {
            user
          }
        });
      }
    })
});

  api.put('/', (req, res) => {
    UserService.findUserByID(req.body.id, (err, userData) => {
      if (err) {
        res.status(409).json({ 
          message: 'An error occured',
          error: err
        });
      } else if (!userData) {
        res.status(300).json({ 
          message: `No User to update.`
        });
      }
      else {
        UserService.updateUser(req, userData, (err, result) => {
          if(err) {
            res.status(500).json({ 
              error: err
            });
          }
          else {
            res.status(200).json({
              message: 'User Details Updated',
              obj: result
            });
          }
        })
       }
    });
  });

  api.delete('/', (req, res) => {
    UserService.findUserByID(req.body.id, (err, userData) => {
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
        UserService.deleteUser(userData, (err, result) => {
          if(err) {
            res.status(500).json({ 
              error: err.message
            });
          }
          else {
            res.status(200).json({
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
