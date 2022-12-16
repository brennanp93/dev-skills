const express = require('express');
const router = express.Router();
const devSkillsCtrl = require('../../controllers/api/devskills')

router.get('/', devSkillsCtrl.index);


module.exports = router;