const express = require('express');
const router = express.Router();
const expressListCtrl = require('../../controllers/api/expresslist')
// const stepsCtrl = require('../../controllers/api/steps')


// GET /api/blanklist
router.get('/', expressListCtrl.index);

// Update Boolean Only
router.put('/:id', expressListCtrl.updateBool);


module.exports = router;