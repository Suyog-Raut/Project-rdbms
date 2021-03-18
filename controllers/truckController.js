const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Truck = mongoose.model('Truck');

const app = express();

app.set('view engine', 'hbs');

router.get('/', (req, res) => {
    res.render("truck/addOrEdit.hbs", {
        viewTitle: "Insert truck"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var truck = new Truck();
    truck.t_id = req.body.t_id;
    truck.t_no = req.body.t_no;
    truck.no_of_csg_handled = req.body.no_of_csg_handled;
    truck.stage = req.body.stage;
    truck.assigned = req.body.assigned;
    truck.save((err, doc) => {
        if (!err)
            res.redirect('truck/list');
        else {
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Truck.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('truck/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("truck/addOrEdit.hbs", {
                    viewTitle: 'Update Truck',
                    truck: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Truck.find((err, docs) => {
        if (!err) {
            res.render("truck/list.hbs", {
                list : docs
            });
        }
        else {
            console.log('Error in retrieving truck list :' + err);
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
    Truck.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("truck/addOrEdit.hbs", {
                viewTitle: "Update Truck",
                truck: doc
            });
        }
    }).lean();
});

router.get('/delete/:id', (req, res) => {
    Truck.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/truck/list');
        }
        else { console.log('Error in truck delete :' + err); }
    }).lean();
});

module.exports = router;