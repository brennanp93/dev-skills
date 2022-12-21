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
