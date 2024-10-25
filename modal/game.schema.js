const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    player1: {type:String,requried:true},
    player2: {type:String,requried:true},
    score1: {type:Number,requried:true},
    score2: {type:Number,requried:true},
    rounds: {type:Number,requried:true}
},{
    timestamps:true,
    versionKey:false
});

 const Games= mongoose.model('Games', gameSchema);
 module.exports=Games