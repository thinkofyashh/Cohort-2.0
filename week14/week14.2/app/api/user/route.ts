import { NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client';



// Use the prisma client in your code


const client = new PrismaClient()


export async function POST(req:NextRequest){
    const body = await req.json()

    const user = await client.user.create({
        data:{
            username:body.username,
        email:body.email,
        password:body.password
        }
    })

    console.log(user.id)

    console.log(body)




    return Response.json({
        msg:"Succesfully Signed up"
    })
}

export async function GET(){
    const userData=await client.user.findFirst({})
    return Response.json(userData)


}