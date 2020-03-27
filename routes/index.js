/**
 * something about routes.
 * https://expressjs.com/zh-cn/starter/faq.html
 */
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
