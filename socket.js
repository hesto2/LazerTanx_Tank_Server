var _ = require('underscore-node')
var exec = require('child_process').exec;
// var piblaster = require('pi-blaster.js')
var movement = require('./movement')
// Tank side code for socket events
var state1 = true

var leftFwd = 24
var leftRvs = 23
var leftEnable = 25
var rightFwd = 22
var rightRvs = 27
var rightEnable = 4
var K_w=87
var K_s=83
var K_a=65
var K_d=68
var K_q=81
var K_e=69
var K_space='32'
var keys = [K_w,K_s,K_a,K_d,K_space,K_q,K_e]

var keyMap = {}
keyMap[K_w] = movement.allForward,
keyMap[K_s] = movement.allBackward,
keyMap[K_a] = movement.turnLeft,
keyMap[K_d] = movement.turnRight

module.exports = function(io){

    io.on('connection',function(socket){
        // Request the username and info for the socket
        console.log('connected');
        //TODO: Make a command run here that starts the apache server automatically. Possibly should add server into this repo.
        socket.on('keyDown',function(key){
            keyMap[key](1)
        })

        socket.on('keyUp',function(key){
            keyMap[key](0)
        })

        socket.on('disconnect', function() {
            // TODO: Make a command here that stops the apache server automatically
            console.log('disconnected');
        });
    })
}
