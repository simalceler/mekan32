var express = require('express');
var router = express.Router();

//anasayfay� y�neten metot
module.export.index=function (req, res, next) {
  res.render('index', { title: 'Express' });
}

