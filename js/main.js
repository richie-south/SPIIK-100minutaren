"use strict";

var spiik = spiik || {};

spiik.init = function(){
    var settings = spiik.settings(function(){
        var counterView = spiik.counterView();
    });
};

window.onload = spiik.init;
