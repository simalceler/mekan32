var express = require('express');
var router = express.Router();

//anasayfayý yöneten metot
module.export.index=function (req, res, next) {
  res.render('index', { title: 'Express' });
}

