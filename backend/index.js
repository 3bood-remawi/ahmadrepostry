const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RestaurantModel =require('./models/Restaurant')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://mhmadawawdy:test123@cluster0.qagomj3.mongodb.net/mern')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err)); 


app.get('/getRestaurant' ,  async (req, res) => {
  const restaurants =  await RestaurantModel.find();
  res.json(restaurants)
  
})


app.listen(5000,()=>{
  console.log("server is running")
})
