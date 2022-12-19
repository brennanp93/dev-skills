const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const expressListSchema = new Schema({
    stepTitle: String,
    description: String,
    terminalCommand: String,
    completed: Boolean,
    otherStepSpecificData: String,
    sortOrder: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ExpressList', expressListSchema)