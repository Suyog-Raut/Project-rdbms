const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    Mobile_No : {
        type : Number,
        required : true
    },
    Email_Id  : {
        type : String,
        required : true
    }
    
  });

  const bookvehicle = new mongoose.model("Customer",customerSchema);

  module.exports = bookvehicle;  