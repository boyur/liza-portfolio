let express = require('express');
const path = require('path');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/welcome', { title: 'Елизавета Боюр' });
});

router.get('/works', function(req, res, next) {
  res.render('pages/works', { title: 'Мои работы' });
});

router.get('/gui', function (req, res) {
  res.render('gui', { title: 'GUI', layout: false });
});

module.exports = router;