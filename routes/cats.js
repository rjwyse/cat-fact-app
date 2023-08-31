const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats.js')
/* GET users listing. */
router.get('/fact', catsCtrl.fact);

module.exports = router;
