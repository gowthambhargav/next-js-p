import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrdersSchema= new Schema({
    email:{type:String,        required: true},
    phone:{type:String,        required: true},
    subscription:{type:Object},
    services:{type:Object},
    orderId:{type:String,  required: true},
    amount:{type:String,  required: true}
})




mongoose.models = {}
export default mongoose.model("Orders", OrdersSchema);