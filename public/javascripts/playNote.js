var audioPlayer = new Audio();
playNote = function(index,count) {
    var noteStr;
    if(index-count==0) {noteStr="../strings/E"}
    if(index-count==1) {noteStr="../strings/A"}
    if(index-count==2) {noteStr="../strings/D"}
    if(index-count==3) {noteStr="../strings/G"}
    if(index-count==4) {noteStr="../strings/B"}
    if(index-count==5) {noteStr="../strings/Elittle"}
	audioPlayer.src="sound/" + noteStr + ".mp3";
	audioPlayer.play();
}
audioPlayer.addEventListener('ended',revertColor,false);
function revertColor() {
    globals.restoreColors();
}