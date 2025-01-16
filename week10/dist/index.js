"use strict";
// write a function to insert data in the users table in the database .
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
function getUserdata(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `SELECT * FROM users WHERE email=$1`;
            const value = [email];
            const result = yield client.query(query, value);
            if (result.rows.length > 0) {
                console.log("user founded", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("user not found");
                return null;
            }
        }
        catch (error) {
            console.log("error", error);
        }
        finally {
            yield client.end();
        }
    });
}
getUserdata('manakchaudhary@gmail.com');
