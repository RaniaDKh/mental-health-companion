
import { Request,Response } from "express";
import {getReponsesById} from "../service/reponseService";
import { postreponse } from "../service/reponseService";
import { deletereponseById } from "../service/reponseService";
import { updatereponseById} from "../service/reponseService";

//get
export default async function getAllreponsesBYID(req:Request, res : Response):Promise<any>{
    try
    {
        const {id} = req.params
       const data=  await getReponsesById(id);
       
       return res.status(200).json(data);
    }catch (error ) {
        console.error('Error fetching reponses:' , error);
       return res.status(500).json({message : 'Internal server error'});
        }
};

//post

 export  async function postReponse(req:Request, res : Response):Promise<any>{
    try
    {
        
       const data = req.body;
       console.log("data",data)
       const newreponse=  await postreponse(data);
        
       return res.status(200).json(newreponse);
        
    }catch (error ) {
        console.error('Error creating reponse:' , error);
       return res.status(500).json({message : 'Internal server error'});
        }
        
};

//delete
export async function deletereponse(req: Request, res: Response): Promise<any> {
  try {
    const {id}  = req.params;
    const dlreponse = await deletereponseById(id);
    if(dlreponse === true){
return res.status(200).json("deleted item success");
    }
    
  } 
  catch (error) {
    console.error('Error deleting reponse:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

//update
export async function updatereponse(req: Request, res: Response): Promise<any> {
  try {
    const { id } = req.params;
    const  data = req.body;
    console.log("data",data)
    const updatedreponse = await updatereponseById(data,id);
    return res.status(200).json(updatedreponse);
  } catch (error) {
    console.error('Error updating reponse:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

