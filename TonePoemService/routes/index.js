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

router.patch('/sounds/:id', function(req, res) {    
    Sound.findByIdAndUpdate(req.params.id, req.body)
        .then(function() {
            res.json('Sound updated');
        })
        .catch(function(err) {
            res.status(422).send("Sound update failed.");
        });
});

router.post('/sounds/:id', function(req, res) {
    Sound.findByIdAndUpdate(req.params.id, {$inc: {adjs: {abandoned: 1}}})
    .then(function() {
        res.json('Sound updated');
    })
    .catch(function(err) {
        res.status(422).send("Sound update failed.");
    });

})

// router.route("/sounds/:id").post(async (req, res) => {
//     const { id } = req.params;
//     collection.updateOne({ _id: id }, { $inc: {adjs: {abandoned: 1}}});
//     return res.status(200).json({Updated});
// })

module.exports = router;