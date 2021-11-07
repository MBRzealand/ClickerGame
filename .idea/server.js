const express = require("express");
const mongoose = require("mongoose");
const scoreRouter = require("./routes/scoreRoutes.js");

const app = express();

app.get('/', function(request, response){
    response.sendFile('C:\\Users\\mikma\\ClickerGame\\.idea\\game\\clickcounter.html');
});

app.get('/script', (req,res) => {
    res.sendFile("C:\\Users\\mikma\\ClickerGame\\.idea\\game\\clickcounter.js");
});

app.get('/css', (req, res) => {
    res.sendFile("C:\\Users\\mikma\\ClickerGame\\.idea\\game\\clickcounter.css");
});

app.use(express.static('C:\\Users\\mikma\\ClickerGame\\.idea\\game'))
app.use(express.json());

mongoose.connect(
    "mongodb+srv://TallBoye:cxCTHgOWfzK5Su55@tallboye.mtrsh.mongodb.net/Tallboye?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

app.use(scoreRouter);

app.listen(3000, () => {
    console.log("Server is running...");
});