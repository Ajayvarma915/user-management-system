import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import getUserByEmail from "./app/utils/GetUserByEmail";
import {compare} from 'bcryptjs'

export const {
    handlers:{GET,POST},
    auth,
    signIn,
    signOut
}=NextAuth({
    session:{
        strategy:'jwt',
        maxAge:5*60,
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                Password:{},
            },
            async authorize(credentials){
                if(!credentials) return null;
                try {
                    const user=getUserByEmail(credentials?.email);
                    // console.log(user);
                    
                    if(user){
                        // console.log("credentials",credentials?.password+" "+"user password : "+user.newPassword);
                            const isMatch=await compare(credentials?.password,user.newPassword)
                            console.log(isMatch);
                            
                            if(isMatch) return user;
                            else throw new Error("Check Your Password")
                    }
                    else throw new Error("User Not Found")
                } catch (error) {
                    throw new Error(error.message);
                }
            }
        })
    ]
})