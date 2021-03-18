const mongoose = require('mongoose');

const consgSchema = new mongoose.Schema({
    Csg_No : {
        type : Number,
        //required : true
    },
    Weight : {
        type : Number,
        required : true
    },
    Sender : {
        type : String,
        required : true
    },
    Receiver  : {
        type : String,
        required : true
    },
    Source_Branch  : {
        type : String,
        required : true
    },
    Destination_Branch  : {
        type : String,
        required : true
    },
    User_Id : {
        type : String,
        // required : true
    }
    
  });

  const uin = new mongoose.model("Consginments",consgSchema);

  module.exports = uin;