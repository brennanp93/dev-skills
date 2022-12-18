const express = require('express');
const router = express.Router();
const djangoListCtrl = require('../../controllers/api/djangolist')

// GET /api/blanklist
router.get('/', djangoListCtrl.index);

router.put('/reset', djangoListCtrl.reset)

// Update Boolean Only
router.put('/:id', djangoListCtrl.updateBool);


module.exports = router;