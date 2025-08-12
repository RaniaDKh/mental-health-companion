import { Request,Response } from "express";
import { getAllHistories} from "../service/historyService";
import { posthistory } from "../service/historyService";
export default async function getAllMoods(req:Request, res : Response):Promise<any>{
    try
    {
       
       const data=  await getAllHistories();
       
       return res.status(200).json(data);
    }catch (error ) {
        console.error('Error fetching reponses:' , error);
       return res.status(500).json({message : 'Internal server error'});
        }
};
//post

 export  async function addHistory(req:Request, res : Response):Promise<any>{
    try
    {  
        const data = req.body;
        console.log({2:req});
       const newmood=  await posthistory(data);
        
       return res.status(200).json(newmood);
        
    }catch (error ) {
        console.error('Error creating question:' , error);
       return res.status(500).json({message : 'Internal server error'});
        }
        
};