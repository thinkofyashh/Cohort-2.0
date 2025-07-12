import CredentialsProvider from "next-auth/providers/credentials"
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
        }
    },
    
        
    }