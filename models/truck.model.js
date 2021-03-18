const mongoose = require('mongoose');

var truckSchema = new mongoose.Schema({
    t_id: {
        type: Number,
        required: 'This field is required.'
    },
    t_no: {
        type: String,
        required: 'This field is required.'
    },
    no_of_csg_handled : {
        type: Number
    },
    stage: {
        type : Number
    },
    assigned: {
        type: String
    }
});

// make assigned boolean 
mongoose.model('Truck', truckSchema);