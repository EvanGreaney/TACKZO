const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// Connect to mongo Database
const mongoDatabase = { db: 'mongodb+srv://groupProject:Project2020@cluster0-akbg4.mongodb.net/test?retryWrites=true&w=majority' }
const dataBaseConfig = mongoDatabase
mongoose.connect(dataBaseConfig.db, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false 
    }).then(() => 
    {
        console.log('Connected to Mongo Database!')
    },
    error => {
        console.log('Error could not connect =>' + error)
    }
)

//set up the port with express 
const app = express();
const ingredientsRoute = require('./routes/Ingredients.route')
const foodsRoute = require('./routes/food.route')
const caloriesRoute = require('./routes/calories.route')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
app.use('/', express.static(path.join(__dirname, '../build/static')));
app.use('/api', ingredientsRoute)
app.use('/api', foodsRoute)
app.use('/api', caloriesRoute)

// PORT number
const port = process.env.PORT || 4000;
//show the port connect is working
app.listen(port, () => {
    console.log('Connected to port on http://localhost:' + port)
})
