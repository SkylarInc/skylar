const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');
const schemas = require('../models/schemas');

router.get('/:resource', function(req, res){
    var resource = req.params.resource;

    if (req.query.id){
        params: {_id: req.query.id};
        controller[resource].findById(schemas[resource], params,
            function(err, data){
                if (err){
                    res.json({
                        confirmation: 'Fail',
                        message: 'Error: ' + err,
                    });
                } else if (!data){
                    res.json({
                        confirmation: 'Fail',
                        message: 'Data not found'
                    });
                } else {
                    res.json({
                        confirmation: 'Success',
                        message: 'Found data',
                        data: data
                    });
                }
        });
    } else {
        controller[resource].find(schemas[resource],
            function(err, data){
                if (err){
                    res.json({
                        confirmation: 'Fail',
                        message: 'Error: ' + err,
                    });
                } else if (!data){
                    res.json({
                        confirmation: 'Fail',
                        message: 'Data not found'
                    });
                } else {
                    res.json({
                        confirmation: 'Success',
                        message: 'Found data',
                        data: data
                    });
                }
        });
    }
});

router.post('/:resource', function(req, res){
    var resource = req.params.resource;
    console.log(req);
    controller[resource].create(req.body, function(err, data){
        if (err){
            res.json({
                confirmation: 'Fail',
                message: 'Error: ' + err
            });
        } else {
            res.json({
                confirmation: 'Success',
                message: 'Created data',
                data: data
            });
        }
    });
});

router.put('/:resource', function(req, res){
    var resource = req.params.resource;
    controller[resource].update(req.body, function(err, data){
        if (err){
            res.json({
                confirmation: 'Fail',
                message: 'Error: ' + err
            });
        } else {
            res.json({
                confirmation: 'Success',
                message: 'Updated data',
                data: data
            });
        }
    })
});

router.delete('/:resource', function(req, res){
    var resource = req.params.resource;
    if (!req.query.id) {
        res.send('ID needed to delete resource');
    } else {
        controller[resource].delete(req.body, function(err){
            if (err){
                res.json({
                    confirmation: 'Fail',
                    message: 'Error' + err
                });
            } else {
                res.json({
                    confirmation: 'Success',
                    message: 'Deleted data'
                });
            }
        });
    }
});


module.exports = router;
