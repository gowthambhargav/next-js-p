import User from "@/models/User";
import connectDb from "../../middleware/mongoose";
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js"); 
var jwt = require('jsonwebtoken');


const handler = async (req,res)=>{
    if(req.method == 'POST'){
        let user = await User.findOne({"email":req.body.email})
        const bytes = CryptoJS.AES.decrypt(user.password,`${process.env.PASSWORD_SECRET}`)
        let encPa = bytes.toString(CryptoJS.enc.Utf8)
        if(!user){
            res.res.status(400).json({Sucess: false, Error: 'User Not found'  })
        }else{
            if (req.body.email == user.email && req.body.password == encPa) {
                var token = jwt.sign({ email: user.email, username: user.username }, `${process.env.NEXT_PUBLIC_JWT_SECRET}`);
                res.status(200).json({ Sucess: true,token})
            }
            else{
                res.status(400).json({Sucess: false, Error: 'Invalid credentials' })
            }
        }
    }else {
        res.status(400).json({Sucess: false, Error: 'Bad request' })
    }
}

export default connectDb(handler)