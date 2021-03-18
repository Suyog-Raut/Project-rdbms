const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/RdbmsProject",{
    useNewUrlParser : true,
}).then(()=> {
    console.log("connection successful");
}).catch((e)=> {
    console.log("no connection");
})

require('./employee.model');
require('./truck.model');
require('./cons.model');
require('./customer.model');
require('./bill.model');
