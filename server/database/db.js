import mongoose from "mongoose";


export const connection = async(username, password)=>{
   
    try{
        await mongoose.connect(URL, {useNewUrlParser:true});
        console.log('database connected');
    }catch(error){
        console.log('database not connected', error)
    }
}
export default connection