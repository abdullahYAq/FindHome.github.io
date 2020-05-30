var express = require('express');
//var hbs = require('express-handlebars')
var router = express.Router();

//var ind = require('views/index')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Finder' });
});
var Obj = {name: 'abd', age: 18, home: {lang: '565456456465465', lat: '54654645464545445'}};
router.get('/findMap', function(req, res, next) {
  res.render('findMAp');
});

//var Obj = {name: 'abd', age: 18, home: {lang: '565456456465465', lat: '54654645464545445'}};
router.get('/AddProp', function(req, res, next) {
  const { v4: uuidv4 } = require('uuid');
  var id = uuidv4();
  res.render('property-submit', {v4:id});
});

// ha.registerHelper('ifCond', function(names) {
//   for ( i = 0; i< names.length; i++){
//     if(names[i] === 10) {
//       return true;
//     }
//   }
  
//   return false;
// });

module.exports = router;
