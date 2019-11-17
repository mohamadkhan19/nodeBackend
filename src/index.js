import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';

let app = express();
app.server = http.createServer(app);

//middleware
//parse application/json
app.use(bodyParser.json({
  limit: config.bodyLimit
}));

//api routes v1
app.use('/v1', routes);

// Base URL test endpoint to see if API is running
app.get('/', (_req, res) => {
  res.json({ message: 'Hi Sibly Users. -Coach!' })
});

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

module.exports = {
  app
}
