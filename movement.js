var piblaster = require('pi-blaster.js')
var leftFwd = 24
var leftRvs = 23
var leftEnable = 25
var rightFwd = 22
var rightRvs = 27
var rightEnable = 4
module.exports = {
    allForward : function(power){
        enable = 0
        if(power > 0){
            enable = 1
            console.log('going forward');
        }
        piblaster.setPwm(rightEnable,enable)
        piblaster.setPwm(leftEnable,enable)
        piblaster.setPwm(leftFwd,power*.5)
        piblaster.setPwm(rightFwd,power)
    },
    allBackward : function(power){
        enable = 0
        if(power > 0){
            enable = 1
            console.log('going backward');
        }
        piblaster.setPwm(rightEnable,enable)
        piblaster.setPwm(leftEnable,enable)
        piblaster.setPwm(leftRvs,power*.5)
        piblaster.setPwm(rightRvs,power)
    },
    turnLeft : function(power){
        enable = 0
        if(power > 0){
            enable = 1
            console.log('going forward');
        }
        piblaster.setPwm(rightEnable,enable)
        piblaster.setPwm(leftEnable,enable)
        piblaster.setPwm(leftFwd,power*.5)
        piblaster.setPwm(rightRvs,power)
    },
    turnRight : function(power){
        enable = 0
        if(power > 0){
            enable = 1
            console.log('going right');
        }
        piblaster.setPwm(rightEnable,enable)
        piblaster.setPwm(leftEnable,enable)
        piblaster.setPwm(leftRvs,power*.5)
        piblaster.setPwm(rightFwd,power)
    }
}
