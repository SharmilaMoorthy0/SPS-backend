const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const gameRoutes=require('./routes/game.routes')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(cors())
app.use('/',gameRoutes)



const URI = "mongodb+srv://sharmilamoorthy:sharmilamoorthy@cluster0.qqbwzvc.mongodb.net/"
mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running in ${PORT}`)
        console.log(`mongodb connected`)
    })
}).catch((err) => {
    console.log(err)
})