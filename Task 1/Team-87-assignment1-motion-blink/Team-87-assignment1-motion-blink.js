var b = require('bonescript');
var led = "P8_13";
var sensor = "P8_19";

b.pinMode(led, 'out');
b.pinMode(sensor, b.INPUT);
setInterval(checkPIR, 2500);

function checkPIR() {
    b.digitalRead(sensor, printStatus);
}

function printStatus(x) {
    if (x.value === 0) {
        b.digitalWrite(led, 1);
        console.log("Motion Detected");
    }
    else {
        console.log("No Motion Detected");
        b.digitalWrite(led, 0)
    }
}