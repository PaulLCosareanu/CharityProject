const express = require ('express')
const router = express.Router();

router.get("/", getAllImages);

function getAllImages(req,res){
    res.send("this is data images")
}
module.exports=router;