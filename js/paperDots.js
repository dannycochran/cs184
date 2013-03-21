	paper.view.viewSize = [screen.width,screen.height];
	
	// The amount of circles we want to make:
	var count = 10;
	
	// Create a symbol, which we will use to place instances of later:
	var circle = new Path.Circle(new Point(0, 0), 10);
	circle.style = {
	    fillColor: '#2F4F4F'
	};
	var circle1 = new Path.Circle(new Point(0, 0), 10);
	circle1.style = {
	    fillColor: '#E47833'
	};
	var circle2 = new Path.Circle(new Point(0, 0), 10);
	circle2.style = {
	    fillColor: '#009ACD'
	};
	var circle3 = new Path.Circle(new Point(0, 0), 10);
	circle3.style = {
	    fillColor: '#0EBFE9'
	};
	var circle4 = new Path.Circle(new Point(0, 0), 10);
	circle4.style = {
	    fillColor: '#00C5CD'
	};
	var circle5 = new Path.Circle(new Point(0, 0), 10);
	circle5.style = {
	    fillColor: '#00FFFF'
	};
	var circle6 = new Path.Circle(new Point(0, 0), 10);
	circle6.style = {
	    fillColor: '#EE7600'
	};
	var circle7 = new Path.Circle(new Point(0, 0), 10);
	circle7.style = {
	    fillColor: '#FF3D0D'
	};

	
	var symbol = new Symbol(circle);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol.place(center);
	    placedSymbol.scale(i / count);
	}
	var symbol1 = new Symbol(circle1);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol1.place(center);
	    placedSymbol.scale(i / count);
	}
	var symbol2 = new Symbol(circle2);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol2.place(center);
	    placedSymbol.scale(i / count);
	}
	var symbol3 = new Symbol(circle3);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol3.place(center);
	    placedSymbol.scale(i / count);
	}
	var symbol4 = new Symbol(circle4);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol4.place(center);
	    placedSymbol.scale(i / count);
	}
	var symbol5 = new Symbol(circle5);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol5.place(center);
	    placedSymbol.scale(i / count);
	}
	var symbol6 = new Symbol(circle6);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol6.place(center);
	    placedSymbol.scale(i / count);
	}
	var symbol7 = new Symbol(circle7);
	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = Point.random() * view.size;
	    var placedSymbol = symbol7.place(center);
	    placedSymbol.scale(i / count);
	}
			
	// The onFrame function is called up to 60 times a second:
	function onFrame(event) {
		if (globals.playChecker==1){
			document.getElementById('paperDots').style.visibility="visible";
		    // Run through the active layer's children list and change
		    // the position of the placed symbols:
		    for (var i = 0; i < 20; i++) {
		        var item = project.activeLayer.children[i];
		        
		        // Move the item 1/20th of its width to the right. This way
		        // larger circles move faster than smaller circles:
				item.position.y += item.bounds.height / 20;
		        // If the item has left the view on the right, move it back
		        // to the left:
		        if (item.bounds.left > view.size.width) {
		            item.position.x = -item.bounds.width;
	        	}
	        	if (item.bounds.bottom > view.size.height) {
		            item.position.y = -item.bounds.height;
	        	}
	        }
	     	for (var i = 20; i < 40; i++) {
		        var item = project.activeLayer.children[i];
		        
		        // Move the item 1/20th of its width to the right. This way
		        // larger circles move faster than smaller circles:
				item.position.y += item.bounds.height / 30;
		        		
		        // If the item has left the view on the right, move it back
		        // to the left:
		        if (item.bounds.left > view.size.width) {
		            item.position.x = -item.bounds.width;
	        	}
		        if (item.bounds.bottom > view.size.height) {
		            item.position.y = -item.bounds.height;
	        	}
	        }
		    for (var i = 40; i < 60; i++) {
		        var item = project.activeLayer.children[i];
		        
		        // Move the item 1/20th of its width to the right. This way
		        // larger circles move faster than smaller circles:
				item.position.y += item.bounds.height / 5;
		        // If the item has left the view on the right, move it back
		        // to the left:
		        if (item.bounds.left > view.size.width) {
		            item.position.x = -item.bounds.width;
	        	}
	        }
		    for (var i = 60; i < 80; i++) {
		        var item = project.activeLayer.children[i];
		       
		        // Move the item 1/20th of its width to the right. This way
		        // larger circles move faster than smaller circles:
				item.position.y += item.bounds.height / 10;
		        // If the item has left the view on the right, move it back
		        // to the left:
		        if (item.bounds.bottom > view.size.height) {
		            item.position.y = -item.bounds.height;
	        	}
	        }
		}
	}
	