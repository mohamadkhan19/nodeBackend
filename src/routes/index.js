import express from 'express';
import initalizeDb from '../db';
import user from '../controller/user';

let router = express();

//connect to db
initalizeDb(db => {
  
    //api routes v1 (/v1)
    router.use('/user', user());
  });

export default router;