"use strict";

var spiik = spiik || {};

spiik.Settings = function(){
};

spiik.Settings.prototype.createView = function(){
    var SettingsTemplate = this.settingsTemplate();
    this.settingsView =  new SettingsTemplate({
        replace: false,
        methods: {
            save: function(){
                this.setHtmlFontColor(this.getSelectedColor());
                var saveEl = this.$el.querySelector("#videoSrc");
                
                var backgroundView = spiik.backgroundView(JSON.stringify(saveEl.value));
                var counterView = spiik.counterView();
                this.$destroy(this);
            },

            skip: function(){
                var counterView = spiik.counterView();
                this.$destroy(this);
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
        },

        attached: function(){

        }
    });

};

spiik.Settings.prototype.mountView = function(){
    this.settingsView.$mount().$appendTo('#settingsHolder');
};

spiik.Settings.prototype.settingsTemplate = function(){
    return Vue.extend({
        template: '<div id="settingsHolderEl">'+
        '<input type="text" id="videoSrc" placeholder="Länk till embedad youtube video">'+
        '<div>Font färg</div>'+
        '<table><tr><th>Black</th><th>Red</th><th>Blue</th><th>White</th></tr><tr><td><input type="radio" name="colors" value="black" checked></td><td><input type="radio" name="colors" value="red"></td><td><input type="radio" name="colors" value="blue"></td><td><input type="radio" name="colors" value="white"></td></tr></table>'+
        '<input type="submit" v-on:click="save" value="starta med video" id="save">'+
        '<input type="submit" v-on:click="skip" value="starta utan inställningar" id="skip"> </div>'
    });
};
