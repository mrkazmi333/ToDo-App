const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    }
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;