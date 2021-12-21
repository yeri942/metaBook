const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const multer = require("multer");
const fs = require("fs");

const _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});
const upload = multer({ storage: _storage });
const path = require("path");

const app = express();
const port = 3000;
const schema = mongoose.Schema;

require("dotenv").config();

app.use(morgan("dev"));

const User = require("./models/User");
const user_router = require("./routes/user_router")(app, User);
const Post = require("./models/Post");
const post_router = require("./routes/post_router")(app, Post);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "html"));

app.get("/", (req, res) => {
    res.send("<b>Hello World! ❤</b><br>졸리다");
});

app.get("/upload", function (req, res) {
    res.render("../uploads/upload.pug");
});
app.post("/upload", upload.single("userfile"), function (req, res) {
    res.render("../uploads/post.pug", {
        image: "uploads/" + req.file.filename,
        title: req.body.title,
        content: "IU's songs are good",
    });
    // res.send("Uploaded : " + req.file.filename);
});

app.listen(port, () => {
    console.log("Server is working : PORT - ", port);
});

mongoose
    .connect(process.env.mongodbURL)
    .then(() => {
        console.log("MongoDB connected...");
    })
    .catch((err) => console.log(err));
