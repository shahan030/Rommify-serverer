const testimonials =require('../model/testimionialModel')

exports.addTestmoelController = async (req, res) => {
    console.log("Received Request Body:", req.body); // This will help you see if req.body is undefined
    const { name, email, message } = req.body;

    try {
        const newTestimonel = new testimonials({ name, email, message });
        await newTestimonel.save();
        res.status(200).json(newTestimonel);
    } catch (err) {
        res.status(401).json(err);
    }
};

exports.getAllTestmoelController = async (req,res)=>{
    console.log("inside getAllTestmoelController");
    try {
        const allTestimodel = await testimonials.find()
        res.status(200).json(allTestimodel)
    } catch (err) {
    res.status(401).json(err)        
    }

    
}

exports.editTestmoelController = async (req,res)=>{
    const {id}=req.params
  const status= req.query.status
  try {
    const  existingUser = await testimonials.findById({_id:id})
    existingUser.status=status
    await existingUser.save()
    res.status(200).json(existingUser)
  } catch (err) {
    res.status(401).json(err)    
  }

}


exports.getallApprovedTestmoelController = async (req,res)=>{
  console.log("inside getallApprovedTestmoelController");
  try {
    const allTestimodel = await testimonials.find({status:"Approved"})
    res.status(200).json(allTestimodel)
  } catch (err) {
    res.status(401).json(err)            
  }
  
}
