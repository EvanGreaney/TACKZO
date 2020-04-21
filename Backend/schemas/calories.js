const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CaloriesSchema = new Schema({
    maxCalories: { type: Number },
}, {
    collection: 'calories'
})

module.exports = mongoose.model('calories',CaloriesSchema);