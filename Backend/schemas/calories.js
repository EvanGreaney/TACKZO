const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CaloriesSchema = new Schema({
    noOfMeals: { type: Number },
    maxCalories: { type: Number },
    noOfPeople: { type: Number },
    calBreakfast: { type: Number },
    calLunch: { type: Number },
    calDinner: { type: Number }
}, {
    collection: 'calories'
})

module.exports = mongoose.model('calories',CaloriesSchema);