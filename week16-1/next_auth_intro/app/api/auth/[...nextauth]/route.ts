import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials"


const handler =NextAuth({

    providers:[
     CredentialsProvider({
        name:'credential',
        credentials:{
            username:{label:"username",type:"text",placeholder:"email"},
            password:{label:"password",type:"password",placeholder:"password"}

        },async authorize(credentials:any){
            console.log(credentials);
            return {
                id:"user1",
                name:"mankirat",
                email:"mankirat@gmail.com"
            };
         }
     })
    ],
    secret: process.env.NEXTAUTH_SECRET 
}

)

export const GET=handler;
export const POST=handler;  