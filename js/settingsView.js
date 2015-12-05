"use strict";

var spiik = spiik || {};

spiik.settings = function(callback){
    return new Vue({
        el: "#settingsHolderEl",
        methods: {
            save: function(){
                this.setHtmlFontColor(this.getSelectedColor());
                var backgroundView = spiik.backgroundView(
                    JSON.stringify(this.$els.videoSrc.value));

                this.$destroy(this);
                callback();
            },

            skip: function(){
                this.$destroy(this);
                callback();
            },

            getSelectedColor: function(){
                var el = this.$el.querySelectorAll("table input");
                for (var i = 0; i < el.length; i++) {
                    if(el[i].checked){
                        el = el[i];
                        break;
                    }
                }
                return el.value;
            },

            setHtmlFontColor: function(color){
                document.body.style.color = color;
            }
        }
    });
};
