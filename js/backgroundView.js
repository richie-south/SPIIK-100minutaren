"use strict";

var spiik = spiik || {};

spiik.backgroundView = function(video){
    return new Vue({
        el: "#backgroundView",
        methods: {

            getYouTubeAutoPlayLink: function(link){
                var div = document.createElement("div");
                div.innerHTML = JSON.parse(link);
                div.querySelector("iframe").src += "?autoplay=1";

                return div;
            }
        },

        attached: function(){
            var videoEl = this.getYouTubeAutoPlayLink(video);
            this.$els.videoHolder.appendChild(videoEl);
        }
    });
};
