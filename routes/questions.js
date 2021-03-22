const express = require('express');
const router = express.Router();
const Question = require('../models/PostQuestion');

router.get('/:product_id', async (req, res) => {
    try {
        const questions = await Question.find({ 'product_id': req.params.product_id }).limit(5);
        res.json(questions).status(200);
    } catch (err) {
        res.json({message: err})
    }
})

router.post('/', async (req, res) => {
    const post = new Question({
        product_id: req.body.product_id,
        body: req.body.body,
        asker_name: req.body.asker_name,
        asker_email: req.body.asker_email,
        reported: req.body.reported,
        helpful: req.body.helpful
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err});
    }
})


module.exports = router;
