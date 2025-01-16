// write a function to create a user table in the database .

import { Client} from "pg";

const client = new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
    
})

async function insertData(){
    try{
        await client.connect();
        const query=`INSERT INTO users (username,email,password) VALUES('yashrawat1','yashrawatr@gmail.com','1234345');` ;
        const res = await client.query(query);
        console.log(res);

    }catch(error){
        console.log(error);
    }finally{
        await client.end();
    }
    
}
insertData();
