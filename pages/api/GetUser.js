import User from "@/models/User";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import connectDb from "../../middleware/mongoose";


const handler = async (req,res)=>{
        const userInfo = await User.find({})
        res.json({userInfo})

   
}

export default connectDb(handler)