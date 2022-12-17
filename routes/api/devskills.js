const express = require('express');
const router = express.Router();
const devSkillsCtrl = require('../../controllers/api/devskills')

router.get('/', devSkillsCtrl.index);

// router.get('/:id/getone', devSkillsCtrl.getOne);

router.put('/:id/bool', devSkillsCtrl.updateBool);

module.exports = router;