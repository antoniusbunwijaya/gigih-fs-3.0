const express = require('express');

const router = express.Router();

const Product = require("../models/product");
const Comment = require("../models/comment");

const Service = require('../services/videoThumbnailService');

const service = new Service();

// Submit Video Thumbnail
router.post('/video-thumbnails', async (req, res) => {

    try {
        service.postThumbnail(req.body);
        res.status(201).json({status: 'success'})
    } catch (error) {
        res.status(400).json({status: 'fail', message: error.message});
    }

});

// Video Thumbnail List
router.get('/video-thumbnails', async (req, res) => {
    try {
        const videoThumbnailsResponse = service.getThumbnails().map((entity) =>({
            videoId: entity.id,
            urlImageThumbnail: entity.urlImageThumbnail,
        }));
        res.json(videoThumbnailsResponse);
    }catch (error){
        res.status(500).json({message: error.message})
    }
});

// Submit Product
router.post('/video-thumbnails/:videoId/products', async (req, res) => {
    const videoId = req.params.videoId;
    const videoIdAvailable =  service.getThumbnailById(videoId);
    if (videoIdAvailable === null){
        return res.status(404).json({status: 'fail',message: 'Video Thumbnail doesn\'t exist'});
    }

    try {
        service.postProduct(req.body, videoId);
        res.status(201).json({status: 'success'})
    } catch (error) {
        res.status(400).json({status: 'fail',message: error.message});
    }

});

// Product List
router.get('/video-thumbnails/:videoId/products', async (req, res) => {
    const videoId = req.params.videoId;
    const videoIdAvailable =  service.getThumbnailById(videoId);
    if (videoIdAvailable === null){
        return res.status(404).json({message: 'Video Thumbnail doesn\'t exist'});
    }

    try{
        const products = await Product.find({videoId: videoId});
        const productsResponse = products.map((entity) =>({
            productId: entity.id,
            linkProduct: entity.linkProduct,
            title: entity.title,
            price: entity.price
        }));
        res.json(productsResponse)
    }catch (error){
        res.status(500).json({message: error.message})
    }

});

// Submit Comment
router.post('/video-thumbnails/:videoId/comments', async (req, res) => {
    const videoId = req.params.videoId;
    const videoIdAvailable =  service.getThumbnailById(videoId);
    if (videoIdAvailable === null){
        return res.status(404).json({status: 'fail',message: 'Video Thumbnail doesn\'t exist'});
    }

    try {
        service.postComment(req.body);
        res.status(201).json({status: 'success'})
    } catch (error) {
        res.status(400).json({status: 'fail',message: error.message});
    }

});

// Comment List
router.get('/video-thumbnails/:videoId/comments', async (req, res) => {
    const videoId = req.params.videoId;
    const videoIdAvailable =  service.getThumbnailById(videoId);
    if (videoIdAvailable === null){
        return res.status(404).json({status: 'fail',message: 'Video Thumbnail doesn\'t exist'});
    }
    try{
        const comments = await Comment.find({videoId: videoId});
        const commentsResponse = comments.map((entity) =>({
            comment: entity.comment,
            username: entity.username,
            videoId: entity.videoId[0],
        }));
        res.json(commentsResponse)
    }catch (error){
        res.status(500).json({message: error.message})
    }

});

module.exports = router;
