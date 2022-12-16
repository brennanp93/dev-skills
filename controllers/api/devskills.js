// const { getNextKeyDef } = require('@testing-library/user-event/dist/keyboard/getNextKeyDef');
const DevSkill = require('../../models/devskills');


module.exports = {
    index,
};

async function index(req, res) {
    const allDevSkills = await DevSkill.find({});
    res.json(allDevSkills)
}