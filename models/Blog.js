import mongoose from 'mongoose';
const { Schema } = mongoose;


const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: Array
    },
    Bimg: {
        type: String
    },
    tags: {
        type: Array
    },
    category:{
        type:String
    },
    author: {
        type: String
    },
    comments: {
        type: Array
    },
    likes:{
    type:Array 
    }
}, { timestamps: true })




mongoose.models = {}
export default mongoose.model("Blogs", BlogSchema);