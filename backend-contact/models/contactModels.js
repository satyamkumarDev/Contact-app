import mongoose from 'mongoose';

const contactSchema=new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    contact:{type:String, required:true, unique:true},
},
{
    timestamps:true,
});
const Contact=mongoose.model('Contact', contactSchema);
export default Contact;