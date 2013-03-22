// cross-platform support for webkit / mozilla
var extension = ".mp3"
if ((navigator.userAgent.indexOf('Firefox') != -1) || (navigator.userAgent.indexOf('Opera') != -1)) {
    extension = ".ogg"
}
// initialize / load audio players
var audioPlayerE = new Audio();
audioPlayerE.src="strings/E" + extension
audioPlayerE.load();
var audioPlayerA = new Audio();
audioPlayerA.src="strings/A" + extension
audioPlayerA.load();
var audioPlayerD = new Audio();
audioPlayerD.src="strings/D" + extension;
audioPlayerD.load();
var audioPlayerG = new Audio();
audioPlayerG.src="strings/G" + extension;
audioPlayerG.load();
var audioPlayerB = new Audio();
audioPlayerB.src="strings/B" + extension;
audioPlayerB.load();
var audioPlayerElittle = new Audio();
audioPlayerElittle.src="strings/Elittle" + extension;
audioPlayerElittle.load();
    
// if not using mobile, use stronger playback system, otherwise, use weak one
if(!navigator.userAgent.match(/iPhone/i) && !navigator.userAgent.match(/iPod/i) && !navigator.userAgent.match(/iPad/i) && !navigator.userAgent.match(/Android/i)) {
    console.log('hello')
    // called in draw.js when rectangle clicked
    playNote = function(index,count) {
        if(index-count==0) {
            audioPlayerA.pause();
            audioPlayerD.pause();
            audioPlayerG.pause();
            audioPlayerB.pause();
            audioPlayerElittle.pause();
            audioPlayerE.load();
            audioPlayerE.play();
        }
        else if(index-count==1) {
            audioPlayerE.pause();
            audioPlayerD.pause();
            audioPlayerG.pause();
            audioPlayerB.pause();
            audioPlayerElittle.pause();
            audioPlayerA.load();
            audioPlayerA.play();
        }
        else if(index-count==2) {
            audioPlayerE.pause();
            audioPlayerA.pause();
            audioPlayerG.pause();
            audioPlayerB.pause();
            audioPlayerElittle.pause();
            audioPlayerD.load();
            audioPlayerD.play();
        }    
        else if(index-count==3) {
            audioPlayerE.pause();
            audioPlayerA.pause();
            audioPlayerD.pause();
            audioPlayerB.pause();
            audioPlayerElittle.pause();
            audioPlayerG.load();
            audioPlayerG.play();
        }
        else if(index-count==4) {
            audioPlayerE.pause();
            audioPlayerA.pause();
            audioPlayerD.pause();
            audioPlayerG.pause();
            audioPlayerElittle.pause();
            audioPlayerB.load();
            audioPlayerB.play();
        }
        else if(index-count==5) {
            audioPlayerE.pause();
            audioPlayerA.pause();
            audioPlayerD.pause();
            audioPlayerG.pause();
            audioPlayerB.pause();
            audioPlayerElittle.load();
            audioPlayerElittle.play();
        }
    }
} else {
// called in draw.js when rectangle clicked
    playNote = function(index,count) {
        if(index-count==0) {
            audioPlayerE.play();
        }
        else if(index-count==1) {
            audioPlayerA.play();
        }
        else if(index-count==2) {
            audioPlayerD.play();
        }    
        else if(index-count==3) {
            audioPlayerG.play();
        }
        else if(index-count==4) {
            audioPlayerB.play();
        }
        else if(index-count==5) {
            audioPlayerElittle.play();
        }
    }
}