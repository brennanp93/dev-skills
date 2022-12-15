// // const blanklist = require('../../models/blanklist');
// const BlankList = require('../../models/blanklist');

// module.exports = {
//     create,
// }

// async function create(req, res) {
//     try {
//         const checkList = await BlankList.findOne({ name: 'New Check List' })
//         const step = checkList.steps
//         const newSteps = step.push(req.body)
//         res.json(newSteps)
//         console.log(checkList, "req.body")
//     } catch {
//         res.status(400).json(err);
//     }
//     // let newStep = req.body.steps.push(step)
//     // res.json(step);
//     // console.log(Array.isArray(step), "STEP")
//     // console.log(newSteps, "STEP")
//     // console.log(step.steps, "STEPArr")
// }