const { default: mongoose } = require('mongoose')
const moongosee= require('mongoose')

const saveProductSchema= new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
   userId:{
        type:String,
        required:true
    }
})

const saveProduct=moongosee.model('saveProduct',saveProductSchema)
module.exports=saveProduct