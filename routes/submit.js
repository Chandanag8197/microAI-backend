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

    const answerText = answer.toLowerCase();
    const requiredKeywords = question.keywords.map(k => k.toLowerCase());

    const matchedKeywords = requiredKeywords.filter(keyword => {
  const words = keyword.split(/\s+/);
  return words.every(word => answerText.includes(word));
});

    const missingKeywords = requiredKeywords.filter(keyword =>
      !matchedKeywords.includes(keyword)
    );

    const score = Math.round((matchedKeywords.length / requiredKeywords.length) * 100);

    let evaluation = "";

    if (score === 100) {
      evaluation = "✅ Excellent! You covered all key points.";
    } else if (score >= 50) {
      evaluation = `🟡 Partial Answer. You mentioned ${matchedKeywords.length} of ${requiredKeywords.length} key points.`;
    } else {
      evaluation = `❌ Needs Improvement. You only covered ${matchedKeywords.length} of ${requiredKeywords.length} key points.`;
    }

    res.json({
      evaluation,
      score: `${score}%`,
      matchedKeywords,
      missingKeywords,
      suggestion: missingKeywords.length > 0
        ? `Try to include: ${missingKeywords.join(', ')}.`
        : ""
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ evaluation: "Internal Server Error" });
  }
});

module.exports = router;
