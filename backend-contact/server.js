import express from 'express';
import dotenv from 'dotenv';
import  mongoose from 'mongoose';
import contactRouter from './routers/contactRouters.js';
import messageRouter from './routers/MessageRouters.js';
import expressAsyncHandler from 'express-async-handler';
import fast2sms from 'fast-two-sms'

dotenv.config()
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/contact', {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})

app.post('/send-messages', expressAsyncHandler(async (req, res)=>{
    var options = {authorization : '3LMS9KzlD5upionkq7YVOAT0fFCGjh2PeaIty8QbvsUdXZxWE1MGVtfXS9iQoxNIBrWzv3LclFEmPdw6' , message : req.body.otp ,  numbers : [req.body.contact]} 
    const response= await fast2sms.sendMessage(options)
    res.send(response)
}))
app.use('/api/contacts',contactRouter);
app.use('/api/messages', messageRouter);

app.get('/', (req, res)=>{
    res.send('Server is ready')
})

app.listen(process.env.PORT || 5000,()=>{
   console.log('server at http://localhost:'+ (process.env.PORT || 5000))
})



app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})