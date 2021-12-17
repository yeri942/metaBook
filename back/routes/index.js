const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.redirect("/1");
});

module.exports = router;
