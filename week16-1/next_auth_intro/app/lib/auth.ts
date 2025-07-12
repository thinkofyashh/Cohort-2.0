import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";
export const NEXT_AUTH={

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
     }),
     GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
     }),
     GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID || "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
     })


    ],
    secret: process.env.NEXTAUTH_SECRET ,
    callbacks:{
        signIn:({user}:any)=>{
            if(user.email=="random@gmail.com") return false;
            return true;

        },
        jwt:({token,user}:any)=>{
            console.log(token)
          if(user){
                token.id=user.id;
          }
            return token;
        },
        session:({session,token,user}:any)=>{
            console.log(session)

            if(session && session.user){
                session.user.id=token.id;
            session.user.uii=token.jti
            }
            console.log(session)
            return session;
        },
        
    },
    pages:{
        signIn:'/signin'
    }
    
        
    }