import { NextRequest, NextResponse } from "next/server";




let countReq=0;
export function middleware(req:NextRequest){
    console.log("request count :",countReq++)
    return NextResponse.next()

}

export const config = {
    matcher: '/api/:path*',
  }