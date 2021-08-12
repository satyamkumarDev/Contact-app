import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Contact from '../models/contactModels.js';
import data from '../data.js';

const contactRouter=express.Router();
contactRouter.get('/seed', expressAsyncHandler(async (req,res)=>{
    const createdContacts= await Contact.insertMany(data.contacts);
    res.send({createdContacts});
}));

contactRouter.get('/', expressAsyncHandler(async (req,res)=>{
    const contactLists= await Contact.find({});
    res.send({contactLists});
}));
export default contactRouter;