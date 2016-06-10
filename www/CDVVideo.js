var exec = require("cordova/exec");

function CDVVideo () {
    this.available = false;
}

CDVVideo.prototype.play = function(video, portrait, callback, errback) {
    exec(callback, errback, 'CDVVideo', 'play', [video, portrait]);
};

CDVVideo.prototype.finished = function(video) {
    console.log("finished playing video " + video);
};

module.exports = new CDVVideo();