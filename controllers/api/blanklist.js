const BlankList = require('../../models/blanklist');

module.exports = {
    create,
    index,
    delete: deleteItem,
    update,
    updateBool,
    reset 

};

async function reset(req, res) {
    const resetList = await BlankList.updateMany({completed: true}, { completed: false})
    res.json(resetList)
}

async function index(req, res) {
    console.log(req.user._id)
    const entireCheckList = await BlankList.find({ user: req.user._id });
    // const entireCheckList = await BlankList.find({});
    res.json(entireCheckList)
}

async function update(req, res) {
    try {
        await BlankList.findByIdAndUpdate({ _id: req.params.id }, req.body)
        const listItem = await BlankList.find({ user: req.user._id })
        res.json(listItem)
    } catch (err) {
        return next(err)
    }
}

async function updateBool(req, res) {
    let id = req.body._id;
    // const filter = { _id: id  }
    const update = { completed: req.body.completed }
    const updatedItem = await BlankList.findOneAndUpdate({ _id: id }, update)
    res.json(updatedItem)
}

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        const listItem = await BlankList.create(req.body);
        res.json(listItem);
    } catch {
        res.status(404);
    }
}

async function deleteItem(req, res) {
    req.body.user = req.user._id;
    const listItem = await BlankList.findOneAndDelete(req.params.id);
    res.json(listItem)
}

