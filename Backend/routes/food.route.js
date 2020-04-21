const express = require('express');
const foodRoute = express.Router();
const foodModel = require('../schemas/Food');

//get all food data
foodRoute.get('/food', function(req,res,next) {
    foodModel.find(function(err, food) {
        if(err) return next(err);
        res.json(food);
    });
});

//get a single food data by id
foodRoute.get('/food/:id', function(req,res,next) {
    foodModel.findById(req.params.id, function (err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

//post new food data
foodRoute.post('/food/create', function(req,res,next) {
    foodModel.create(req.body, function(err,post) {
        if(err) return next(err);
        res.json(post);
    })
})

//update food data by id
foodRoute.put('update-food/:id', function(req,res,next) {
    foodModel.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    })
})
//delete food data by id
foodRoute.delete('/delete-food/:id', function( req,res,next) {
    foodModel.findByIdAndRemove(req.params.id, req.body, function( err, post) {
        if(err) return next(err);
        res.json(post);
    })
})

module.exports = foodRoute;