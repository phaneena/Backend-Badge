const express=require("express")
const app=express()

app.use(express.json())
app.post("/user",(req,res)=>{
    const {email,name}=req.body
    console.log(name,email)
    res.send("user created")
})
app.listen(3100,()=>{
    console.log("server running")
})