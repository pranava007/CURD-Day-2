import express from "express";
import cors from "cors";
import emproutes from "./Routers/employeeRouter.js";


const app = express()
const PORT = 4000;

app.use(express.json())
app.use(cors())

app.use('/api', emproutes )

// app.get('/',(req,res)=>{
//     res.status(200).send("API Running Susseccfully");
// })


app.listen(PORT,(req,res)=>{
     console.log("App is running on : ",PORT);
})