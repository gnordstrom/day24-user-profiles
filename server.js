var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));
app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);

var port = 3000;
app.listen(port, function(){
  console.log('Server is now live on port ' + port);
});
