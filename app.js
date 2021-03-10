/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var search = require('./routes/search');
var CPH = require('./routes/CollectionPH');
var PPH = require('./routes/ProfilePH');
var GPH = require('./routes/GroupPH');
var APG = require('./routes/apologyPH');
//var rsvp = require('./routes/rsvp');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);

// app.get('/users', user.list);
app.get('/search', search.view);
app.get('/CPH', CPH.view);
app.get('/PPH', PPH.view);
app.get('/GPH', GPH.view);
app.get('/APG', APG.view);

// Add routes here
//app.get('/rsvp', rsvp.adminView);
//app.post('/addRSVP', rsvp.addRSVP);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
