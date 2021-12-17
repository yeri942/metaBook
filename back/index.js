const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path"); //Path 모듈은 파일과 Directory 경로 작업을 위한 Utility
const cookieParser = require("cookie-parser"); // 요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어 입니다. express의 request(req) 객체에 cookies 속성이 부여
const logger = require("morgan"); // logging에 도움을주는 미들웨어
const dayjs = require("dayjs"); // 날짜 관련
const port = 3000;

const indexRouter = require("./routes");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.locals.formatDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

mongoose.connect(
    "mongodb+srv://bjung:028599z@cluster0.ds2pk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.on("error", () => {
    console.log("DB ERROR : ", err);
});
db.once("open", () => {
    // connection 처리
    console.log("DB connected");
});

app.listen(port, () => console.log(`Server On ${port}`));
