const express = require('express');
const caloriesRoute = express.Router();
const CaloriesModel = require('../schemas/calories');

//get all calories data
caloriesRoute.get('/calories', function(req,res,next) {
    CaloriesModel.find(function(err, calories) {
        if(err) return next(err);
        res.json(calories);
    });
});

//get a single calories data by id
caloriesRoute.get('/calories/:id', function(req,res,next) {
    CaloriesModel.findById(req.params.id, function (err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

//post new calories data
caloriesRoute.post('/calories/create', function(req,res,next) {
    CaloriesModel.create(req.body, function(err,post) {
        if(err) return next(err);
        res.json(post);
    })
})

//update calories data by id
caloriesRoute.put('update-calories/:id', function(req,res,next) {
    CaloriesModel.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    })
})
//delete calories data by id
caloriesRoute.delete('/delete-calories/:id', function( req,res,next) {
    CaloriesModel.findByIdAndRemove(req.params.id, req.body, function( err, post) {
        if(err) return next(err);
        res.json(post);
    })
})

module.exports = caloriesRoute;