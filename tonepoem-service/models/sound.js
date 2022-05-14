//Coded by: Jiyoon Pyo
const mongoose = require('mongoose');

const soundSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    adjs: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('Sound', soundSchema);