const express = require('express');
const path=require('path');
const router = express.Router();

//getting the home page
router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname,'/../views/index.html'));
});

module.exports = router;
