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
        type: Date,
        required: false
    }
});


const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;


//this one.. here the app is not working
//okay le t see me in this one