const express =require('express')
require('dotenv').config()
const cors =require('cors')

const roomifyserver= express()
require("./config/connection")
const router =require("./routers/router")


roomifyserver.use(cors())
roomifyserver.use(express.json())
roomifyserver.use(router)

const PORT = 3000 || process.env.PORT

roomifyserver.listen(PORT,()=>{
    console.log(` roomify strat at a ${PORT}`);
    
})
roomifyserver.get("/",(req,res)=>{
res.status(200).send("<h1>roomify server stratd </h1>")
})