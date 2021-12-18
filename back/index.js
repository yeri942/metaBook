const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;

const { User } = require("./models/User");
const { Post } = require("./models/Post");
const { Comment } = require("./models/Comment");

require("dotenv").config();

mongoose
    .connect(process.env.mongdbURL, {
        useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("schema 작업");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
