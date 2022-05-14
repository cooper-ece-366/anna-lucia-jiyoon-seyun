//Coded by: Jiyoon Pyo
const express = require ('express'); 
const { collection } = require('../models/sound');
const router = express.Router(); 

const Sound = require('../models/sound'); 

router.get('/sounds', function(req, res) { 
    Sound.find(function(err, sounds) {
        res.json(sounds);
    });
});

router.get('/sounds/:id', function(req, res) {  
    Sound.findById(req.params.id, function(err, sound) {
        if (!sound) {
            res.status(404).send('No result found');
        } else {
            res.json(sound);
        }
    });
});

router.put('/sounds/:id', function(req, res) {    
    //adjective = req.body;
    Sound.findByIdAndUpdate(req.params.id, {
        $inc: {"adjsa.$.abandoned" : 1}
    })
        .then(function() {
            res.json(req.params);
        })
        .catch(function(err) {
            res.status(422).send("Sound update failed.");
        });
});

// router.post('/sounds/:id', function(req, res) {
//     Sound.findByIdAndUpdate(req.params.id, {$inc: {adjs: {abandoned: 1}}})
//     .then(function() {
//         res.json('Sound updated');
//     })
//     .catch(function(err) {
//         res.status(422).send("Sound update failed.");
//     });

// })

module.exports = router;