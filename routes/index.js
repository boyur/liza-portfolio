let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gui', function (req, res) {
  res.render('gui', { title: 'GUI', layout: false });
});

module.exports = router;
