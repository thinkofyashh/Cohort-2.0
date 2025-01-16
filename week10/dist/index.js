"use strict";
// write a function to create a user table in the database .
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
            CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP

        )
            
            `);
            console.log(result);
        }
        catch (error) {
            console.log("Error creating user table", error);
        }
    });
}
createUserTable();
function insertUserdata() {
    return __awaiter(this, void 0, void 0, function* () {
        const client1 = new pg_1.Client({
            connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
        });
        try {
            yield client1.connect();
            const result = yield client1.query(`
        
            INSERT INTO users (username,email,password) VALUES ('yashRawat','yashrawat@gmail.com','1234534');`);
            console.log(result);
        }
        catch (error) {
            console.log("Error inserting the data in the database.", error);
        }
        finally {
            yield client1.end();
        }
    });
}
insertUserdata();
