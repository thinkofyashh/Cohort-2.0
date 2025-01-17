import { PrismaClient } from '@prisma/client'
import { Interface } from 'readline'

const prisma = new PrismaClient()





 interface updateParams{
    firstname:string
    lastname:string
}
async function updateUser(email:string,updatedValue:updateParams){
    try{
        const res =await prisma.user.update({
            where: { email },
            data:{
                firstname:updatedValue.firstname,
                lastname:updatedValue.lastname
            }
            
        })
        console.log(res);
    }catch(error){

        console.log(error);
    }
}
updateUser("ysahRwaru@gmail.com",{firstname:"manak",lastname:"chaudhary"})