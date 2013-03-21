			globals = {}
			globals.noteColor = "white";
			globals.playChecker = 0;
			paper.view.viewSize = [1440,1000];
			
			var count = 150;
			var path = new Path.Circle(new Point(0, 0), 10);
			
			path.style = {
				fillColor: 'white',
				strokeColor: 'black'
			};
			var symbol = new Symbol(path);
			
			for (var i = 0; i < count; i++) {
				var center = Point.random() * view.size;
				var placedSymbol = symbol.place(center);
				placedSymbol.scale(i / count);
			}
			function onFrame(event) {
				if(globals.playChecker==1) {
					for (var i = 0; i < count; i++) {
						var item = project.activeLayer.children[i];
							item.symbol.definition.style.fillColor = globals.noteColor;
							item.position.x += item.bounds.width / 20;
					if (item.bounds.left > view.size.width) {
						item.position.x = -item.bounds.width;
					}
				}
			}
		}