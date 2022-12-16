const { getNextKeyDef } = require('@testing-library/user-event/dist/keyboard/getNextKeyDef');
const BlankList = require('../../models/blanklist');

// const { deleteListItem } = require('../../src/utilities/blanklist-api');

module.exports = {
    create,
    index,
    delete: deleteItem,
    update,
    updateBool
};

async function index(req, res) {
    const entireCheckList = await BlankList.find({ user: req.user._id });
    res.json(entireCheckList)
}

async function update(req, res) {
    try {
        await BlankList.findByIdAndUpdate(
            { _id: req.params.id }, req.body
        )
        const listItem = await BlankList.find({ user: req.user._id })

        res.json(listItem)
    } catch (err) {
        return next(err)
    }
}

async function updateBool(req, res) {
    // console.log(req.body._id, "body")
    // console.log(req.params.id, "params")
    // console.log(id, "ID")
    // console.log(req.body, "params")
    // console.log(req.body.completed, "completed")
    let id = req.body._id;
    const filter = { _id: id  }
    const update = { completed: req.body.completed }
    const updatedItem = await BlankList.findOneAndUpdate({_id: id}, update)
    res.json(updatedItem)
    console.log(updatedItem, "listITEM")
}

// async function updateBool(req, res) {
//     await BlankList.findByIdAndUpdate(
//         { _id: req.params.id }, req.body.completed
//     )
//     const listItem = await BlankList.find({ user: req.user._id })
//     res.json(listItem)
//     // console.log(listItem)
// }

// async function updateNote(req, res) {
//     try {
//       await Note.findByIdAndUpdate(
//         {_id: req.params.id}, req.body
//         )
//       const note = await Note.find({user: req.user._id})
//       res.json(note);
//     } catch (err) { 
//       return next(err);
//     }
//   }





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

async function deleteItem(req, res) {
    // console.log(req.body.user, "req.body.user")
    // console.log(req.user._id, "req.user._id")
    req.body.user = req.user._id;
    // console.log(req.params.id, "req.params.id")
    const listItem = await BlankList.findOneAndDelete(req.params.id);
    // console.log(listItem, "List Item")
    res.json(listItem)

}

