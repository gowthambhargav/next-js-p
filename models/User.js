import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    username:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
    },
    gender:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
Profileimg:{
    type:String,
    default:"https://i.ibb.co/5smBjfD/profile-user.png"
},
   
}, { timestamps: true })


mongoose.models = {}
export default mongoose.model("User", UserSchema);