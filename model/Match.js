const mongoose = require('mongoose');

const player = new mongoose.Schema({
    name:String,
    isCaptain:Boolean,
})


const team = new mongoose.Schema({
    name:String,
    squad:[player],
})

const matchSchema = new mongoose.Schema({
    homeTeam:String,
    awayTeam:String,
    winner:String,
    toss:String,
})


module.exports=mongoose.model('Match',matchSchema);

