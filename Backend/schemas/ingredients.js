const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IngredientsSchema = new Schema({
    ingredient1: { type: String },
    ingredient2: { type: String },
    ingredient3: { type: String },
    ingredient4: { type: String },
    ingredient5: { type: String },
}, {
    collection: 'ingredients'
})

module.exports = mongoose.model('ingredients', IngredientsSchema)