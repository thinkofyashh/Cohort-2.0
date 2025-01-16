// write a function to create a user table in the database .

import { Client} from "pg";

const client=new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
})
async function createUserTable(){
    try{
        await client.connect();
        const result = await client.query(
            
            `
            CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP

        )
            
            `
            
        )
        console.log(result);

    }catch(error){
        console.log("Error creating user table",error)
    }
}
createUserTable();

