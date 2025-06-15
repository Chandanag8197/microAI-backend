const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  keywords: [String] // For evaluation later
});

module.exports = mongoose.model('Question', questionSchema);
