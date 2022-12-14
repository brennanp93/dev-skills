const express = require('express');
const router = express.Router();
const blankListCtrl = require('../../controllers/api/blanklist')

router.post('/', blankListCtrl.create);

module.exports = router;