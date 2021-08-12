import mongoose from 'mongoose';

const messageSchema=new mongoose.Schema({
    otp:{type:String, required:true},
    name:{type:String, required:true,},
    contact:{
        type:mongoose.Schema.Types.ObjectId,
            ref:'Contact',
            required:true
    }
},
{
    timestamps:true,
});
const Message=mongoose.model('Message', messageSchema);
export default Message;