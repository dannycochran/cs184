    // The amount of circles we want to make:
    globals = {};
    globals.playChecker = 0;
    globals.color = "red";
    var width = $(window).width();
    var height = $(window).height()-17;
    paper.view.viewSize = [width,height];

    var count = 50;
    
    // Create a symbol, which we will use to place instances of later:
    var path = new Path.Circle(new Point(0, 0), 10);
    path.style = {
        fillColor: 'white',
        strokeColor: 'black'
    };
    
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
            item.symbol.definition.style.fillColor = globals.color;
            
            // Move the item 1/20th of its width to the right. This way
            // larger circles move faster than smaller circles:
            item.position.x += item.bounds.width / 20;
    
            // If the item has left the view on the right, move it back
            // to the left:
            if (item.bounds.left > view.size.width) {
                item.position.x = -item.bounds.width;
            }
        }
        }
    }
    var playColor = "green";
    var defColor = "white";
    var strings = 6;
    var stringSize = new Size(width/12,height/2);
    var stringPadding = ((width/2)/strings+1)*2;
    for (var i = 0; i < strings; i++) {
        var point = new Point((stringPadding/6)+(i*stringPadding),height/5);
        var rectangle = new Rectangle(point,stringSize);
        var path = new Path.Rectangle(rectangle);
        path.style = {
            fillColor: defColor,
            strokeColor: 'black',
        }   
    }
/*
    function onMouseDown(event) {
        console.log(width,project.activeLayer.children[50].segments[0].point.x,event.point.x,event.point.y);
        project.activeLayer.children[50].style.fillColor='green';
        console.log(project.activeLayer.children); 
    }
*/

    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
    };
    
    globals.restoreColors = function() {
        for (var i=count; i<count+6; i++) {
            project.activeLayer.children[i].style.fillColor = defColor;
        }     
    }
        
    function onMouseDown(event) {
        var hitResult = project.hitTest(event.point, hitOptions);
        try {
            if (hitResult.item.index>=count && hitResult.item.index<=count+5){
                globals.restoreColors();
                playNote(hitResult.item.index,count);
            }
            if (hitResult.item.index==count) {
                hitResult.item.style.fillColor = playColor;
            } else if (hitResult.item.index==count+1) {
                    hitResult.item.style.fillColor = playColor;
            } else if (hitResult.item.index==count+2) {
                    hitResult.item.style.fillColor = playColor;
            } else if (hitResult.item.index==count+3) {
                    hitResult.item.style.fillColor = playColor;      
            } else if (hitResult.item.index==count+4) {
                    hitResult.item.style.fillColor = playColor;
            } else if (hitResult.item.index==count+5) {
                    hitResult.item.style.fillColor = playColor;
            }
        }
        catch(err){} 
    }
    
        
