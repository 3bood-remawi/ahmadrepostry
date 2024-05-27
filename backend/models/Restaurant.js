const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        require:true 
    },
    title:{
        type:String,
        require:true 
    },
    subtitle:{
        type:String,
        require:true 
    },
    image:{
        type: [String], 
        require:true 
    }
})


const RestaurantModel =mongoose.model("restaurants",RestaurantSchema)
module.exports = RestaurantModel;