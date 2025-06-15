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

// Get random question by topic
router.get('/random/:topic', async (req, res) => {
  try {
    const topic = req.params.topic;
    const questions = await Question.find({ topic });
    if (questions.length === 0) return res.status(404).json({ error: 'No questions found' });

    const random = questions[Math.floor(Math.random() * questions.length)];
    res.json(random);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
