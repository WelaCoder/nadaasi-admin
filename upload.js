const multer = require('multer');
const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/ jpeg" : "jpeg",
    "image/jpg" : "jpg",
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'client/build/upload');
    },
    filename: function (req, res, cb) {
        const ext = MIME_TYPE_MAP[file.mimetype]
        cb(null, uuid() + "." + ext)
    },
});
module.exports = multer({
    storage: storage,
    limits: { fieldSize: '100MB ', fieldSize: '100MB' },
});