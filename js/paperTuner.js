//globals
	paper.view.viewSize = [600,100];
	window.globals = {};
	globals.playChecker = 0;
	
	var frequencies = {
		'A': "A",
		'Asharp': "A#",
		'B': "B",
		'C': "C",
		'Csharp': "C#",
		'D': "D",
		'Dsharp': "D#",
		'E': "E",
		'F': "F",
		'Fsharp': "F#",
		'G': "G",
		'Gsharp': "G#"
	};

	var width = 500,
		height = 100,
		stroke = 6;
		fontSize = height / 3,
		fontSpace = width / 5,
		fontHeightMargin = height/(fontSize/5);
	
    //static points, not really (see static x's below)
	var Apoint = {width: -width, height:fontHeightMargin},
		AsharpPoint = {width: -width+fontSpace, height:fontHeightMargin},
		Bpoint = {width: -width+fontSpace*2, height:fontHeightMargin},
		Cpoint = {width: -width+fontSpace*3, height:fontHeightMargin},
		CsharpPoint = {width: -width+fontSpace*4, height:fontHeightMargin},
		Dpoint = {width: -width+fontSpace*5, height:fontHeightMargin},
		DsharpPoint = {width: -width+fontSpace*6, height:fontHeightMargin},
		Epoint = {width: -width+fontSpace*7, height:fontHeightMargin},
		Fpoint = {width: -width+fontSpace*8, height:fontHeightMargin},
		FsharpPoint = {width: -width+fontSpace*9, height:fontHeightMargin},
		Gpoint = {width: -width+fontSpace*10, height:fontHeightMargin},
		GsharpPoint = {width: -width+fontSpace*11, height:fontHeightMargin};


// rectangle housing notes clipMask
	var size = new Size(width,height),
		rectangle = new Rectangle(0, size),
		cornerSize = new Size(10,10),
		roundRectangleMask = new Path.RoundRectangle(rectangle,cornerSize);
	roundRectangleMask.position = view.center;
	roundRectangleMask.clipMask = true;
	
// text
	
	var A = new PointText(Apoint.width,Apoint.height);
		A.content = frequencies.A;
		A.characterStyle.fontSize = fontSize;
	var Asharp = new PointText(AsharpPoint.width,AsharpPoint.height);
		Asharp.content = frequencies.Asharp;
		Asharp.characterStyle.fontSize = fontSize;
	var B = new PointText(Bpoint.width,Bpoint.height);
		B.content = frequencies.B;
		B.characterStyle.fontSize = fontSize;
	var C = new PointText(Cpoint.width,Cpoint.height);
		C.content = frequencies.C;
		C.characterStyle.fontSize = fontSize;
	var Csharp = new PointText(CsharpPoint.width,CsharpPoint.height);
		Csharp.content = frequencies.Csharp;
		Csharp.characterStyle.fontSize = fontSize;
	var D = new PointText(Dpoint.width,Dpoint.height);
		D.content = frequencies.D;
		D.characterStyle.fontSize = fontSize;
	var Dsharp = new PointText(DsharpPoint.width,DsharpPoint.height);
		Dsharp.content = frequencies.Dsharp;
		Dsharp.characterStyle.fontSize = fontSize;
	var E = new PointText(Epoint.width,Epoint.height);
		E.content = frequencies.E;
		E.characterStyle.fontSize = fontSize;
	var F = new PointText(Fpoint.width,Fpoint.height);
		F.content = frequencies.F;
		F.characterStyle.fontSize = fontSize;
	var Fsharp = new PointText(FsharpPoint.width,FsharpPoint.height);
		Fsharp.content = frequencies.Fsharp;
		Fsharp.characterStyle.fontSize = fontSize;
	var G = new PointText(Gpoint.width,Gpoint.height);
		G.content = frequencies.G;
		G.characterStyle.fontSize = fontSize;
	var Gsharp = new PointText(GsharpPoint.width,GsharpPoint.height);
		Gsharp.content = frequencies.Gsharp;
		Gsharp.characterStyle.fontSize = fontSize;
	
	var notesGroup = new Group([A,Asharp,B,C,Csharp,D,Dsharp,E,F,Fsharp,G,Gsharp]); 
		notesGroup.position = view.center;
	
	var group = new Group([roundRectangleMask,notesGroup]);

// rectangle housing notes
	var roundRectangle = new Path.RoundRectangle(rectangle,cornerSize);
		roundRectangle.strokeColor = 'white';
		roundRectangle.position = view.center;

	function onResize(event) {
		paper.view.viewSize = [screen.width,100];
	}

// single animation @60FPS occurs when tuner.js changes startAnimate to 1, shows tuner logic
	globals.startAnimate = 0;

	if(globals.startAnimate==1) {
		function onFrame(event) {
			globals.startAnimate = 0;
			}
		}
		
// tuner logic
	var ApointX = A.point.x-100,
		AsharpPointX = Asharp.point.x-fontSpace,
		BpointX = B.point.x-fontSpace,
		CpointX = C.point.x-fontSpace,
		CsharpPointX = Csharp.point.x-fontSpace,
		DpointX = D.point.x-fontSpace,
		DsharpPointX = Dsharp.point.x-fontSpace,
		EpointX = E.point.x-fontSpace,
		FpointX = F.point.x-fontSpace,
		FsharpPointX = Fsharp.point.x-fontSpace,
		GpointX = G.point.x-fontSpace,
		GsharpPointX = Gsharp.point.x-fontSpace;
	
	var jWhite = ["E","E","G","E","D","C","B"];
	var jWhiteUser = [];
	var noteLooper = 0;
	// called by tuner.js
	globals.callPaperTuner = function(noteStr,freq,diff) {
		// changes note color
		var note;
		var newPos;
		
		if(noteStr==jWhite[noteLooper]) {
			
			if (noteLooper>1 && jWhite[noteLooper]!=jWhite[noteLooper-1]) {
				jWhiteUser.push(noteStr);
				noteLooper+=1;
			}
			else {
				jWhiteUser.push(noteStr);
				noteLooper+=1;
				}		
		}
		if (jWhiteUser[0]=="E" && jWhiteUser[1]=="E" && jWhiteUser[2]=="G" && jWhiteUser[3]=="E" && jWhiteUser[4]=="D" && jWhiteUser[5]=="C" && jWhiteUser[6]=="B") {
			console.log("success");
			jWhiteUser[6]="F";
			globals.playChecker = 1;
			otherGlobals.readyPlay('player');
		}  		
		// for some reason the points are inverted in notePosition, so it maps backwards
		if (noteStr == "A") {note=A; newPos = GsharpPointX}
		if (noteStr == "Asharp") {note=Asharp; newPos = GpointX}
		if (noteStr == "B") {note=B; newPos = FsharpPointX}
		if (noteStr == "C") {note=C; newPos = FpointX}
		if (noteStr == "Csharp") {note=Csharp; newPos = EpointX}
		if (noteStr == "D") {note=D; newPos = DsharpPointX}
		if (noteStr == "Dsharp") {note=Dsharp; newPos = DpointX}
		if (noteStr == "E") {note=E; newPos = CsharpPointX}
		if (noteStr == "F") {note=F; newPos = CpointX}
		if (noteStr == "Fsharp") {note=Fsharp; newPos = BpointX;}
		if (noteStr == "G") {note=G; newPos = AsharpPointX;}
		if (noteStr == "Gsharp") {note=Gsharp; newPos = ApointX;}
		
		for (var i=0; i<notesGroup.children.length; i++) {
			notesGroup.children[i].characterStyle.fillColor = "black";
		}
		note.characterStyle.fillColor = "green";
		
		// changes notesGroup position to reflect current note
		notesGroup.position = new Point (newPos,notesGroup.position.y);
		
		//debugging area		
	}
