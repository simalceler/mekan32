var express = require('express');
var router = express.Router();

//anasayfay� y�neten metot
module.exports.index=function (req, res, next) {
  res.render('index', { title: 'Express' });
}

