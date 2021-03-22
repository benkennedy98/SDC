const mongoose = require('mongoose');

const postAnswer = mongoose.Schema({
    question_id: {
        type: Number,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    date_written: {
        type: Date,
        default: Date.now
    },
    answerer_name: {
        type: String,
        required: true
    },
    answerer_email: {
        type: String,
        required: true
    },
    reported: {
        type: Boolean,
    },
    helpful: {
        type: Number,
    }

})

module.exports = mongoose.model('Answers', postAnswer);