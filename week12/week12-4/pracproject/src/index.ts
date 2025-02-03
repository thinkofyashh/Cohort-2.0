import {Client} from 'pg';

const client =new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost:5432/postgres"
    })


async function createUserTable(){
    await client.connect();
    try{
    
    const result=await client.query(
        
        `
        CREATE TABLE IF NOT EXISTS userTable(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );

        `
        
    )
    console.log(result)
    }catch(err){
        console.log(err);
    }finally{
        await client.end();
    }
    
}    

createUserTable();