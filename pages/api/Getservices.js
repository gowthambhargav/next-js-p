import connectDb from "../../middleware/mongoose";
import Services from "@/models/Services";

const handler = async (req,res)=>{
    const services = await Services.find({})
    res.json({services})
}

export default connectDb(handler)