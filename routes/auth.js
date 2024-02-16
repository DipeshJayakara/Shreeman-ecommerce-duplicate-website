const express = require('express');
const router = express.Router();
router.post('/contact',authController.register);
router.post('/read more',authController.register);


module.exports = router;