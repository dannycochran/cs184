var extension = ".mp3"
if ((navigator.userAgent.indexOf('Firefox') != -1) || (navigator.userAgent.indexOf('Opera') != -1)) {
    extension = ".ogg"
}

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

playNote = function(index,count) {
    var noteStr;
    if(index-count==0) {audioPlayerE.play()}
    if(index-count==1) {audioPlayerA.play()}
    if(index-count==2) {audioPlayerD.play()}
    if(index-count==3) {audioPlayerG.play()}
    if(index-count==4) {audioPlayerB.play()}
    if(index-count==5) {audioPlayerElittle.play()}
}