const BlankList = require('../../models/blanklist');

module.exports = {
    create,
    index
}

async function index(req, res) {
    const entireCheckList = await BlankList.find({user: req.user._id});
    res.json(entireCheckList)
} 

async function create(req, res) {
    req.body.user = req.user._id;
    // console.log(req.body.user)
    try {
        const listItem = await BlankList.create(req.body);
        res.json(listItem);
        // console.log(listItem)
    } catch {
        res.status(404);
    }
}