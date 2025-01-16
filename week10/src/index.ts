// write a function to insert data in the users table in the database .

import { Client} from "pg";

const client = new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
    
})

async function insertData(username : string, email: string, password:string ){
    try{
        await client.connect();
        const query=`INSERT INTO users (username,email,password) VALUES($1,$2,$3);` ;
        const values =[username,email,password]
        const res = await client.query(query,values);
        console.log(res);

    }catch(error){
        console.log(error);
    }finally{
        await client.end();
    }
    
}
insertData('manak','manakchaudhary@gmail.com','123442');
