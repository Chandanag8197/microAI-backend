// routes/submit.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.post('/submit', async (req, res) => {
  const { answer, questionText } = req.body;

  try {
    // Fetch the question by its text
    const question = await Question.findOne({ questionText });

    if (!question) {
      return res.status(404).json({ evaluation: "Question not found." });
    }

    // Lowercase both for keyword matching
    const answerText = answer.toLowerCase();
    const requiredKeywords = question.keywords;

    const matchedKeywords = requiredKeywords.filter(keyword =>
      answerText.includes(keyword.toLowerCase())
    );

    const score = (matchedKeywords.length / requiredKeywords.length) * 100;

    let evaluation;
    if (score === 100) {
      evaluation = "✅ Excellent! You covered all key points.";
    } else if (score >= 50) {
      evaluation = `🟡 Partial answer. You mentioned ${matchedKeywords.length} of ${requiredKeywords.length} key points.`;
    } else {
      evaluation = `❌ Try again. You missed important keywords.`;
    }

    res.json({ evaluation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ evaluation: "Internal Server Error" });
  }
});

module.exports = router;
