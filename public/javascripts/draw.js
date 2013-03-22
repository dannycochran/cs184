    globals = {};
    globals.playChecker = 0;
    var playColor = 'white';
    var width = $(window).width();
    var height = $(window).height();
    paper.view.viewSize = [width,height];    

    // Create a symbol, which we will use to place instances of later:
    var path = new Path.Circle(new Point(0, 0), 30);
    path.style = {
        fillColor: 'white',
        strokeColor: playColor
    };
    
    var count = 50;
    var symbol = new Symbol(path);
    
    // Place the instances of the symbol:
    for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = Point.random() * view.size;
        var placedSymbol = symbol.place(center);
        placedSymbol.scale(i / count);
    }
    
    // The onFrame function is called up to 60 times a second:
    function onFrame(event) {
        if(globals.playChecker==1) {
        // Run through the active layer's children list and change
        // the position of the placed symbols:
        for (var i = 0; i < count; i++) {
            var item = project.activeLayer.children[i];
            item.symbol.definition.style.fillColor = playColor;
            
            // Move the item 1/20th of its width to the right. This way
            // larger circles move faster than smaller circles:
            item.position.x += item.bounds.width / (width/40);
    
            // If the item has left the view on the right, move it back
            // to the left:
            if (item.bounds.left > view.size.width) {
                item.position.x = -item.bounds.width;
            }
        }
        }
    }

    var defColor = "white";
    var strings = 6;
    var stringSize = new Size(width/12,height/2);
    var stringPadding = ((width/2)/strings+1)*2;
    for (var i = 0; i < strings; i++) {
        var point = new Point((stringPadding/6)+(i*stringPadding),height/4);
        var rectangle = new Rectangle(point,stringSize);
        var cornerSize = new Size(20,20);
        var rectPath = new Path.RoundRectangle(rectangle,cornerSize);
        rectPath.style = {
            fillColor: defColor,
            strokeColor: 'white',
            strokeWidth: 5
        }
    }

    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
    };
    
    function restoreColors(currentIndex) {
        for (var i=count; i<count+6; i++) {
            if(i!==currentIndex) {
                project.activeLayer.children[i].style.fillColor = defColor;
            }
        }
/*         globals.playChecker = 0;      */
    }
    
	var eColor = '#668CFF',
	   aColor = '#66FFD9',
	   dColor = '#8CFF66',
	   gColor = '#FFD966',
	   bColor = '#FF668C',
	   eLittleColor = '#D966FF';
	    
    function onMouseDown(event) {
        var hitResult = project.hitTest(event.point, hitOptions);
        try {
            if (hitResult.item.index>=count && hitResult.item.index<=count+5){
                restoreColors(hitResult.item.index);
                playNote(hitResult.item.index,count);
            }
            if (hitResult.item.index==count) {
                hitResult.item.style.fillColor = eColor;
                playColor = eColor;
            } else if (hitResult.item.index==count+1) {
                    hitResult.item.style.fillColor = aColor;
                    playColor = aColor;
            } else if (hitResult.item.index==count+2) {
                    hitResult.item.style.fillColor = dColor;
                    playColor = dColor;
            } else if (hitResult.item.index==count+3) {
                    hitResult.item.style.fillColor = gColor;      
                    playColor = gColor;            
            } else if (hitResult.item.index==count+4) {
                    hitResult.item.style.fillColor = bColor;
                    playColor = bColor;            
            } else if (hitResult.item.index==count+5) {
                    hitResult.item.style.fillColor = eLittleColor;
                    playColor = eLittleColor;            
            }
            globals.playChecker = 1;
        }
        catch(err){} 
    }