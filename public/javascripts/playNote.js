// cross-platform support for webkit / mozilla
var extension = ".mp3"
if ((navigator.userAgent.indexOf('Firefox') != -1) || (navigator.userAgent.indexOf('Opera') != -1)) {
    extension = ".ogg"
}

// initialize / load audio players
var audioPlayerE = new Audio();
audioPlayerE.src="strings/E" + extension
audioPlayerE.preload = true;
audioPlayerE.load();
var audioPlayerA = new Audio();
audioPlayerA.src="strings/A" + extension
audioPlayerA.preload = true;
audioPlayerA.load();
var audioPlayerD = new Audio();
audioPlayerD.preload = true;
audioPlayerD.src="strings/D" + extension;
audioPlayerD.load();
var audioPlayerG = new Audio();
audioPlayerG.preload = true;
audioPlayerG.src="strings/G" + extension;
audioPlayerG.load();
var audioPlayerB = new Audio();
audioPlayerB.src="strings/B" + extension;
audioPlayerB.preload = true;
audioPlayerB.load();
var audioPlayerElittle = new Audio();
audioPlayerElittle.preload = true;
audioPlayerElittle.src="strings/Elittle" + extension;
audioPlayerElittle.load();

// called in draw.js when rectangle clicked
playNote = function(index,count) {
    var noteStr;
    if(index-count==0) {
        audioPlayerA.pause();
        audioPlayerA.load();
        audioPlayerD.pause();
        audioPlayerD.load();
        audioPlayerG.pause();
        audioPlayerG.load();
        audioPlayerB.pause();
        audioPlayerB.load();
        audioPlayerElittle.pause();
        audioPlayerElittle.load();
        audioPlayerE.play();
    }
    else if(index-count==1) {
        audioPlayerE.pause();
        audioPlayerE.load();
        audioPlayerD.pause();
        audioPlayerD.load();
        audioPlayerG.pause();
        audioPlayerG.load();
        audioPlayerB.pause();
        audioPlayerB.load();
        audioPlayerElittle.pause();
        audioPlayerElittle.load();
        audioPlayerA.play();
    }
    else if(index-count==2) {
        audioPlayerE.pause();
        audioPlayerE.load();
        audioPlayerA.pause();
        audioPlayerA.load();
        audioPlayerG.pause();
        audioPlayerG.load();
        audioPlayerB.pause();
        audioPlayerB.load();
        audioPlayerElittle.pause();
        audioPlayerElittle.load();
        audioPlayerD.play();
    }    
    else if(index-count==3) {
        audioPlayerE.pause();
        audioPlayerE.load();
        audioPlayerA.pause();
        audioPlayerA.load();
        audioPlayerD.pause();
        audioPlayerD.load();
        audioPlayerB.pause();
        audioPlayerB.load();
        audioPlayerElittle.pause();
        audioPlayerElittle.load();
        audioPlayerG.play();
    }
    else if(index-count==4) {
        audioPlayerE.pause();
        audioPlayerE.load();
        audioPlayerA.pause();
        audioPlayerA.load();
        audioPlayerD.pause();
        audioPlayerD.load();
        audioPlayerG.pause();
        audioPlayerG.load();
        audioPlayerElittle.pause();
        audioPlayerElittle.load();
        audioPlayerB.play();
    }
    else if(index-count==5) {
        audioPlayerE.pause();
        audioPlayerE.load();
        audioPlayerA.pause();
        audioPlayerA.load();
        audioPlayerD.pause();
        audioPlayerD.load();
        audioPlayerG.pause();
        audioPlayerG.load();
        audioPlayerB.pause();
        audioPlayerB.load();
        audioPlayerElittle.play();
    }
}