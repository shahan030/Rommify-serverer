const moongoose = require('mongoose')

const userSchema = new moongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"User"
    },
    profilePic:{
        type:String,

    }
})
const user= moongoose.model("user",userSchema)
module.exports=user