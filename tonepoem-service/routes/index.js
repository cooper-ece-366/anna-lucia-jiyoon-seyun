//Coded by: Jiyoon Pyo, Lucia Rhode (authorization header)
const axios = require('axios');

const express = require ('express'); 
const req = require('express/lib/request');
const router = express.Router(); 
const Sound = require('../models/sound'); 

// this gets all the sounds in the database (used in the explore page)
router.get('/sounds', function(req, res) { 
    Sound.find(function(err, sounds) {
        res.json(sounds);
    });
});

// this gets the sound based on the id (used in exploreindiv, and tag)
// in other words this gets the individual sounds data
router.get('/sounds/:id', function(req, res) {  
    Sound.findById(req.params.id, function(err, sound) {
        if (!sound) {
            res.status(404).send('No result found');
        } else {
            res.json(sound);
        }
    })
});

// finds the sound based on id and sorts the adjectives in descending order
// then it gets the top 10 adjectives in the list
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

// 1. find the sound with the specific id in the database
// 2. find the object with the matching adjective
// 3. increment the value associated with that adjective by 1
// reference: https://stackoverflow.com/questions/33241608/mongoose-elemmatch-and-inc-query-based-on-id
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