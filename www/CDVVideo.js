var exec = require("cordova/exec");

function CDVVideo () {
    this.available = false;
}

CDVVideo.prototype.play = function(video, portrait, callback, errback) {
    exec(callback, errback, 'CDVVideo', 'play', [video, portrait]);
};

module.exports = new CDVVideo();