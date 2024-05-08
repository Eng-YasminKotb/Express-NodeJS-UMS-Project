const mongoose =require('mongoose')
const connectDB=async()=>{
    try{
        mongoose.set('strictQuery', false);
        const conn=await mongoose.connect(process.env.DATABASE_URL)
        console.log(`Database Connected: ${conn.connect.host}`)
    }
    catch(err){
         console.log({error: err.message})
    }
}

module.exports=connectDB