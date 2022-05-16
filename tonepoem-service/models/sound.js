// Coded by: Jiyoon Pyo
// Database Populated by: Seyun Kim

const mongoose = require('mongoose');

// The soundScheman contains 5 items as shown below
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
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Sound', soundSchema);