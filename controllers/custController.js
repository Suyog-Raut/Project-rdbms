const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Consign = mongoose.model('Consign');
const Customer = mongoose.model('Customer1');
const Bill = mongoose.model('Bill');
const Truck = mongoose.model('Truck');


router.get('/list', (req, res) => {
  Customer.find((err, docs) => {
    if (!err) {
      res.render("customer/list.hbs", {
        list: docs
      });
    } else {
      console.log('Error in retrieving customer list :' + err);
    }
  }).lean();
});

router.get('/list2', (req, res) => {
  Consign.find((err, docs) => {
    if (!err) {
      res.render("customer/list2.hbs", {
        list: docs
      });
    } else {
      console.log('Error in retrieving consign list :' + err);
    }
  }).lean();
});







module.exports = router;
