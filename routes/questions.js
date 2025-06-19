const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Add a question
router.post('/add', async (req, res) => {
  try {
    const { topic, questionText, keywords } = req.body;
    const question = new Question({ topic, questionText, keywords });
    await question.save();
    res.status(201).json({ message: 'Question added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get random question by topics (comma-separated)
router.get('/random', async (req, res) => {
  try {
    const topics = req.query.topics ? req.query.topics.split(',') : ["data-structures", "algorithms"];
    if (topics.length === 0) return res.status(400).json({ error: 'No topics provided' });

    const questions = await Question.find({ topic: { $in: topics } });
    if (questions.length === 0) return res.status(404).json({ error: 'No questions found' });

    const random = questions[Math.floor(Math.random() * questions.length)];
    res.json(random);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all questions by topics (comma-separated), sorted by _id (insertion order)
// router.get('/all', async (req, res) => {
//   try {
//     const topics = req.query.topics ? req.query.topics.split(',') : ["data-structures", "algorithms"];
//     if (topics.length === 0) return res.status(400).json({ error: 'No topics provided' });

//     const questions = await Question.find({ topic: { $in: topics } });
//     if (questions.length === 0) return res.status(404).json({ error: 'No questions found' });

//     // Pick one random question
//     const random = questions[Math.floor(Math.random() * questions.length)];
//     res.json(random);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;