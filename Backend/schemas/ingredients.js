const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IngredientsSchema = new Schema({
    ingredients: { type: [{ type:String, default: undefined }] ,},
    servings: { type:Number }
}, {
    collection: 'ingredients'
})

module.exports = mongoose.model('ingredients', IngredientsSchema)