const downloadProduct = require('../model/downloadModel')


exports.addtoDownloadRecipe=async(req,res)=>{
    console.log("inside addtoDownloadRecipe ")

    const {id}=req.params
    const userId=req.userId
    const{name,img,deatail}=req.body
    console.log(name,img,deatail);
    try {
        //ceheck product already download
        const existingProduct = await downloadProduct.findOne({product:id})
        if(existingProduct){
            existingProduct.count += 1
            await existingProduct.save()
            res.status(200).json(existingProduct)
        }else{
            // add product model
            const newProduct = new downloadProduct({
                ProductId:id,
                Productname:name,
                ProductImage:img,
                ProductDeatail:deatail,
                count:1,
                userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
 

        }
    } catch (err) {
        res.status(401).json(err)
    }
    
    
} 

//user download products

exports.getUserDownloadProducts=async(req,res)=>{
    console.log("inside getUserDownloadProducts");
    const userId=req.userId
    try {
        const existingProduct=await downloadProduct.find({userId})
        res.status(200).json(existingProduct)
    } catch (err) {
        res.status(401).json(err)
    }
    
}

//getall download product

exports.getAlllDownloads=async(req,res)=>{
    console.log("inside getAllDownloadProducts");
    try {
        const existingProduct = await downloadProduct.find()
        res.status(200).json(existingProduct)
        
    } catch (err) {
        res.status(401).json(err)        
    }

    
}

