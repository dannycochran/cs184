// Express requires these dependencies
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// Configure our application
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

// Configure error handling
app.configure('development', function(){
  app.use(express.errorHandler());
});

// Setup Routes
app.get('/', routes.signup);
app.get('/signupFail', routes.signupFail);
app.get('/signup', routes.signup);
app.get('/tuner', routes.index);
app.get('/users', user.list);
        
// configure email authentication
app.post('/signup', function(res,req) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    if (res.body.user.email.match(/@/i)) {
        var email = res.body.user.email;
        saveEmail(email);
        req.redirect('/tuner');
    } else {
        req.redirect('/signupFail');
    }
});

// configure database (not yet complete :( )
function saveEmail(email) {
    var databaseUrl = "mydb"; // "username:password@example.com/mydb"
    var collections = ["emails"]
    var db = require("mongojs").connect(databaseUrl, collections);
    db.emails.save({emailAddress: email})
/*
    db.emails.find({email: "daniel@cochrans.org"}, function(err, emails) {
      if( err || !emails) console.log("No users found");
      else emails.forEach( function(userEmail) {
        console.log(userEmail);
      } );
    });
*/
}

// Enable Socket.io
var server = http.createServer(app).listen( app.get('port') );
var io = require('socket.io').listen( server );

// A user connects to the server (opens a socket)
io.sockets.on('connection', function (socket) {

  // (2): The server recieves a ping event
  // from the browser on this socket
  socket.on('ping', function ( data ) {
  
    console.log('socket: server recieves ping (2)');

    // (3): Emit a pong event all listening browsers
    // with the data from the ping event
    io.sockets.emit( 'pong', data );   
    
    console.log('socket: server sends pong to all (3)');

  });

  socket.on( 'drawCircle', function( data, session ) {

    console.log( "session " + session + " drew:");
    console.log( data );


    socket.broadcast.emit( 'drawCircle', data );

  });

});

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});