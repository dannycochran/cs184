/*
 * Module dependencies
 */
var express = require('express')
  , nib = require('nib')

var port = process.env.PORT || 5000;
var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home', scripts: ['vendor/d3.v2.js']}
  ) 
})

app.get('/tuner', function (req, res) {
  res.render('tuner',
  { title : 'Tuner', scripts: ['js/test.js']}
  )
})

app.listen(port)