import express, {Request, Response} from 'express'
import {Value}  from "@repo/common/config";

const PORT = 8000;
const app = express()


app.get("/ex", (req: Request,res: Response)=>{
    res.json({message: "Backend working "+Value})
})

app.listen(PORT,()=>{
    console.log("Server is running on port"+ PORT)
})