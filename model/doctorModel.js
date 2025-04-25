const  mongoose = require('mongoose')

const poroductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    materials:{
        type:Array,
        required:true

    },
    assemblyInstructions:{
        type:Array,
        required:true

    },
    assemblyTimeMinutes:{
        type:Number,
        required:true

    },
    weightKg:{
        type:Number,
        required:true
    },
    dimensions:{
        type:String,
        required:true
    },
    style:{
        type:String,
        required:true
    },
    priceUSD:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    reviewCount:{
        type:Number,
        required:true
    },
    tags:{
        type:Array,
        required:true
    },
    userId:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
})

const produacts = mongoose.model("produacts",poroductSchema)
module.exports= produacts