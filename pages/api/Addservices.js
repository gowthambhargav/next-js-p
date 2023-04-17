import connectDb from "../../middleware/mongoose";
import Services from "@/models/Services";

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        const {title,slug,description,price,information} = req.body;
        let servicess = await new Services({title,slug,description,price,information})
         await servicess.save()
         res.status(200).json({Sucess:true,servicess})
        }
}

export default connectDb(handler)