const express = require('express');
const matchController= require('../controllers/match')

const router=express.Router();


// router.get('/',matchController.getAll)
// router.get('/:matchId',matchController.getMatch);
router.post('/',matchController.post);
// router.put('/:matchId',matchController.updateMatch);
// router.delete('/:matchId',matchController.deleteMatch);


module.exports = router;