const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = new mongoose.Schema({
    username: {
        required: true,
        type:String
    },
    comment: {
        required: true,
        type: String
    },
    timestamp: {
        required: true,
        type: Date,
        default: Date.now()
    },
    videoId:[{type: Schema.Types.ObjectId, ref: 'VideoThumbnail'}]
})

module.exports = mongoose.model('Comment', commentSchema)
