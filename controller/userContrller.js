const user = require('../model/userModel')
const  bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

exports.adduserConteroller=async(req,res)=>{
    console.log('inside adduserConteroller');
    const {username,email,password}=req.body
    try {
        const existingUser= await user.findOne({email})
        if(existingUser){
            res.status(406).json("user already login .....")
        }else{
            const encryptpassword= await bcrypt.hash(password,10)
            const newuser= new user({
                username,email,password:encryptpassword,profilePic:""
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
        
    } catch (err) {
        res.status(401).json(err)
    }
    
}


//login part

exports.addLoginController = async (req, res) => {
    console.log("addLoginController inside");
    const { email, password } = req.body;

    try {
        const existingUser = await user.findOne({email})
        if(existingUser){
            let isUserMatch = await bcrypt.compare(password,existingUser.password)
            if(isUserMatch || password==existingUser.password ){
                const token= jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
                res.status(200).json({users:existingUser,token})
            }
        }else{
            res.status(404).json("invalid Password")
        }
        
        

    } catch (err) {
    
    }
};

//edit user profile

exports.editUserController=async(req,res)=>{
    console.log("inside editUserController");
    const {profilePic}=req.body
    const userId=req.userId
    try {
        const existingUser= await user.findById({_id:userId})
            existingUser.profilePic=profilePic
            await existingUser.save()
            res.status(200).json(existingUser)
        
    } catch (error) {
        res.status(401).json(error)
    }
    
}

//get user profile

exports.getAllUserController=async(req,res)=>{
    console.log("inside getUserController");

    try {
        const existingUser= await user.find({role:"User"})
        res.status(200).json(existingUser)
    } catch (err) {
        res.status(401).json(err)
    }
}