// Node.js 서버 / Window OS 17:31
const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

http.listen(80, function () {
  console.log('This server is Nodejs.');
  console.log('http://182.172.120.221:80');
  console.log('Run Server!!');
});

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});