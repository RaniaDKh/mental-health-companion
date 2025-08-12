import { executeSQLQuery } from "../db";

//get
export async function getReponsesById(id: any){
    try{
    const sql=`Select * FROM lo."Responses"
            where id_question ='${id}'`;
    const result:any = await executeSQLQuery(sql);
    console.log({result: result.rows})
return result.rows
}catch (error:any) {
       
     throw error;
        }
    }
//POST
export async function postreponse(data:any){
    try{
    console.log("res:", data)
    const sql=`INSERT INTO lo."Reponses"( id_question,data)
VALUES (${data.id_question},'${data.data}') 
returning id`;//temporarly fill the blanks (palceholder)
 
    const result:any = await executeSQLQuery(sql);
    console.log({result})
return result.rows;
}catch (error:any) {
       
     throw error;
        }}
    
//DELETE
export async function deletereponseById(id:any)
{   try{
    const sql=`delete FROM lo."Reponses"
    where id = ${id}`;
    await executeSQLQuery(sql);

return true
}
catch (error:any) {
       
     throw error;
        }
    }
//UPDATE
export async function updatereponseById(data:any,id:any)
{ 
    try{const sql= ` UPDATE lo."Reponses"
SET data= '${data.data}', id_question = ${data.id_question}
WHERE id = ${id}
RETURNING id`;

    const result:any = await executeSQLQuery(sql);
    console.log({result});
return result.rows;}
catch (error:any) {
       
     throw error('')
        }
    }