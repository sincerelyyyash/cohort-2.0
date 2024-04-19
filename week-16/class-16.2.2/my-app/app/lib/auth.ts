import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: 'Email', type: 'text', placeholder: 'Email' },
              password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials: any) {
                
                return {
                    id: "1",
                    name: "Yash",
                    email: "yash@gmail.com",
                };
            },
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_ID  || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID || "", 
            clientSecret: process.env.GITHUB_SECRET || ""
          })
      ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
        session: ({session, token, user }:any)=>{
            if(session && session.user){
                session.user.id =token.userId;
            }
            return session;
        }
      }
}