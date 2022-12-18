const express = require('express');
const router = express.Router();
const blankListCtrl = require('../../controllers/api/blanklist')
// const stepsCtrl = require('../../controllers/api/steps')



// GET /api/blanklist
router.get('/', blankListCtrl.index);

router.put('/reset', blankListCtrl.reset)

// Update Boolean Only
router.put('/:id', blankListCtrl.updateBool);

router.put('/:id/update', blankListCtrl.update);

//DELETE /api.notes/:id
router.delete('/:id', blankListCtrl.delete);
// POST /api/blanklist
router.post('/', blankListCtrl.create);


module.exports = router;