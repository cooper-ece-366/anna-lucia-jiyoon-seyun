//Coded by: Jiyoon Pyo
const mongoose = require('mongoose');

const soundSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    artist: {
        type: String,
        require: true
    },
    album: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Sound', soundSchema);