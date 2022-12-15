const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const checkListSchema = new Schema({
    stepTitle: String,
    description: String,
    terminalCommand: String,
    completed: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BlankList', checkListSchema)








// const stepsSchema = new Schema({
//     stepTitle: String,
//     description: String,
//     terminalCommand: String,
//     completed: Boolean

// }, {
//     timestamps: true
// });



// const checkListSchema = new Schema({
//     name: String,
//     listDescription: String,
//     website: String,
//     steps: [stepsSchema],
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     }
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('BlankList', checkListSchema)