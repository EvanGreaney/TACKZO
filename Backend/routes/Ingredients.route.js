const express = require('express');
const ingredientsRoute = express.Router();
const IngredientsModel = require('../schemas/Ingredients')

//GET ALL ingresdient Lists
ingredientsRoute.get('/', function(req,res,next) {
    IngredientsModel.find(function(err, ingredients){
        if(err) return next(err);
        res.json(ingredients);
    });
});

//Get a single ingredients List
ingredientsRoute.get('/ingredients/:id', function(req,res,next) {
    IngredientsModel.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//POST an Ingredients List
ingredientsRoute.post('/create', function(req,res,next) {
    IngredientsModel.create(req.body, function(err,post) {
        if(err) return next(err);
        res.json(post);
    });
});
//Update an Ingredients List
ingredientsRoute.put('/update-ingredientsList/:id', function(req,res,next) {
    IngredientsModel.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

//Delete an Ingredients List
ingredientsRoute.delete('/delete-ingredients/:id', function(req,res,next) {
    IngredientsModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if(err) return next(err);
        res.json(post);
    });
});
  
module.exports = ingredientsRoute;