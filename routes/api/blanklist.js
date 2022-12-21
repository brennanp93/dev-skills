const express = require('express');
const router = express.Router();
const blankListCtrl = require('../../controllers/api/blanklist')
// const stepsCtrl = require('../../controllers/api/steps')
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/blanklist
router.get('/', ensureLoggedIn,  blankListCtrl.index);

// Reset Entire List
router.put('/reset/blanklist', ensureLoggedIn, blankListCtrl.reset)

// Update Boolean Only
router.put('/:id', ensureLoggedIn, blankListCtrl.updateBool);

// Update list item information
router.put('/:id/update', ensureLoggedIn, blankListCtrl.update);

//DELETE /api.notes/:id
router.delete('/:id', ensureLoggedIn, blankListCtrl.delete);

// POST /api/blanklist
router.post('/', ensureLoggedIn, blankListCtrl.create);

module.exports = router;