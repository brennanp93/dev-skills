const ExpressList = require('../../models/expresslist');

module.exports = {
  index,
  updateBool,
  reset,
};

async function reset(req, res) {
  const resetList = await ExpressList.updateMany({ completed: true }, { completed: false });
  res.json(resetList);
}

async function index(req, res) {
  const entireCheckList = await ExpressList.find({}).sort({ sortOrder: 1 });
  res.json(entireCheckList);
}

async function updateBool(req, res) {
  let id = req.body._id;
  const filter = { _id: id };
  const update = { completed: req.body.completed };
  const updatedItem = await ExpressList.findOneAndUpdate(filter, update);
  res.json(updatedItem)
}

