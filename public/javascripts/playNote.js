var spanner = document.createElement("span")
var audioPlayerE = new Audio();
audioPlayerE.src="strings/E.mp3"
audioPlayerE.load();
var audioPlayerA = new Audio();
audioPlayerA.src="strings/A.mp3"
audioPlayerA.load();
var audioPlayerD = new Audio();
audioPlayerD.src="strings/D.mp3";
audioPlayerD.load();
var audioPlayerG = new Audio();
audioPlayerG.src="strings/G.mp3";
audioPlayerG.load();
var audioPlayerB = new Audio();
audioPlayerB.src="strings/B.mp3";
audioPlayerB.load();
var audioPlayerElittle = new Audio();
audioPlayerElittle.src="strings/Elittle.mp3";
audioPlayerElittle.load();
spanner.appendChild(audioPlayerElittle);

playNote = function(index,count) {
    var noteStr;
    if(index-count==0) {audioPlayerE.play()}
    if(index-count==1) {audioPlayerA.play()}
    if(index-count==2) {audioPlayerD.play()}
    if(index-count==3) {audioPlayerG.play()}
    if(index-count==4) {audioPlayerB.play()}
    if(index-count==5) {audioPlayerElittle.play()}
}

audioPlayerE.addEventListener('ended',revertColor,false);
audioPlayerA.addEventListener('ended',revertColor,false);
audioPlayerD.addEventListener('ended',revertColor,false);
audioPlayerG.addEventListener('ended',revertColor,false);
audioPlayerB.addEventListener('ended',revertColor,false);
audioPlayerElittle.addEventListener('ended',revertColor,false);

function revertColor() {
    globals.restoreColors();
}