const express = require('express');
const router = express.Router();
const djangoListCtrl = require('../../controllers/api/djangolist')

// GET /api/blanklist
router.get('/', djangoListCtrl.index);

// Update Boolean Only
router.put('/:id', djangoListCtrl.updateBool);


module.exports = router;