import { Mongoose } from "mongoose";

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  id: {
    type: String
    },
  name: { 
    type: String, required: true
    },
  lastOilChangeDate: { 
    type: String, required: true 
    },
  mileage: { type: String, required: true }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;