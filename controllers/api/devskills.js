// const { getNextKeyDef } = require('@testing-library/user-event/dist/keyboard/getNextKeyDef');
const DevSkill = require('../../models/devskills');


module.exports = {
    index,
    updateBool,
    getOne
};

async function index(req, res) {
    const allDevSkills = await DevSkill.find({});
    // console.log(allDevSkills)
    res.json(allDevSkills)
}

async function getOne(req, res){
    console.log(req.body)
   const updatedBool = await DevSkill.findById(req.body._id)
   res.json(updatedBool) 
}


async function updateBool(req, res) {
    let id = req.body._id;
    // console.log(req.body.completed)
    // console.log(id)
    const filter = { _id: id  }
    const update = { completed: req.body.completed }
    // console.log(update)
    // console.log(req.body)
    const updatedItem = await DevSkill.findOneAndUpdate({_id: id}, update)
    res.json(updatedItem)
}