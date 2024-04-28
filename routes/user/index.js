var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/home', { title: 'Home', path: req.path});
});

router.get('/about', function (req, res, next) {
  res.render('pages/about', { title: 'About', path: req.path});
});

router.get('/account', function (req, res, next) {
  res.render('pages/account', { title: 'Account', path: req.path});
});
router.get('/cart', function (req, res, next) {
  res.render('pages/cart', { title: 'Cart', path: req.path});
});

router.get('/product', function (req, res, next) {
  res.render('pages/product', { title: 'Product', path: req.path});
});

router.get('/catalouge', function (req, res, next) {
  res.render('pages/catalouge', { title: 'Catalouge', path: req.path});
});

module.exports = router;
