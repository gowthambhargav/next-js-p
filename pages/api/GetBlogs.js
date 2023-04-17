import connectDb from "../../middleware/mongoose";
import GetBlog from "@/models/Blog";

const handler = async (req,res)=>{
    const Blog = await GetBlog.find({})
    res.json({Blog})
}

export default connectDb(handler)