import mongoose from "mongoose";


export const connection = async(username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@blog-app.7tgdqxa.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser:true});
        console.log('database connected');
    }catch(error){
        console.log('database not connected', error)
    }
}
export default connection