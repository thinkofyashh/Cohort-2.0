import { PrismaClient } from '@prisma/client'
import { Interface } from 'readline'

const prisma = new PrismaClient()

async function getUser(email:string){
    try {
        const res=await prisma.user.findFirst({
            where:{email}
        })
        console.log(res);
    }catch(err){
        console.log(err);
    }

}

getUser("ysahRwaru@gmail.com")