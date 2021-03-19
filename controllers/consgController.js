const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Consign = mongoose.model('Consign');
const Customer = mongoose.model('Customer1');
const Bill = mongoose.model('Bill');
const Truck = mongoose.model('Truck');

var tid;

router.get('/', (req, res) => {
  res.render("consignment/addOrEdit.hbs", {
    layout: 'newLayout',
    viewTitle: "Book Consignment"
  });

  Truck.find({assigned : "false"},(err, docs) => {
    if (!err) {
        tid = docs[0].t_id;
    }
    else {
        console.log('Error in retrieving truck list :' + err);
    }
}).lean();

});

router.post('/', (req, res) => {
  if (req.body._id == '')
    insertRecord(req, res);
  else
    updateRecord(req, res);
});


function insertRecord(req, res) {
  var cust = new Customer();
  cust.name = req.body.name;
  cust.email = req.body.email;
  cust.address = req.body.address;
  cust.mobile = req.body.mobile;

  cust.save();

  var cons = new Consign();
  cons.Weight = req.body.Weight;
  cons.Sender = req.body.Sender;
  cons.Receiver = req.body.Receiver;
  cons.Source_Branch = req.body.Source_Branch;
  cons.Destination_Branch = req.body.Destination_Branch;
  // cons.Sender = req.body.Sender;
  cons.save();

  var bill = new Bill();
bill.name = req.body.name;
bill.email = req.body.email;
bill.address = req.body.address;
bill.mobile = req.body.mobile;
bill.weight = req.body.Weight;
bill.sender = req.body.Sender;
bill.receiver = req.body.Receiver;
bill.sourceBranch = req.body.Source_Branch;
bill.destinationBranch = req.body.Destination_Branch;
var r = req.body.Weight*10+2000;
bill.cost= r;

  bill.name = req.body.name;
  bill.email = req.body.email;
  bill.address = req.body.address;
  bill.mobile = req.body.mobile;
  bill.weight = req.body.Weight;
  bill.sender = req.body.Sender;
  bill.receiver = req.body.Receiver;
  bill.sourceBranch = req.body.Source_Branch;
  bill.destinationBranch = req.body.Destination_Branch;
  bill.cost = 2000;
  bill.truck_id = tid;

  Truck.findOneAndUpdate({
    query: {"t_id" : tid },
    update : {"assigned" : "true" }
  }, (err, doc) => {
    if (err)
      console.log('Error during record update : ' + err);
});

bill.save((err, doc) => {
  if (!err)
    res.render('consignment/success.hbs',{
      viewTitle: "Booked the Consignment",
      consignment: req.body,
      r: r,
      tid: tid
    });
  else {
    if (err.name == 'ValidationError') {
      handleValidationError(err, req.body);
      res.render("consignment/addOrEdit.hbs", {
        layout: 'newLayout',
        viewTitle: "Update Consignment",
        consignment: req.body
      });
    } else
      console.log('Error during record insertion : ' + err);
  }
});
}

function updateRecord(req, res) {
  Bill.findOneAndUpdate({
    _id: req.body._id
  }, req.body, {
    new: true
  }, (err, doc) => {
    if (!err) {
      res.redirect('consignment/list');
    } else {
      if (err.name == 'ValidationError') {
        handleValidationError(err, req.body);
        res.render("consignment/addOrEdit.hbs", {
          viewTitle: 'Update Consignment',
          consignment: req.body
        });
      } else
        console.log('Error during record update : ' + err);
    }
  });
}

router.get('/list', (req, res) => {
  Bill.find((err, docs) => {
    if (!err) {
      res.render("consignment/list.hbs", {
        list: docs
      });
    } else {
      console.log('Error in retrieving consignment list :' + err);
    }
  }).lean();
});


function handleValidationError(err, body) {
  for (field in err.errors) {
    switch (err.errors[field].path) {
      case 'fullName':
        body['fullNameError'] = err.errors[field].message;
        break;
      case 'email':
        body['emailError'] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get('/:id', (req, res) => {
  Bill.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("consignment/addOrEdit.hbs", {
        viewTitle: "Update consignment",
        consignment: doc
      });
    }
  }).lean();
});

router.get('/delete/:id', (req, res) => {
Bill.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/consignment/list');
    } else {
      console.log('Error in consignment delete :' + err);
    }
  }).lean();
});

module.exports = router;
// var cust = new Customer();
// cust.name = req.body.name;
// cust.email = req.body.email;
// cust.address = req.body.address;
// cust.mobile = req.body.mobile;
//
// cust.save();
//
// var cons = new Consign();
// cons.Weight = req.body.Weight;
// cons.Sender = req.body.Sender;
// cons.Receiver = req.body.Receiver;
// cons.Source_Branch = req.body.Source_Branch;
// cons.Destination_Branch = req.body.Destination_Branch;
// // cons.Sender = req.body.Sender;
// cons.save();
