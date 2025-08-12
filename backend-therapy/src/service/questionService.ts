import { executeSQLQuery } from "../db";
import { Request, Response } from 'express';

//GET
export async function getAllQuestions(){
    const sql=`Select * FROM lo."Questions"`;
    const result:any = await executeSQLQuery(sql);
    console.log({result})
return result.rows
}
    //POST
export async function postQuestions(data:any){
    try{
      
    const sql=`INSERT INTO lo."Questions" (id, data)
VALUES (${data.id},'${data.data}') 
returning id;`;
    
    const result:any = await executeSQLQuery(sql);
    console.log({result})
return result.rows;
}
catch (error:any) {
       
     throw error;
        }}
  
//DELETE
export async function deletequestionById(id:string)
{   try{
    const sql=`delete FROM lo."Questions"
    where id=${id}`;
    await executeSQLQuery(sql);
    
return true;
}
catch (error:any) {
       
     throw error;
}}
//UPDATE
export async function updatereponseById(data:any,id:any)
{ 
    try{const sql= ` UPDATE lo."Reponses"
SET data= '${data.data}', id_question = ${data.id_question}
WHERE id = ${data.id}
RETURNING id`;

    const result:any = await executeSQLQuery(sql);
    console.log({result});
return result.rows;}
catch (error:any) {
       
     throw error;
        }
    }

//UPDATE
export async function updateQuestionById(id:any,data:any)
{   try{
    const sql=`UPDATE lo."Questions"
    SET data= '${data.data}'
    WHERE id = ${data.id}
    returning id ; `;
    const result:any = await executeSQLQuery(sql);
    console.log({result})
return result.rows;
}catch (error:any) {
       
     throw error;
        }
    }







