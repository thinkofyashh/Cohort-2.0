import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";
import { number } from "zod";

const prisma =new PrismaClient()

async function insertUser(username:string,password:string,firstname:string,lastname:string){

    const res=await prisma.user.create({
    data:{
        username,password,firstname,lastname
    }
    })
    console.log(res);
}


//insertUser("test22","te21st","te32st","tes22t");
async function createTodos(title:string,des:string,userId:number){
    const res=await prisma.todo.create({
        data:{
            title,description:des,userId
        }})
}
createTodos("gym","go to the gym",1);
async function getTodos(userId:number){
    const res=await prisma.todo.findMany({
        where:{userId}
    })
    console.log(res);
}

async function getUserAndTodo(userId:number){
    const res=await prisma.todo.findMany({
        where:{userId},
        select:{
            id:true,
            title:true,
            description:true,
            user:true
        }
    })
    console.log(res);
}
getUserAndTodo(1);

//getTodos(1);
