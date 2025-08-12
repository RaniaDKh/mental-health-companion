import { executeSQLQuery } from "../db";
import { Request, Response } from 'express';

//GET
export async function getAllHistories(){
    const sql=`Select * FROM lo."History_Mood"`;
    const result:any = await executeSQLQuery(sql);
    console.log({2:result})
return result.rows
}
//POST
export async function posthistory(data:any){
    console.log({data})
    try{
      
    const sql=`INSERT INTO lo."History_Mood" (id,"History")
VALUES (${data.id},'${data.data}') 
returning id;`;
    
    const result:any = await executeSQLQuery(sql);
 
return result.rows;
}
catch (error:any) {
       
     throw error;
        }}