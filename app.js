import express from "express"
const app = express()
const PORT = process.env.PORT || 5000;

app.get("/ping",(req,res)=>{
    res.send("pong!!")
})

app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`);
})
