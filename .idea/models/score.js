const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    tomatoes: {
        type: Number,
        required: true,
    },
    peppers: {
        type: Number,
        required: true,
    },
    carrots: {
        type: Number,
        required: true,
    },
    potatos: {
        type: Number,
        required: true,
    },
    money: {
        type: Number,
        required: true,
    },
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;