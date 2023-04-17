import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js"); 


const handler = async (req,res)=>{
    if(req.method == 'POST'){
        const {username,email} = req.body;
        const encPa= CryptoJS.AES.encrypt(req.body.password,`${process.env.PASSWORD_SECRET}`).toString();
        let u = new User({username,email,password:encPa})
        await u.save();

    res.status(200).json({Sucess:true})
    }else{
        res.status(400).json({Sucess: false,Error:'Bad request'})
    }
}

export default connectDb(handler)













