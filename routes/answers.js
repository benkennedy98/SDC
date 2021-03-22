const express = require('express');
const router = express.Router();
const Answer = require('../models/PostAnswer');

router.get('/', async (req, res) => {
    console.log(req.query)
    try {
        const questions = await Answer.find({ 'question_id': req.query.question_id }).limit(5);
        res.json(questions).status(200);
    } catch (err) {
        res.json({message: err})
    }
})

router.post('/', async (req, res) => {
    const post = new Answer({
        question_id: req.body.question_id,
        body: req.body.body,
        answerer_name: req.body.answerer_name,
        answerer_email: req.body.answerer_email,
        reported: req.body.reported,
        helpful: req.body.helpful
    })
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err});
    }
})


module.exports = router;