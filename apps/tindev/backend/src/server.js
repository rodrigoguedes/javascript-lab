const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./routes');

// this should be improved
const connectedUsers = {};
io.on('connection', (socket) => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3003);
