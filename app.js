const express=require('express')
const dbCon=require('./Server/config/db')

const app=express()


//middleware
app.use(express.json())

const port=process.env.PORT || 5000
const db=mongoose.connection

db.on('error',()=>{
    console.log("Fail connection!")
})


db.once('open',()=>{
    console.log("connected to DB Successful")
})


app.get('/',(req,res)=>{
    res.send("hi user");
    
})







app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})  