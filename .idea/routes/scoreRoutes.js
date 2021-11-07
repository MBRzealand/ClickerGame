const express = require("express");
const scoreModel = require("../models/score");
const app = express();

app.get("/scores", async (request, response) => {
    const scores = await scoreModel.find({});

    try {
        response.send(scores);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/score", async (request, response) => {
    const score = new scoreModel(request.body);

    try {
        await score.save();
        response.send(score);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;