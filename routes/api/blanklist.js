const express = require('express');
const router = express.Router();
const blankListCtrl = require('../../controllers/api/blanklist')
// const stepsCtrl = require('../../controllers/api/steps')

router.post('/', blankListCtrl.create);

router.get('/', blankListCtrl.index);


module.exports = router;