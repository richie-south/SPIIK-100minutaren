"use strict";

var spiik = spiik || {};

spiik.init = function(){
    var settings = new spiik.Settings();
    settings.createView();
    settings.mountView();
};

window.onload = spiik.init;
