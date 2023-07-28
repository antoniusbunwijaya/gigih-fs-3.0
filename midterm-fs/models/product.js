const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new mongoose.Schema({
    linkProduct: {
        required: true,
        type:String
    },
    title: {
        required: true,
        type:String
    },
    price: {
        required: true,
        type:Number
    },
    videoId:[{type: Schema.Types.ObjectId, ref: 'VideoThumbnail'}]
})

module.exports = mongoose.model('Product', productSchema)
