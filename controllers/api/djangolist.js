const DjangoList = require('../../models/djangolist');

module.exports = {
    index,
    updateBool,
    reset
};

async function reset(req, res) {
    const resetList = await DjangoList.updateMany({ completed: true }, { completed: false });
    res.json(resetList);
}

async function index(req, res) {
    const entireCheckList = await DjangoList.find({}).sort({ sortOrder: 1 });
    res.json(entireCheckList);
}

async function updateBool(req, res) {
    let id = req.body._id;
    const filter = { _id: id };
    const update = { completed: req.body.completed };
    const updatedItem = await DjangoList.findOneAndUpdate(filter, update);
    res.json(updatedItem);
}

