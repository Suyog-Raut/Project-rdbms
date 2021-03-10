const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    User_Id : {
        type : Number,
        //required : true
    },
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
        type : Number,
        //required : true
    }
    
  });

  const uin = new mongoose.model("Consignments",consgSchema);

  module.exports = uin;

  const bookvehicle = new mongoose.model("Customer",customerSchema);

  module.exports = bookvehicle;  