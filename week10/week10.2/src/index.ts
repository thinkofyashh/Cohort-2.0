import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertUser(firstname : string,lastname:string ,email:string){
    try{
        const res=await prisma.user.create({
            data:{
                firstname,
                lastname,
                email
            }
        })
        console.log(res)
    }catch(error){
        console.log(error)
    }
    
}

insertUser("yash","rawat","ysahRwaru@gmail.com");