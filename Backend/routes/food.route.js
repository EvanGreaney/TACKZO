const express = require('express');
const foodRoute = express.Router();
const foodModel = require('../schemas/Food');

//get all mealTypes data
foodRoute.get('/', function(req,res,next) {
    foodModel.find(function(err, mealType) {
        if(err) return next(err);
        res.json(mealType);
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