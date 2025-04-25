const mongoose=require('mongoose')

const downloadSchema=new mongoose.Schema({
    ProductId:{
        type:String,
        requird:true
    },
    Productname:{
        type:String,
        requird:true
    },
    ProductImage:{
        type:String,
        requird:true
    },
    ProductDeatail:{
        type:String,
        requird:true
    },

    count:{
        type:Number,
        requird:true
    },
    userId:{
        type:String,
        requird:true
    },


})
const downloadProduct=mongoose.model("downloadProdut",downloadSchema)
module.exports=downloadProduct