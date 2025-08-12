import { executeSQLQuery } from "../db";


//POST
export async function postuser(data:any){
    try{
    console.log("res:", data)
    const sql=`INSERT INTO lo."users"(id, email, password_hash)
VALUES ('${data.id}','${data.email}','${data.password_hash}') 
returning id`;
 
    const result:any = await executeSQLQuery(sql);
    console.log({result})
return result.rows;
}catch (error:any) {
       
     throw error;
        }}