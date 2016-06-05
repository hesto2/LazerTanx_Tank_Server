var app = require('express')();
var express = require('express')
var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.listen(12344)
require('./socket')(io)
