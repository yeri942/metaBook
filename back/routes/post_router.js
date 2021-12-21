module.exports = function (app, Post) {
    //create
    app.post("/post", function (req, res) {
        const post = new Post(req.body);
        post.save(function (err) {
            if (err) {
                console.error(err);
                res.json({ message: "생성 실패" });
                return;
            }
            res.json({ message: "생성 완료!" });
        });
    });

    //list

    //search
    app.get("/post/:title", function (req, res) {
        Post.find({ title: req.params.title }, function (err, post) {
            if (post.length == 0)
                return res.status(404).json({
                    error: "해당 제목을 가진 글이 존재하지 않습니다.",
                });
            if (err) return res.status(500).json({ error: err });
            res.json(post);
        });
    });

    //update
    app.put("/post/:id", function (req, res) {
        Post.findOne({ _id: req.params.id }, function (err, post) {
            if (!post)
                return res
                    .status(404)
                    .json({ error: "해당 글이 존재하지 않습니다." });
            if (err)
                return res.status(500).json({ error: "Database Failure!" });

            post.author = req.body.author;
            post.title = req.body.title;
            post.content = req.body.content;
            post.metaUrl = req.body.metaUrl;
            post.metaThumbUrl = req.body.metaThumbUrl;
            post.likes = req.body.likes;
            post.comments = req.body.comments;

            post.save(function (err) {
                if (err)
                    return res.status(500).json({ error: "Failed to update!" });
                res.json({ message: "수정이 완료되었습니다!" });
            });
        });
    });

    //delete
    app.delete("/post_delete/:id", function (req, res) {
        Post.deleteOne({ _id: req.params.id }, function (err, output) {
            if (err) {
                console.log(err);
            }
            // return res.status(500).json({ error: "Database Failure!" });

            res.json({ message: "삭제 완료" });

            res.status(204).end();
        });
    });
};
