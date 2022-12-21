const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Not Currently in use but will be in a future iteration */
const devSkillsSchema = new Schema({
  name: String,
  description: String,
  anyOtherMetaData: String,
  steps: [
    {
      title: String,
      Description: String,
      terminalCommand: String,
      completed: Boolean,
      otherStepSpecificData: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DevSkill', devSkillsSchema);