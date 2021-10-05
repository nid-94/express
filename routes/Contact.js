const express =require ("express");
const path= require ("path");

const router=express.Router();

router.get('/contact',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','Contact.html'))
}
)
module.exports=router;