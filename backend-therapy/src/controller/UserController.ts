import { Request,Response } from "express";
import { postuser} from "../service/UserService";


//post

 export  async function adduser(req:Request, res : Response):Promise<any>{
    try
    {  
        const data = req.body;
    console.log("Incoming request body:", req.body);
       const us=  await postuser(data);
        
       return res.status(200).json(us);
        
    }catch (error ) {
        console.error('Error posting user:' , error);
       return res.status(500).json({message : 'Internal server error'});
        }
        
};