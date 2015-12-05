"use strict";

var spiik = spiik || {};

spiik.Counter = function(endTimeHour, endTimeMinute, startTimeHour, startTimeMinute, startTimeSecond){
    this.endTimeMinute = endTimeMinute;
    this.endTimeHour = endTimeHour;
    this.minutes = startTimeMinute || 0;
    this.seconds = startTimeSecond || 0;
    this.hour = startTimeHour || 0;
    this.newMinute = false;
    this.Interval = 1000; // 1sec
    this.time = null;
    var timerId = 0;
};

// starts timer
spiik.Counter.prototype.start = function(callback){
    this.timerId = setInterval(function(){
        this.time = this.tick();
        callback(this.time);
    }.bind(this), this.Interval);
};

// stops timer
spiik.Counter.prototype.stop = function(){
    clearInterval(this.timerId);
};

spiik.Counter.prototype.tick = function(){
    this.seconds++;
    if(this.seconds == 60){
        this.newMinute = true;
        this.seconds = 0;
        this.minutes++;
        if(this.minutes == 60){
            this.minutes = 0;
            this.hour = 1;
        }
    }
    if(this.isTimeEnd()){
        this.stop();
    }
    return new Date(
        "0000",
        "0",
        "0",
        this.hour,
        this.minutes,
        this.seconds
    );
};

spiik.Counter.prototype.isNewMinute = function(){
    var newMinute = this.newMinute;
    this.newMinute = false;
    return newMinute;
};

spiik.Counter.prototype.isTimeEnd = function(){
    return this.hour >= this.endTimeHour && this.minutes >= this.endTimeMinute;
};

spiik.Counter.prototype.totalNrOfMinutes = function(){
    var totalMinutes = 0;
    for (var i = 0; i < this.hour; i++) {
        totalMinutes += 60;
    }
    for (var j = 0; j < this.minutes; j++) {
        totalMinutes++;
    }
    return totalMinutes;
};
