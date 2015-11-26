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
            var timeCounterEl = this.$el.querySelector("#timeCounter");
            var shotTimesEl = this.$el.querySelector("#shotCounter");

            counter.start(function(timeUpdate){

                if(counter.isNewMinute()){
                    shotTimesEl.innerHTML = counter.totalNrOfMinutes();
                }
                if(counter.isTimeEnd()){
                    console.log("stop");
                    counter.stop();
                }

                timeCounterEl.innerHTML = this.timeToString(timeUpdate.getHours(), timeUpdate.getMinutes(), timeUpdate.getSeconds());

            }.bind(this));
        }
    });
};
