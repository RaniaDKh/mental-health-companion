import { Pool } from "pg";
import env from "dotenv";
env.config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export async function executeSQLQuery(SQL: string): Promise<any> {
   
try{ 
 let QueryResult = await pool.query(SQL);
  return QueryResult;
 
  }catch(error){
    console.log(`${error} \n [SQL Query] ${SQL}`);
    throw error; 
  }}