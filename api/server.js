const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const db = require(path.join(__dirname, 'db.json'));
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const pause = require('connect-pause');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(pause(1000));
server.use('/api', router);

server.listen(5005, () => {
  console.log(' ');

  console.log('JSON Server is running on port 5005')
});