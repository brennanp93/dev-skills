const BlankList = require('../../models/blanklist');

module.exports = {
    create,
}

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        const listItem = await BlankList.create(req.body);
        res.json(listItem);
        console.log(listItem)
    } catch {
        res.status(404);
    }
}