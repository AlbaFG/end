var express = require('express');
var router =express.Router();
const phones = require('./../mocks/phoneMocks');

/* GET home page.
router.get('/', function(req, res, next) {
  //res.render('phones', { title: 'Phones' });
  res.status(200).json(phones.phoneList);
});
*/
router.get('/phones', function (req,res,next){
  res.status(200).json(phones.phoneList);
});
module.exports = router;
