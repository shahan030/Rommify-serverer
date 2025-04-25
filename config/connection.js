const moongoose =require('mongoose')

const connectionString= process.env.DBCONNECTION

moongoose.connect(connectionString).then((res)=>{
    console.log("Mongoodb atlas sucessfully connected");
    
}).catch(err=>{
    console.log("mongoodb failed ");
    console.log(err);
    
    
})