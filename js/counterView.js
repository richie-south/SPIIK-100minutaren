"use strict";

var spiik = spiik || {};

spiik.counterView = function(){
    return new Vue({
        el: "#counter",
        methods: {
            timeToString: function(hour, minutes, seconds){
                if(seconds < 10){
                    seconds = "0"+seconds;
                }
                if(minutes < 10){
                    minutes = "0"+minutes;
                }
                if(hour < 10){
                    hour = "0"+hour;
                }
                return ""+hour+":"+minutes+":"+seconds+"";
            }
        },

        attached: function(){
            var counter = new spiik.Counter(1, 40);

            counter.start(function(timeUpdate){

                if(counter.isNewMinute()){
                    this.$els.shotCounter.textContent = counter.totalNrOfMinutes();
                }
                this.$els.timeCounter.textContent = this.timeToString(timeUpdate.getHours(), timeUpdate.getMinutes(), timeUpdate.getSeconds());
            }.bind(this));
        }
    });
};
