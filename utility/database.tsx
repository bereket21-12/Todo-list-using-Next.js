import mongoose from "mongoose";

let isconnected =  false //to track 

export const connectTODB= async ()=>{

    mongoose.set('strictQuery' ,true);
    if(isconnected){
        console.log("Mongodb is already connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"Todo",
            

        })

        isconnected = true
        console.log("Mongodb Connected")
    } catch (error) {
     console.log(error)   
    }

}