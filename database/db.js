import mongoose from 'mongoose';


const Connection = async (URL) =>{
    
    try{
        
        mongoose.set("strictQuery", false);
        await mongoose.connect(URL,{ useNewUrlParser:true })
        console.log("db connection successfully");
    }catch(error)
    {
        console.log("error while connection to db",error);
    }
}
export default Connection;