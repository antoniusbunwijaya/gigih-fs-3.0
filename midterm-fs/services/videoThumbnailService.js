const VideoThumbnail = require('../models/videoThumbnail')
const Product = require("../models/product");
const Comment = require("../models/comment");

class VideoThumbnailService{

    postThumbnail(body){
        const videoThumbnail = new VideoThumbnail({
            urlImageThumbnail: body.urlImageThumbnail,
        })
        videoThumbnail.save();
    }

    async getThumbnails() {
        return await VideoThumbnail.find();
    }

    async getThumbnailById(videoId) {
        return await VideoThumbnail.findById(videoId);
    }

    async getProducts(videoId) {
        return await Product.find({videoId: videoId});
    }

    postProduct(body, videoId){
        const product = new Product({
            linkProduct: body.linkProduct,
            title: body.title,
            price: body.price,
            videoId: videoId
        })

        return  product.save();
    }

    async getComments(videoId) {
        return await Comment.find({videoId: videoId});
    }

    postComment(body){
        const comment = new Comment({
            username: body.username,
            comment: body.comment,
            videoId: params.videoId
        })
        return comment.save();
    }
}

module.exports = VideoThumbnailService;
