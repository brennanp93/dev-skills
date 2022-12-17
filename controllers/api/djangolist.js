const DjangoList = require('../../models/djangoList');

module.exports = {
    index,
    updateBool
};

async function index(req, res) {
    const entireCheckList = await DjangoList.find({});
    res.json(entireCheckList)
}

async function updateBool(req, res) {
    let id = req.body._id;
    // const filter = { _id: id }
    const update = { completed: req.body.completed }
    const updatedItem = await DjangoList.findOneAndUpdate({ _id: id }, update)
    res.json(updatedItem)
}

