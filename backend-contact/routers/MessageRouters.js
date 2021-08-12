
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Message from '../models/messageModels.js';
import data from '../data.js';

const messageRouter=express.Router();

messageRouter.get('/', expressAsyncHandler(async (req,res)=>{
    const messageLists= await Message.find({});
    res.send({messageLists});
}));

messageRouter.post('/', expressAsyncHandler(async(req, res)=>{
        const message=new Message({
            name:req.body.name,
            otp:req.body.otp,
            contact: req.body.contact           
        });
        const createdMessage= await message.save();
        res.status(201).send({message: 'Message Saved!', data: createdMessage})
}))




export default messageRouter;