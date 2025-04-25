const produacts =require('../model/doctorModel')
 
// get all recipes
 
exports.getallproductController=async(req,res)=>{
    console.log("inside getproduct");
    try {
        const allproduct = await produacts.find()
        res.status(200).json(allproduct)
    } catch (err) {
        res.status(401).json(err)
    }
    
}

//getaProductdeails -nees authorice

exports.getaProductdeails=async(req,res)=>{
    console.log('getaProductdeails inside');
    const {id}= req.params
    try {
        const produactdeatial= await produacts.findById({_id:id})
        res.status(200).json(produactdeatial)
    } catch (err) {
        res.status(401).json(err

        )
    }
    
}
//related products
exports.realtedProducts=async(req,res)=>{
    console.log("inside realtedProducts ");
    // const cusine =req.query.cuisine
    try {
        const allproducts= await  produacts.find() //{{cuisine}}
        res.status(200).json(allproducts) 
    } catch (err) {
        res.status(401).json(err)
    }
    
}



exports.addProductController = async (req, res) => {
  const {name,
    assemblyInstructions,
    assemblyTimeMinutes,
    materials,
    userId,
    weightKg,
    dimensions,
    style,
    priceUSD,
    image,
    tags,
    rating,
    reviewCount
  } = req.body;

  try {
    const existingProduct = await produacts.findOne({ name });

    if (existingProduct) {
      return res.status(406).json({ message: "Product already exists" });
    }

    const newProduct = new produacts({
      name,
      materials,
      weightKg,
      dimensions,
      style,
      
      priceUSD,
      userId,
      image,
      tags,
      rating,
      reviewCount,
      assemblyInstructions,
      assemblyTimeMinutes
    });

    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (err) {
    console.error("Add product error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

//admin edit controller
exports.editProductController = async (req, res) => {
  const {id}=req.params
  const {name,
    assemblyInstructions,
    assemblyTimeMinutes,
    materials,
    userId,
    weightKg,
    dimensions,
    style,
    priceUSD,
    image,
    tags,
    rating,
    reviewCount
  } = req.body;

  try {
    const existingProduct = await produacts.findOne({ name });

    if (existingProduct) {
      return res.status(406).json({ message: "Product already exists" });
    }

    const UpdateProduct = await produacts.findByIdAndUpdate({_id:id},{
      name,
      materials,
      weightKg,
      dimensions,
      style,
      
      priceUSD,
      userId,
      image,
      tags,
      rating,
      reviewCount,
      assemblyInstructions,
      assemblyTimeMinutes
    },{new:true});

    await UpdateProduct.save();
    res.status(200).json(UpdateProduct);
  } catch (err) {
    res.status(401).json(err)
  }
};

exports.deleteProductController = async (req, res) => {
  const {id}=req.params
  try {
   const removeProduct = await produacts.findByIdAndDelete({_id:id})
    res.status(200).json(removeProduct);
  } catch (err) {
    res.status(401).json(err)
  }
};
