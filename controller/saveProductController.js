const saveProduct=require('../model/saveProduct')

exports.addToSavedProduct=async(req,res)=>{
   console.log("inside addToSavedProduct")
    const {id}=req.params
    const userId =req.userId
    const {name,image}=req.body
    console.log(name,image);
    try {
        const existingProduct= await saveProduct.findOne({productId:id,userId})
        if(existingProduct){
            res.status(406).json("product alertady saved")
        }else{
            const newProduct=new saveProduct({
                productId:id,
                name:name,
                image:image,
                userId:userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }        
    } catch (err) {
        res.status(401).json(err)
        
    }
    
}

//get saved product authoorzed user
exports.getUserSavedproduct=async(req,res)=>{
    console.log("inside getUserSavedproduct");
    const userId=req.userId
    try {   
        const existingProduct= await saveProduct.find({userId})
        if(existingProduct){
            res.status(200).json(existingProduct)
        }
    } catch (err) {
        res.status(401).json(err)
    }
    
}

//delete saved product
exports.removeSavedProductController=async(req,res)=>{
    console.log("inside removeSavedProduct");
    const {id}=req.params
  
    try {
        const existingProduct=await saveProduct.findByIdAndDelete({ _id : id})
        res.status(200).json(existingProduct)
        console.log(existingProduct);
    } catch (err) {
        res.status(401).json(err)        
    }
    
}