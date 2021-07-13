// Node.js 서버 / Window OS 17:42
const ip = require('ip');
const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

http.listen(80, function () {
  console.log('This server is Nodejs.');
  console.log('Server Address: ' + ip.address());
  console.log('Run Server!!');
});

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});