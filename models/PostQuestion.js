const mongoose = require('mongoose');


const postQuestion = mongoose.Schema({
    product_id: {
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
    asker_name: {
        type: String,
        required: true
    },
    asker_email: {
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

module.exports = mongoose.model('Questions', postQuestion);