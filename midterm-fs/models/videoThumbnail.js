const mongoose = require('mongoose');

const videoThumbnailSchema = new mongoose.Schema({
    urlImageThumbnail: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('VideoThumbnail', videoThumbnailSchema)
