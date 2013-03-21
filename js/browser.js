var browserCheck = function() {
	var checkBrowser = $.browser;
    var audioContext;
	var fftSize = 8192;
    var buffer = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= fftSize ? _i < fftSize : _i > fftSize; i = 0 <= fftSize ? ++_i : --_i) {
        _results.push(0);
      }
      return _results;
    })();
    
    navigator.getUserMedia = (function() {
      return navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    })();
    if (!navigator.getUserMedia) {
      alert('This tuner requires the latest version of Google Chrome with "Web Audio API" enabled in chrome://flags, or a build of Mozilla Firefox > 20 (currently in development as of February 2013');
    }
    window.AudioContext = (function() {
      return window.webkitAudioContext;
    })();
    if (!window.AudioContext && !navigator.getUserMedia || checkBrowser.version < 20) {
      alert('This tuner requires the latest version of Google Chrome with "Web Audio API" enabled in chrome://flags, or a build of Mozilla Firefox > 20 (currently in development as of February 2013');
    }
    
    // if using webkit 
    if (checkBrowser.webkit == true && checkBrowser.version >530) {
    	audioContext = new AudioContext();
	    bufferFillSize = 2048;
	    bufferFiller = audioContext.createJavaScriptNode(bufferFillSize, 1, 1);
	    bufferFiller.onaudioprocess = function(e) {
	      var b, input, _i, _j, _ref, _ref1, _results;
	      input = e.inputBuffer.getChannelData(0);
	      for (b = _i = bufferFillSize, _ref = buffer.length; bufferFillSize <= _ref ? _i < _ref : _i > _ref; b = bufferFillSize <= _ref ? ++_i : --_i) 	  {
	        buffer[b - bufferFillSize] = buffer[b];
	      }
	      _results = [];
	      for (b = _j = 0, _ref1 = input.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; b = 0 <= _ref1 ? ++_j : --_j) {
	        _results.push(buffer[buffer.length - bufferFillSize + b] = input[b]);
	      }
	      return _results;
	    };
    	Tuner(audioContext, buffer, bufferFiller);
    }
    // if using mozilla 
    else if (checkBrowser.mozilla == true && checkBrowser.version >= 20) {
		audioContext = document.createElement("audio");
    	var audio_status = false;

		function startMedia(param) {
		    try {
		      window.navigator.mozGetUserMedia(param, function(stream) {
		        if (audio_status) {
		          audioContext.mozSrcObject = stream;
		          audioContext.mozSetup(2, 44100);
		          Tuner(audioContext,buffer,0);
		        } 
		      }, function(err) {
		      });
		    } catch(e) {
		    	console.log(e);
		    }
		  }
		function startAudio () {
    		audio_status = true;
    		startMedia({audio:true});
  		}
		startAudio();
		/*
		function loadedMetadata() {
		    sampleRate = audio.mozSampleRate;
		    channel = audio.mozChannels;
		  } 
		  
		function audioAvailable(event) {
				console.log('hello');
		    var frameBuffer = event.frameBuffer;
		    var t = event.time;    
		    var text = "Samples at: " + t + "\n"
		    text += frameBuffer[0] + "  " + frameBuffer[1]
		    raw.innerHTML = text;
		  }
		audio.addEventListener("MozAudioAvailable", audioAvailable, false);
		audio.addEventListener("loadedmetadata", loadedMetadata, false);
		*/
	}
}