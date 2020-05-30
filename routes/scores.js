const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

//Get all scores
router.get('/', async (req,res) => {
  try {
    const scores = await Score.find({}).sort({"score": -1})
    // sort({ score: -1 });
    res.json(scores)
  }catch(err){
    res.json({ message: err });
  }
});

//Submit Score
router.post('/', async (req, res) => {
  const score = new Score({
    name: req.body.name,
    score: req.body.score
  });
  try{
    const saveScore = await score.save()
    res.json(saveScore);
  }catch(err){
    res.json({ message: err});
  };
});

module.exports = router;