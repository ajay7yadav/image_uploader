const mongoose = require('mongoose');

const Image = new mongoose.Schema({
    file : {
        type : String
    }
});

module.exports = mongoose.model('image',Image);