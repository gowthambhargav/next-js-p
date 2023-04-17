import connectDb from "../../middleware/mongoose";
import AddBlog from '../../models/Blog'

const handler = async (req, res) => {
 
        if(req.method == 'POST'){
            
               
                
    
            let b = await AddBlog.findOneAndUpdate(req.body.slug,req.body)
            // let b = await AddBlog.findByIdAndUpdate(req.body._id,req.body)
    
        
        res.status(200).json({Sucess:"Sucsess",b})
    
        }else{
            res.status(400).json({Error:'Bad request'  })
        }
    }


export default connectDb(handler)