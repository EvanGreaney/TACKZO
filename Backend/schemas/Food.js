const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FoodTypeSchema = new Schema({
    food: { type: String },
}, {
    collection: 'food'
})

module.exports = mongoose.model('food',FoodTypeSchema);