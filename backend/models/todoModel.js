const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todolist = new Schema({
    owner: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('todolist', todolist);