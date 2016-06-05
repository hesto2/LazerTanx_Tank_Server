var _ = require('underscore-node')
var exec = require('child_process').exec;
// Tank side code for socket events
module.exports = function(io){
    io.on('connection',function(socket){
        // Request the username and info for the socket
        console.log('connected');
        //TODO: Make a command run here that starts the apache server automatically. Possibly should add server into this repo.
        socket.on('keyDown',function(key){
            console.log(key)
        })

        socket.on('keyUp',function(key){
            console.log(key)
        })

        socket.on('disconnect', function() {
            // TODO: Make a command here that stops the apache server automatically
            console.log('disconnected');
        });
    })
}
