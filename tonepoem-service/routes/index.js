//Coded by: Jiyoon Pyo, Lucia Rhode
const axios = require('axios');

const express = require ('express'); 
const req = require('express/lib/request');
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
    })
});

router.get('/sounds/:id/adj', function(req, res) {
    Sound.findById(req.params.id, function(err, sound) {
        if (!sound) {
            res.status(404).send('No result found');
        } else {
            adjectives = sound.adjs
            adjectives.sort((a, b) => b.value - a.value);
            res.json(adjectives.slice(0, 10));
        }
    })
});

// https://stackoverflow.com/questions/33241608/mongoose-elemmatch-and-inc-query-based-on-id
router.put('/sounds/:id/:selection', async function(req, res) {
    const seyuniscute = await axios.get("http://localhost:4567/whoami", { headers: { authorization: req.headers.authorization }}).catch(() => null)
    if (!seyuniscute || !seyuniscute.data || !seyuniscute.data.userId){
        res.status(401).send();
        return
    }


    adjective = req.params.selection;
    Sound.findOneAndUpdate(
        {_id: req.params.id, adjs:{$elemMatch:{text:adjective}}},
        {$inc:{"adjs.$.value":1}},
    )
        .then(function() {
            res.json(req.params);
        })
        .catch(function(err) {
            res.status(422).send(err);
        });
});

module.exports = router;