const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({

  name: {
      type: String,
      required: 'This field is required.'
  },
  email: {
      type: String
  },
  mobile: {
      type: String
  },
  address : {
      type : String,
      required : true
  },

  weight : {
      type : Number,
      required : true
  },
sender : {
      type : String,
      required : true
  },
receiver  : {
      type : String,
      required : true
  },
  sourceBranch  : {
      type : String,
      required : true
  },
  destinationBranch  : {
      type : String,
      required : true
  },
  cost : {
    type : Number
  }
});

  BillSchema.path('email').validate((val) => {
      emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(val);
  }, 'Invalid e-mail.');

  mongoose.model('Bill', BillSchema);
