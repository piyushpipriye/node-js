const express = require('express');
const multer = require('multer');// package used for file upload
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.filename + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")
app.post('/upload', upload, async (req, resp) => {
    resp.send("file upload")
})

app.listen(5000)