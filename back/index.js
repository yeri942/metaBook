const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const passport = require("passport");

// middlewares
const loginRequired = require("./middlewares/login-required");

require("./passport")();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.use(
    session({
        secret: "10Team",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/", require("./router/index"));

app.listen(process.env.port, () => {
    console.log("Server is working : PORT - ", process.env.port);
});

mongoose
    .connect(process.env.mongodbURL)
    .then(() => {
        console.log("MongoDB connected...");
    })
    .catch((err) => console.log(err));
