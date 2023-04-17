import mongoose from 'mongoose';
const { Schema } = mongoose;


const ServicesSchema = new Schema({
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
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    information: {
        type: Array
    },
    correction: {
        type: Number
    },
    status: {
        type: String
    },
    Simg: {
        type: String,
        default:"https://i.ibb.co/tM2fwn5/13454492-5260432.jpg"
    }
})




mongoose.models = {}
export default mongoose.model("Services", ServicesSchema);