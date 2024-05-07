const express=require('express')
const app=express()


//middleware
app.use(express.json())

const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})  