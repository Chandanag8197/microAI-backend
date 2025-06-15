// scripts/seedQuestions.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../models/Question'); // path to your model

dotenv.config(); // Load MongoDB URI

const sampleQuestions = [
  {
    topic: "data-structures",
    questionText: "What is an array?",
    keywords: ["array", "index", "elements"]
  },
  {
    topic: "data-structures",
    questionText: "What is a linked list?",
    keywords: ["linked", "list", "nodes"]
  },
  {
    topic: "data-structures",
    questionText: "Explain the difference between stack and queue.",
    keywords: ["stack", "queue", "FIFO", "LIFO"]
  },
  {
    topic: "algorithms",
    questionText: "What is bubble sort?",
    keywords: ["bubble", "sort", "comparison", "adjacent"]
  },
  {
    topic: "algorithms",
    questionText: "What is the time complexity of binary search?",
    keywords: ["binary", "search", "logarithmic", "time complexity"]
  }
];

async function insertQuestions() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Question.insertMany(sampleQuestions);
    console.log('✅ Sample questions inserted successfully');
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error inserting questions:', err);
    mongoose.disconnect();
  }
}

insertQuestions();
