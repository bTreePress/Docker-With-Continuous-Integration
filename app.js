// Sample node.js web app for bTreePress How-To-Use-Docker-With-Continous-Integration-To-Build-A-DevOps-Automated-Workflow
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

app.listen(8080);
module.exports.getApp = app;