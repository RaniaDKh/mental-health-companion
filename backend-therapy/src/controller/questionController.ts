/*This file (questionController.ts) is like a waiter that:
Goes to the kitchen (PostgreSQL)
Gets the food (questions)
Brings it back to the customer (your frontend)
*/
import { Request,Response } from "express";
/*Request = what the user sends (like clicking a button on your site)

Response = what you send back (like the list of questions)*/
import { getAllQuestions } from "../service/questionService";
import { postQuestions } from "../service/questionService";
import { deletequestionById } from "../service/questionService";
import { updateQuestionById} from "../service/questionService";
/*You made a pool in db.ts that knows how to talk to your PostgreSQL database.

You're now bringing it here so you can use it to send SQL commands.*/
//get 
 export default async function getAllquestions(req:Request, res : Response):Promise<any>{
    try
    {
       const data=  await getAllQuestions();
        // const result = await pool.query('Select * FROM "Questions');
        /*This sends an SQL command to your database.

"Questions" is the name of your table.

await = wait for the database to respond.

result now holds the data you got back.*/
       return res.status(200).json(data);//“Here’s the actual list of questions inside the package.”
        /*res.status(200) = "All good!"

.json(...) = send the questions as JSON to the frontend.

result.rows = the actual list of questions (each one is a row in your table)*/
  /*.json(result.rows)
This tells Express: send the data in JSON format.

result.rows is the actual list of rows (questions) you got from the database.

📝 You’re saying: “Here’s the data, formatted in JSON, send it to the user.”

*/  
    }catch (error ) {
        console.error('Error fetching questions:' , error);
       return res.status(500).json({message : 'Internal server error'});
        }
        /*If anything goes wrong, we show an error in the terminal

And return a message: “Internal server error” with HTTP code 500*/
};

//post

 export  async function postquestions(req:Request, res : Response):Promise<any>{
    try
    {
        const data = req.body
        console.log("data",data)
       const newqs=  await postQuestions(data);
        
       return res.status(200).json(newqs);
        
    }catch (error ) {
        console.error('Error creating question:' , error);
       return res.status(500).json({message : 'Internal server error'});
        }
        
};

//delete
export async function deletequestion(req: Request, res: Response): Promise<any> {
  try {
    const { id } = req.params;
    const dlqs = await deletequestionById(id);
    if(dlqs === true){
return res.status(200).json("deleted item success");
    }
    return res.status(200).json(dlqs);
  } catch (error) {
    console.error('Error deleting question:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

//update
export async function updateQuestion(req: Request, res: Response): Promise<any> {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedQuestion = await updateQuestionById(id, data);
    return res.status(200).json(updatedQuestion);
  } catch (error) {
    console.error('Error updating question:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
