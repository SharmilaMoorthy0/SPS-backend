const Games = require("../modal/game.schema")

const Game=async(req,res)=>{
    try {
        const {player1, player2, score1, score2, rounds}=req.body
        let data={
            player1, player2, score1, score2, rounds
        }
        const savegame=await Games.create(data)
       if(!savegame) {
          return res.json({ status: 0, message: "game  data not created" })
       }
       res.json({ status: 1, message: "game data created " })
    } catch (error) {
        console.log("game.controller.js/Game-->error", error)
    }
}


const allgame=async(req,res)=>{
    try {
        const game=await Games.find()
        if(!game){
            return res.json({ status: 0, message: "game not found" })
        }
        res.json({ status: 1, response:game})
    } catch (error) {
        console.log("game.controller.js/allgame-->error", error)
    }
}
const Delete = async(req,res)=>{
    try {
        const { id } = req.params
        if (!id) {
           return res.json({ status: 0, message: " History id requried" })
        }
        const game = await Games.findByIdAndDelete(id)
       
        if (!game) {
           return res.json({ status: 0, message: " history not deleted" })
        }
        res.json({ status: 1, message: "Deleted successfully" })
     } catch (error) {
        console.log("game.controller.js/Delete-->error", error)
     }
}
module.exports={allgame,Game,Delete}