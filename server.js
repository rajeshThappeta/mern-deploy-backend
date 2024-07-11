const exp=require('express');
const app=exp()
const cors=require('cors');
app.use(cors({
   // origin:'http://localhost:5173'
}))
require('dotenv').config()
const port=3000 || env.process.PORT;

app.get('/users',(req,res)=>{
    res.send({message:"users",payload:[{id:1,name:"ravi"},{id:2,name:"manohar"}]})
})

app.listen(port,console.log(`server on port ${port}`))