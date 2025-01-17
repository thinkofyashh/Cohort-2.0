// write a function to get the data in the users table in the database .

import { Client} from "pg";

const client = new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
    
})

async function getUserdata(email:string){
    try{
        await client.connect();
        const query=`SELECT * FROM users WHERE email=$1`;
        const value=[email];
        const result=await client.query(query,value);
        if(result.rows.length>0){
            console.log("user founded",result.rows[0]);
            return result.rows[0];
        }else{
            console.log("user not found");
            return null;
        }
    }catch(error){
        console.log("error",error);
    }finally{
        await client.end();
    }
}
getUserdata('manakchaudhary@gmail.com');
