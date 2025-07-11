import { NextRequest, NextResponse } from "next/server"
import { json } from "stream/consumers"





export function GET (req:NextRequest,{params:{authRoutes}}:{
    params:{
        authRoutes: string[]
    }
})
{
    console.log(authRoutes)
    return NextResponse.json({
        message:'hello '
    })

}



