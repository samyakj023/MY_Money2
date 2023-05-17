const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://samyak:samyak@cluster0.wopzkqo.mongodb.net/my-money' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))