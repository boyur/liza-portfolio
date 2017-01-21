let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/welcome', { title: 'Елизавета Боюр' });
});

router.get('/works', function(req, res, next) {
  res.render('pages/works', { title: 'Елизавета Боюр' });
});

router.get('/gui', function (req, res) {
  res.render('gui', { title: 'GUI', layout: false });
});

module.exports = router;